// Import the functions you need from the SDKs you need
import { nanoid } from "nanoid";
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJRVF4228q-8xu4JiYopFnrcC2y2nYOt4",
  authDomain: "pantree-655c8.firebaseapp.com",
  projectId: "pantree-655c8",
  storageBucket: "pantree-655c8.appspot.com",
  messagingSenderId: "414079942552",
  appId: "1:414079942552:web:3ce93194e257ee46def5ed",
  measurementId: "G-RY779QBTVK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
  const analytics = getAnalytics(app);
}

export const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

export const getItems = async (user: User) => {
  const q = query(collection(db, "items"), where("userId", "==", user.uid));
  const querySnapshot = await getDocs(q);
  let res = [];
  querySnapshot.forEach((doc) => res.push(doc.data()));
  return res;
};

export const postItems = async (
  user: User,
  data: {
    items: {
      itemName: string;
      quantity: number;
    }[];
  }
) => {
  const itemsData = data.items.reduce(
    (
      prev: Record<
        string,
        {
          quantity: number;
          userId: string;
        }
      >,
      curr
    ) => {
      if (prev[curr.itemName]) {
        return {
          ...prev,
          [curr.itemName]: {
            quantity: prev[curr.itemName].quantity + curr.quantity,
            userId: user.uid,
          },
        };
      } else {
        return {
          ...prev,
          [curr.itemName]: {
            quantity: curr.quantity,
            userId: user.uid,
          },
        };
      }
    },
    {} as Record<
      string,
      {
        quantity: number;
        userId: string;
      }
    >
  );

  const batch = writeBatch(db);

  data.items.forEach((item) => {
    batch.set(doc(collection(db, "items")), {
      itemName: item.itemName,
      quantity: item.quantity,
      userId: user.uid,
    });
  });

  await batch.commit();
};

export const register = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const upload = async (blob: Blob) => {
  const filename = nanoid();
  const storageRef = ref(storage, "images/" + filename + ".jpeg");
  return uploadBytes(storageRef, blob);
};

export const getImageUrl = async (filename: string) => {
  const bucketRoot = "gs://pantree-655c8.appspot.com/images";
  const imageRef = ref(storage, "images/" + filename);
  const url = await getDownloadURL(imageRef);
  return url;
};

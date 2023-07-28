// import { productsDB } from "../../productsDB/productsDB";
// import { db } from "../../firebaseConfig";
// import { addDoc, collection } from "firebase/firestore";

// export default function Dashboar() {
//   const uploadProducts = () => {
//     productsDB.forEach((product) => {
//       let productsCollection = collection(db, "products");
//       addDoc(productsCollection, product);
//     });
//   };

//   return <button onClick={uploadProducts}>Subir productos</button>;
// }

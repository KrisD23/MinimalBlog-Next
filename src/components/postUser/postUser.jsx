import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

// Fetch data with an API

// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );
//   if (!res) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

async function PostUser({ userId }) {
  // Fetch data with an API
  // const user = await getData(userId);

  // Fetch data without an API
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  );
}

export default PostUser;

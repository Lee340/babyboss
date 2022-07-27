import { useEffect, useState } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";

import { Button } from "./Button";
import { Card } from "./Card";
import { app } from "./FirebaseApp";

const db = getDatabase(app);

function writeUserData(userId, name, email, imageUrl) {
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

export function HomeRoute() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const usersRef = ref(db, "users/");
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      setUsers(Object.values(data));
    });
  }, []);

  return (
    <>
      <p>Dorothy and Saki and Boram and Uni! Can you see this?</p>;
      <div id="firebaseui-auth-container" />
      {users.map((user) => {
        return <div key={user.username}>{user.username}</div>;
      })}
      <Card color="light">
        <Button
          onClick={() => {
            writeUserData(
              Math.floor(Math.random() * 100),
              Math.floor(Math.random() * 100),
              "borama@borama.bor",
              null
            );
          }}
        >
          Click me
        </Button>
        <Button type="primary">Primary button</Button>
        <Button type="transparent">Transparent button</Button>
      </Card>
    </>
  );
}

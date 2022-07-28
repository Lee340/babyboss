import { useEffect, useState } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import {
  faUtensils,
  faDemocrat,
  faBicycle,
  faPersonSwimming,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { Card } from "./Card";
import { app } from "./FirebaseApp";
import { Icon } from "./Icon";

import "./HomeRoute.css";

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
      <Card color="light" className="main-tabselector">
        <Button type="light">
          Brunch <Icon size="l" icon={faUtensils} />
        </Button>
        <Button type="light">
          Softplay <Icon size="l" icon={faDemocrat} />
        </Button>
        <Button type="light">
          Park <Icon size="l" icon={faBicycle} />
        </Button>
        <Button type="light">
          Pool <Icon size="l" icon={faPersonSwimming} />
        </Button>
        <Button type="light">
          Event Venue <Icon size="l" icon={faFlag} />
        </Button>
      </Card>
      <div id="firebaseui-auth-container" />
      {users.map((user) => {
        return <div key={user.username}>{user.username}</div>;
      })}
      <Card color="brand">
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
      </Card>
    </>
  );
}

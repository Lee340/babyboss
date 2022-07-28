import { useEffect, useState } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import {
  faUtensils,
  faDemocrat,
  faBicycle,
  faPersonSwimming,
  faFlag,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { Card } from "./Card";
import { app } from "./FirebaseApp";
import { Icon } from "./Icon";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";

import "./HomeRoute.css";

const db = getDatabase(app);

function writeUserData(userId, name, email, imageUrl) {
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

let initialized = false;

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
      <MapContainer
        id="map"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            <Icon icon={faCoffee} />
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
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

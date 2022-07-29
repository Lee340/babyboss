import { useEffect, useState } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import {
  faUtensils,
  faDemocrat,
  faBicycle,
  faPersonSwimming,
  faFlag,
  faCoffee,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { Card } from "./Card";
import { Text } from "./Text";
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
          Brunch&nbsp;&nbsp;
          <Icon size="l" icon={faUtensils} />
        </Button>
        <Button type="light">
          Softplay&nbsp;&nbsp;
          <Icon size="l" icon={faDemocrat} />
        </Button>
        <Button type="light">
          Park&nbsp;&nbsp;
          <Icon size="l" icon={faBicycle} />
        </Button>
        <Button type="light">
          Pool&nbsp;&nbsp;
          <Icon size="l" icon={faPersonSwimming} />
        </Button>
        <Button type="light">
          Event Venue&nbsp;&nbsp;
          <Icon size="l" icon={faFlag} />
        </Button>
      </Card>
      <div className="list-map-container">
        <div className="list">
          <Card color="subtle" className="list-item">
            <img className="list-item-img" alt="Kids Toys" src="./toys.jpeg" />
            <div className="list-item-content">
              <Text color="primary" size="l">
                Restaurant 1
              </Text>
              <span>
                <Icon icon={faStar} />
                <Icon icon={faStar} />
                <Icon icon={faStar} />
                <Icon icon={faStar} />
              </span>
              <div className="list-item-content-description">
                <Text color="primary" size="m">
                  This restaurant is great for family with kids!
                </Text>
              </div>
            </div>
          </Card>
          <Card color="subtle" className="list-item">
            <img className="list-item-img" alt="Kids Toys" src="./toys.jpeg" />
            Restaurant 2
          </Card>
          <Card color="subtle" className="list-item">
            <img className="list-item-img" alt="Kids Toys" src="./toys.jpeg" />
            Restaurant 3
          </Card>
          <Card color="subtle" className="list-item">
            <img className="list-item-img" alt="Kids Toys" src="./toys.jpeg" />
            Restaurant 4
          </Card>
          <Card color="subtle" className="list-item">
            <img className="list-item-img" alt="Kids Toys" src="./toys.jpeg" />
            Restaurant 5
          </Card>
        </div>

        <MapContainer
          id="map"
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              <Icon icon={faCoffee} />
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

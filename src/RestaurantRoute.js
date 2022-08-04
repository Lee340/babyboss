import { useState } from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import { Text } from "./Text";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./Icon";
import "./ShowRoute.css";
import { FileInput } from "./FileInput";

export function RestaurantRoute({ user, setUser, id, name }) {
  const [show, setShow] = useState(false);
  const [restaurant, setRestaurant] = useState("");

  return (
    <div>
      <Card type>Hi</Card>
    </div>
  );
}

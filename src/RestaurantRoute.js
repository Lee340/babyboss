import { useState } from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import { Text } from "./Text";
import {
  faStar,
  faMagnifyingGlass,
  faBarsProgress,
  faThumbsUp,
  faShareNodes,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./Icon";
import "./RestaurantRoute.css";

export function RestaurantRoute({ user, setUser, id, name }) {
  const [show, setShow] = useState(false);
  const [restaurant, setRestaurant] = useState("");

  return (
    <div>
      <Card className="restaurant-card" color="subtle">
        <div className="restaurant-head">
          <Text className="restaurant-name" size="l" color="primary">
            {name}
          </Text>
          <div className="restaurant-stars">
            <Text size="m" color="primary">
              4
            </Text>
            <Icon size="s" icon={faStar} />
            <Icon size="s" icon={faStar} />
            <Icon size="s" icon={faStar} />
            <Icon size="s" icon={faStar} />
            <Icon size="s" icon={faStar} />
            <Text size="m" color="primary">
              10 reviews
            </Text>
          </div>
          <Button color="border">
            <Icon icon={faRoad} />
          </Button>
          <Button color="border">
            <Icon icon={faShareNodes} />
          </Button>
        </div>

        <div className="restaurant-review-head">
          <Text size="l" color="primary">
            Reviews
          </Text>
          <Button color="border">
            <Icon color="brand" size="l" icon={faMagnifyingGlass} />
          </Button>
          <Button color="border">
            <Icon color="brand" size="l" icon={faBarsProgress} />
            &nbsp;Sort
          </Button>
        </div>
        <Card color="light" className="restaurant-body">
          here
          <div className="restaurant-review-stars">
            <Icon icon={faStar} />
            <Icon icon={faStar} />
            <Icon icon={faStar} />
            <Icon icon={faStar} />
            <Icon icon={faStar} />
          </div>
          <div className="restaurant-review">
            <p>What is your child(ren)'s age range?</p>
          </div>
          <div className="restaurant-review-icons">
            <Button>
              <Icon icon={faThumbsUp} />
            </Button>
            <Button>
              <Icon icon={faShareNodes} />
            </Button>
          </div>
        </Card>
        <Card color="light" className="restaurant-body">
          here
          <div className="restaurant-review-stars">
            <Icon icon={faStar} />
            <Icon icon={faStar} />
            <Icon icon={faStar} />
            <Icon icon={faStar} />
            <Icon icon={faStar} />
          </div>
          <div className="restaurant-review">
            <p>This restaurant is family friendly!</p>
          </div>
          <div className="restaurant-review-icons">
            <Button>
              <Icon icon={faThumbsUp} />
            </Button>
            <Button>
              <Icon icon={faShareNodes} />
            </Button>
          </div>
        </Card>
      </Card>
    </div>
  );
}

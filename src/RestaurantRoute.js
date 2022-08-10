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
      <Card className="restaurant-card" type="subtle">
        <div className="restaurant-head">
          <div className="restaurant-head-main">
            <Text size="xl" color="primary">
              {name}
            </Text>
            <div className="restaurant-head-stars">
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
          </div>
          <div className="restaurant-head-btn">
            <Button type="round-border">
              <Icon icon={faRoad} /> &nbsp; Directions
            </Button>
            <Button type="round-border">
              <Icon icon={faShareNodes} /> &nbsp; Share
            </Button>
          </div>
        </div>

        <div className="restaurant-review-head">
          <Text size="l" color="primary">
            Reviews
          </Text>
          <Button type="border">
            <Icon color="brand" size="l" icon={faMagnifyingGlass} />
          </Button>
          <Button type="border">
            <Icon color="brand" size="l" icon={faBarsProgress} />
            &nbsp;Sort
          </Button>
        </div>
        <Card type="light" className="restaurant-body">
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
        <Card type="light" className="restaurant-body">
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

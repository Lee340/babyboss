import { useState } from "react";
import { Text } from "./Text";
import { Card } from "./Card";
import { Button } from "./Button";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./Icon";
import "./ReviewRoute.css";

export function ReviewRoute({ user, setUser }) {
  const [show, setShow] = useState(true);
  const [review, setReview] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div>
      <Card color="subtle">
        <div>
          {user != null ? (
            <img
              src={user.photoURL}
              alt="user profile"
              className="user-profile"
            />
          ) : (
            <Button type="primary">Login</Button>
          )}
        </div>
        <span>
          <Button>
            <Icon icon={faStar} />
          </Button>
          <Button>
            <Icon icon={faStar} />
          </Button>{" "}
          <Button>
            <Icon icon={faStar} />
          </Button>{" "}
          <Button>
            <Icon icon={faStar} />
          </Button>{" "}
          <Button>
            <Icon icon={faStar} />
          </Button>
        </span>
        <form
          action=""
          method="get"
          className="add-review"
          onSubmit={(e) => {}}
        >
          <div className="artists-add-art-row">
            <label htmlFor="review">Review</label>
            <input
              type="text"
              placeholder="Share your experience as parents at this place"
              required
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="file"
              onChange={(e) => {
                setSelectedFile(e.target.files[0]);
              }}
            />
          </div>
        </form>
        <div className="review-selector">
          <p>What is your child(ren)'s age range?</p>
          <div className="review-selector-details">
            <Button type="border">0-1yr</Button>
            <Button type="border">1-3yr</Button>
            <Button type="border">3-5yr</Button>
            <Button type="border">5-10yr</Button>
            <Button type="border">Over 10yr</Button>
          </div>

          <p>Did you dine in, take out, or get delivery?</p>
          <div className="review-selector-details">
            <Button type="border">Dine in</Button>
            <Button type="border">Take out</Button>
            <Button type="border">Delivery</Button>
          </div>

          <p>What did you get?</p>
          <div className="review-selector-details">
            <Button type="border">Breakfast</Button>
            <Button type="border">Brunch</Button>
            <Button type="border">Lunch</Button>
            <Button type="border">Dinner</Button>
            <Button type="border">Other</Button>
          </div>

          <p>How much did you spend per person?</p>
          <div className="review-selector-details">
            <Button type="border">£1-10</Button>
            <Button type="border">£10-20</Button>
            <Button type="border">£20-40</Button>
            <Button type="border">£40-60</Button>
            <Button type="border">Over £60</Button>
          </div>
        </div>
        <Button type="border">Cancel</Button>
        <Button type="primary">Post</Button>
      </Card>
    </div>
  );
}

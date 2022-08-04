import { useState } from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import { Text } from "./Text";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./Icon";
import "./ReviewRoute.css";
import { loginWithGoogle } from "./Authentication";
import { FileInput } from "./FileInput";

export function ReviewRoute({ user, setUser, id, name }) {
  const [show, setShow] = useState(false);
  const [review, setReview] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div>
      <Card className="review-card" color="subtle">
        <div className="review-restaurant-name">
          <Text size="l" color="primary">
            {name}
          </Text>
        </div>
        <div
          className="review-login"
          onClick={() => {
            if (user == null) {
              loginWithGoogle(setUser);
            } else if (show) {
              setShow(false);
            } else {
              setShow(true);
            }
          }}
        >
          {user != null ? (
            <>
              <img
                src={user.photoURL}
                alt="user profile"
                className="user-profile"
              />
              <div className="review-id">
                <Text bold={true} size="m" color="primary">
                  {user.displayName}
                </Text>
                <Text size="s">Posting publicly</Text>
              </div>
            </>
          ) : (
            <Button color="primary">Login</Button>
          )}
        </div>
        <div className="review-stars">
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
        </div>
        <form
          action=""
          method="get"
          className="review-content"
          onSubmit={(e) => {}}
        >
          <textarea
            type="text"
            className="review-text"
            placeholder="Share your experience as parents at this place"
            required
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          <FileInput
            className="review-add-photo"
            onChange={(e) => {
              setSelectedFile(e.target.files[0]);
            }}
          />
        </form>
        <div className="review-selector">
          <p>What is your child(ren)'s age range?</p>
          <div className="review-selector-details">
            <Button color="border">0-1yr</Button>
            <Button color="border">1-3yr</Button>
            <Button color="border">3-5yr</Button>
            <Button color="border">5-10yr</Button>
            <Button color="border">Over 10yr</Button>
          </div>

          <p>Did you dine in, take out, or get delivery?</p>
          <div className="review-selector-details">
            <Button color="border">Dine in</Button>
            <Button color="border">Take out</Button>
            <Button color="border">Delivery</Button>
          </div>

          <p>What did you get?</p>
          <div className="review-selector-details">
            <Button color="border">Breakfast</Button>
            <Button color="border">Brunch</Button>
            <Button color="border">Lunch</Button>
            <Button color="border">Dinner</Button>
            <Button color="border">Other</Button>
          </div>

          <p>How much did you spend per person?</p>
          <div className="review-selector-details">
            <Button color="border">£1-10</Button>
            <Button color="border">£10-20</Button>
            <Button color="border">£20-40</Button>
            <Button color="border">£40-60</Button>
            <Button color="border">Over £60</Button>
          </div>
        </div>
        <div className="review-submit">
          <Button color="border">Cancel</Button>
          <Button color="primary">Post</Button>
        </div>
      </Card>
    </div>
  );
}

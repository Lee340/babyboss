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
  const [ageSelection, setAgeSelection] = useState(null);
  const [orderTypeSelection, setOrderTypeSelection] = useState(null);
  const [mealSelection, setMealSelection] = useState(null);
  const [priceSelection, setPriceSelection] = useState(null);

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
            <Button
              onClick={() => {
                setAgeSelection("0");
              }}
              color={ageSelection === "0" ? "primary" : "border"}
            >
              0-1yr
            </Button>
            <Button
              onClick={() => {
                setAgeSelection("1");
              }}
              color={ageSelection === "1" ? "primary" : "border"}
            >
              1-3yr
            </Button>
            <Button
              onClick={() => {
                setAgeSelection("3");
              }}
              color={ageSelection === "3" ? "primary" : "border"}
            >
              3-5yr
            </Button>
            <Button
              onClick={() => {
                setAgeSelection("5");
              }}
              color={ageSelection === "5" ? "primary" : "border"}
            >
              5-10yr
            </Button>
            <Button
              onClick={() => {
                setAgeSelection("10");
              }}
              color={ageSelection === "10" ? "primary" : "border"}
            >
              Over 10yr
            </Button>
          </div>

          <p>Did you dine in, take out, or get delivery?</p>
          <div className="review-selector-details">
            <Button
              onClick={() => setOrderTypeSelection("0")}
              color={orderTypeSelection === "0" ? "primary" : "border"}
            >
              Dine in
            </Button>
            <Button
              onClick={() => setOrderTypeSelection("1")}
              color={orderTypeSelection === "1" ? "primary" : "border"}
            >
              Take out
            </Button>
            <Button
              onClick={() => setOrderTypeSelection("2")}
              color={orderTypeSelection === "2" ? "primary" : "border"}
            >
              Delivery
            </Button>
          </div>

          <p>What did you get?</p>
          <div className="review-selector-details">
            <Button
              onClick={() => {
                setMealSelection("0");
              }}
              color={mealSelection === "0" ? "primary" : "border"}
            >
              Breakfast
            </Button>
            <Button
              onClick={() => {
                setMealSelection("1");
              }}
              color={mealSelection === "1" ? "primary" : "border"}
            >
              Brunch
            </Button>
            <Button
              onClick={() => {
                setMealSelection("2");
              }}
              color={mealSelection === "2" ? "primary" : "border"}
            >
              Lunch
            </Button>
            <Button
              onClick={() => {
                setMealSelection("3");
              }}
              color={mealSelection === "3" ? "primary" : "border"}
            >
              Dinner
            </Button>
            <Button
              onClick={() => {
                setMealSelection("4");
              }}
              color={mealSelection === "4" ? "primary" : "border"}
            >
              Other
            </Button>
          </div>

          <p>How much did you spend per person?</p>
          <div className="review-selector-details">
            <Button
              onClick={() => {
                setPriceSelection("1");
              }}
              color={priceSelection === "1" ? "primary" : "border"}
            >
              £1-10
            </Button>
            <Button
              onClick={() => {
                setPriceSelection("10");
              }}
              color={priceSelection === "10" ? "primary" : "border"}
            >
              £10-20
            </Button>
            <Button
              onClick={() => {
                setPriceSelection("20");
              }}
              color={priceSelection === "20" ? "primary" : "border"}
            >
              £20-40
            </Button>
            <Button
              onClick={() => {
                setPriceSelection("40");
              }}
              color={priceSelection === "40" ? "primary" : "border"}
            >
              £40-60
            </Button>
            <Button
              onClick={() => {
                setPriceSelection("60");
              }}
              color={priceSelection === "60" ? "primary" : "border"}
            >
              Over £60
            </Button>
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

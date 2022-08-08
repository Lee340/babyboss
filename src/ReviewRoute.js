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
  const [stars, setStars] = useState(null);
  const [ageSelection, setAgeSelection] = useState(null);
  const [orderTypeSelection, setOrderTypeSelection] = useState(null);
  const [mealSelection, setMealSelection] = useState(null);
  const [priceSelection, setPriceSelection] = useState(null);
  const [age01, setAge01] = useState(false);
  const [age02, setAge02] = useState(false);
  const [age03, setAge03] = useState(false);
  const [age04, setAge04] = useState(false);
  const [age05, setAge05] = useState(false);

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
          <Button
            className={stars < 1 ? "faded" : null}
            onClick={() => setStars(1)}
          >
            <Icon icon={faStar} />
          </Button>{" "}
          <Button
            className={stars < 2 ? "faded" : null}
            onClick={() => setStars(2)}
          >
            <Icon icon={faStar} />
          </Button>{" "}
          <Button
            className={stars < 3 ? "faded" : null}
            onClick={() => setStars(3)}
          >
            <Icon icon={faStar} />
          </Button>{" "}
          <Button
            className={stars < 4 ? "faded" : null}
            onClick={() => setStars(4)}
          >
            <Icon icon={faStar} />
          </Button>{" "}
          <Button
            className={stars < 5 ? "faded" : null}
            onClick={() => setStars(5)}
          >
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
                if (age01) {
                  setAge01(false);
                } else {
                  setAge01(true);
                }
              }}
              color={age01 ? "primary" : "border"}
            >
              0-1yr
            </Button>

            <Button
              onClick={() => {
                if (age02) {
                  setAge02(false);
                } else {
                  setAge02(true);
                }
              }}
              color={age02 ? "primary" : "border"}
            >
              1-3yr
            </Button>
            <Button
              onClick={() => {
                if (age03) {
                  setAge03(false);
                } else {
                  setAge03(true);
                }
              }}
              color={age03 ? "primary" : "border"}
            >
              3-5yr
            </Button>
            <Button
              onClick={() => {
                if (age04) {
                  setAge04(false);
                } else {
                  setAge04(true);
                }
              }}
              color={age04 ? "primary" : "border"}
            >
              5-10yr
            </Button>
            <Button
              onClick={() => {
                if (age05) {
                  setAge05(false);
                } else {
                  setAge05(true);
                }
              }}
              color={age05 ? "primary" : "border"}
            >
              Over 10yr
            </Button>
          </div>

          <p>Did you dine in, take out, or get delivery?</p>
          <div className="review-selector-details">
            <Button
              onClick={() => {
                if (orderTypeSelection === 0) {
                  setOrderTypeSelection(null);
                } else {
                  setOrderTypeSelection(0);
                }
              }}
              color={orderTypeSelection === 0 ? "primary" : "border"}
            >
              Dine in
            </Button>
            <Button
              onClick={() => {
                if (orderTypeSelection === 1) {
                  setOrderTypeSelection(null);
                } else {
                  setOrderTypeSelection(1);
                }
              }}
              color={orderTypeSelection === 1 ? "primary" : "border"}
            >
              Take out
            </Button>
            <Button
              onClick={() => {
                if (orderTypeSelection === 2) {
                  setOrderTypeSelection(null);
                } else {
                  setOrderTypeSelection(2);
                }
              }}
              color={orderTypeSelection === 2 ? "primary" : "border"}
            >
              Delivery
            </Button>
          </div>

          <p>What did you get?</p>
          <div className="review-selector-details">
            <Button
              onClick={() => {
                if (mealSelection === 0) {
                  setMealSelection(null);
                } else {
                  setMealSelection(0);
                }
              }}
              color={mealSelection === 0 ? "primary" : "border"}
            >
              Breakfast
            </Button>
            <Button
              onClick={() => {
                if (mealSelection === 1) {
                  setMealSelection(null);
                } else {
                  setMealSelection(1);
                }
              }}
              color={mealSelection === 1 ? "primary" : "border"}
            >
              Brunch
            </Button>
            <Button
              onClick={() => {
                if (mealSelection === 2) {
                  setMealSelection(null);
                } else {
                  setMealSelection(2);
                }
              }}
              color={mealSelection === 2 ? "primary" : "border"}
            >
              Lunch
            </Button>
            <Button
              onClick={() => {
                if (mealSelection === 3) {
                  setMealSelection(null);
                } else {
                  setMealSelection(3);
                }
              }}
              color={mealSelection === 3 ? "primary" : "border"}
            >
              Dinner
            </Button>
            <Button
              onClick={() => {
                if (mealSelection === 4) {
                  setMealSelection(null);
                } else {
                  setMealSelection(4);
                }
              }}
              color={mealSelection === 4 ? "primary" : "border"}
            >
              Other
            </Button>
          </div>

          <p>How much did you spend per person?</p>
          <div className="review-selector-details">
            <Button
              onClick={() => {
                if (priceSelection === 0) {
                  setPriceSelection(null);
                } else {
                  setPriceSelection(0);
                }
              }}
              color={priceSelection === 0 ? "primary" : "border"}
            >
              £1-10
            </Button>
            <Button
              onClick={() => {
                if (priceSelection === 1) {
                  setPriceSelection(null);
                } else {
                  setPriceSelection(1);
                }
              }}
              color={priceSelection === 1 ? "primary" : "border"}
            >
              £10-20
            </Button>
            <Button
              onClick={() => {
                if (priceSelection === 2) {
                  setPriceSelection(null);
                } else {
                  setPriceSelection(2);
                }
              }}
              color={priceSelection === 2 ? "primary" : "border"}
            >
              £20-40
            </Button>
            <Button
              onClick={() => {
                if (priceSelection === 3) {
                  setPriceSelection(null);
                } else {
                  setPriceSelection(3);
                }
              }}
              color={priceSelection === 3 ? "primary" : "border"}
            >
              £40-60
            </Button>
            <Button
              onClick={() => {
                if (priceSelection === 4) {
                  setPriceSelection(null);
                } else {
                  setPriceSelection(4);
                }
              }}
              color={priceSelection === 4 ? "primary" : "border"}
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

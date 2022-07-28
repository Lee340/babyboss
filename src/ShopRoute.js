import { Button } from "./Button";
import { Card } from "./Card";
import { Text } from "./Text";
import "./ShopRoute.css";
import { useState } from "react";

export function ShopRoute() {
  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="shop-root">
      <div className="shop-root-main">
        <Card className="shop-root-main-card" color="subtle">
          <Button type="shop-root-main-btn-round">
            <img
              className="btn-round"
              alt="Kids Tableware"
              src="./tableware.jpeg"
            />
            Kids Tableware & Feeding{" "}
          </Button>
          <Button>
            {" "}
            <img className="btn-round" alt="Kids Toys" src="./toys.jpeg" />
            Toys
          </Button>
          <Button>
            {" "}
            <img className="btn-round" alt="Kids Gifts" src="./gifts.jpeg" />
            Gifts
          </Button>
        </Card>
        <Card className="shop-root-main-card" color="light">
          Best Sellers
        </Card>
      </div>

      {/* <Card className="shop-root-side-card" color="secondary">
          <Text color="light" size="l">
            Add Artworks
          </Text>
          <form
            action=""
            method="get"
            className="shop-add-art-root"
            onSubmit={(e) => {
              debugger;
            }}
          >
            <div className="shop-add-art-row">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <div className="shop-add-art-row">
              <label htmlFor="date">Date</label>
              <input type="text" placeholder="date" required></input>
            </div>
            <div className="shop-add-art-row">
              <label htmlFor="material">Material </label>
              <input type="text" placeholder="material" required></input>
            </div>
            <div className="shop-add-art-row">
              <label htmlFor="size">Size</label>
              <div className="shop-add-art-size-row">
                <input type="text" placeholder="height" required></input>x
                <input type="text" placeholder="width" required></input>x
                <input type="text" placeholder="depth" required></input>cm
              </div>
            </div>
            <div>
              <input
                type="file"
                onChange={(e) => {
                  setSelectedFile(e.target.files[0]);
                }}
              />
            </div>
            <Button type="subtle">Add</Button>
          </form>
        </Card> */}
    </div>
  );
}

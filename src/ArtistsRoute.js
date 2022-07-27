import { Button } from "./Button";
import { Card } from "./Card";
import { Text } from "./Text";
import "./ArtistsRoutes.css";
import { useState } from "react";

export function ArtistsRoute() {
  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="artists-root">
      <div className="artists-root-main">
        <Card className="artists-root-main-card" color="subtle">
          Saki Unno
          <Card color="light">Here</Card>
          Saki's Artworks
          <Card color="light">Here</Card>
        </Card>
      </div>
      <div className="artists-root-side">
        <Card className="artists-root-side-card" color="secondary">
          <Text color="light" size="l">
            Reviews
          </Text>
        </Card>
        <Card className="artists-root-side-card" color="secondary">
          <Text color="light" size="l">
            Add Artworks
          </Text>
          <form
            action=""
            method="get"
            className="artists-add-art-root"
            onSubmit={(e) => {
              debugger;
            }}
          >
            <div className="artists-add-art-row">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <div className="artists-add-art-row">
              <label htmlFor="date">Date</label>
              <input type="text" placeholder="date" required></input>
            </div>
            <div className="artists-add-art-row">
              <label htmlFor="material">Material </label>
              <input type="text" placeholder="material" required></input>
            </div>
            <div className="artists-add-art-row">
              <label htmlFor="size">Size</label>
              <div className="artists-add-art-size-row">
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
        </Card>
      </div>
    </div>
  );
}

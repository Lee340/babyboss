import { useState } from "react";
import { ShopRoute } from "./ShopRoute";
import { Button } from "./Button";
import { HomeRoute } from "./HomeRoute";
import { Navbar } from "./Navbar";

function App() {
  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);

  console.log({ user });

  return (
    <>
      <Navbar setUser={setUser} user={user} />
      {route === "home" ? <HomeRoute /> : null}
      {route === "shop" ? <ShopRoute /> : null}
    </>
  );
}

export default App;

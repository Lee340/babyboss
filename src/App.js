import { useState } from "react";
import { ShopRoute } from "./ShopRoute";
import { Button } from "./Button";
import { HomeRoute } from "./HomeRoute";
import { Navbar } from "./Navbar";
import { loginWithGoogle } from "./Authentication";

function App() {
  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);

  console.log({ user });

  return (
    <>
      <Navbar user={user} />
      <Button
        onClick={() => {
          setRoute("home");
        }}
      >
        Home
      </Button>
      <Button
        onClick={() => {
          setRoute("shop");
        }}
      >
        Shop
      </Button>
      {user == null ? (
        <Button onClick={() => loginWithGoogle(setUser)}>
          Login with Google
        </Button>
      ) : null}
      {route === "home" ? <HomeRoute /> : null}
      {route === "shop" ? <ShopRoute /> : null}
    </>
  );
}

export default App;

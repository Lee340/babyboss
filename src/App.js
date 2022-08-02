import { useState } from "react";
import { ShopRoute } from "./ShopRoute";
import { HomeRoute } from "./HomeRoute";
import { Navbar } from "./Navbar";
import { ReviewRoute } from "./ReviewRoute";

function App() {
  const [route, setRoute] = useState({ type: "home" });
  const [user, setUser] = useState(null);

  console.log(route);

  return (
    <>
      <Navbar setUser={setUser} user={user} />
      {route.type === "home" ? <HomeRoute setRoute={setRoute} /> : null}
      {route.type === "shop" ? <ShopRoute /> : null}
      {route.type === "review" ? <ReviewRoute id={route.id} /> : null}
    </>
  );
}

export default App;

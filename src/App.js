import { useState } from "react";
import { ShopRoute } from "./ShopRoute";
import { HomeRoute } from "./HomeRoute";
import { Navbar } from "./Navbar";
import { ReviewRoute } from "./ReviewRoute";
import { RestaurantRoute } from "./RestaurantRoute";

function App() {
  const [route, setRoute] = useState({ type: "home" });
  const [user, setUser] = useState(null);

  // const location = new window.google.maps.LatLng(-33.8665433, 151.1956316);
  // const service = new window.google.maps.places.PlacesService(null);
  // service.textSearch(
  //   {
  //     location,
  //     radius: "500",
  //     query: "restaurant",
  //   },
  //   (result) => {
  //     console.log({ result });
  //   }
  // );

  return (
    <>
      <Navbar setUser={setUser} user={user} />
      {route.type === "home" ? <HomeRoute setRoute={setRoute} /> : null}
      {route.type === "shop" ? <ShopRoute /> : null}
      {route.type === "review" ? (
        <ReviewRoute
          id={route.id}
          setUser={setUser}
          user={user}
          name="Tanakatsu"
        />
      ) : null}
      {route.type === "restaurant" ? (
        <RestaurantRoute
          id={route.id}
          setUser={setUser}
          user={user}
          name="Tanakatsu"
        />
      ) : null}
    </>
  );
}

export default App;

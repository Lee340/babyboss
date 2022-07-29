import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Text } from "./Text";
import { Icon } from "./Icon";
import "./Navbar.css";
import { Button } from "./Button";
import { loginWithGoogle } from "./Authentication";

export function Navbar({ user, setUser }) {
  const [show, setShow] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-title">
        <Text size="l" bold={true} color="light">
          Weekend
        </Text>
      </div>

      <Button>
        <Icon color="brand" size="l" icon={faMagnifyingGlass} />
      </Button>
      <Button>Shop</Button>

      <Button
        className="dropdown_button"
        onClick={() => {
          if (show) {
            setShow(false);
          } else {
            setShow(true);
          }
        }}
      >
        {user != null ? (
          <img
            src={user.photoURL}
            alt="user profile"
            className="user-profile"
          />
        ) : (
          <Button onClick={() => loginWithGoogle(setUser)}>Login</Button>
        )}
        <div className="dropdown_list">
          {show && (
            <div id="courses_id" className="courses">
              <li>
                <a href="">Dash Board</a>
              </li>
              <li>
                <a href="">Favourite</a>
              </li>
              <li>
                <a href="">Profile</a>
              </li>
              <li>
                <a href="">Logout</a>
              </li>
            </div>
          )}
        </div>
      </Button>
    </header>
  );
}

import classNames from "classnames";
import "./Card.css";

export function Card({ children, color, className }) {
  return (
    <div
      className={classNames("card", className, {
        "card-primary": color === "primary" || color == null,
        "card-secondary": color === "secondary",
        "card-subtle": color === "subtle",
        "card-light": color === "light",
      })}
    >
      {children}
    </div>
  );
}

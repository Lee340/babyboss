import classNames from "classnames";
import "./Card.css";

export function Card({ children, type, className }) {
  return (
    <div
      className={classNames("card", className, {
        "card-brand": type === "brand" || type == null,
        "card-primary": type === "primary",
        "card-secondary": type === "secondary",
        "card-subtle": type === "subtle",
        "card-light": type === "light",
      })}
    >
      {children}
    </div>
  );
}

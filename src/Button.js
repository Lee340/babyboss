import classNames from "classnames";

import "./Button.css";

export function Button({ children, onClick, color, className }) {
  return (
    <button
      onClick={onClick}
      className={classNames("btn", className, {
        "btn-brand": color === "brand",
        "btn-primary": color === "primary",
        "btn-secondary": color === "secondary",
        "btn-subtle": color === "subtle",
        "btn-light": color === "light",
        "btn-round": color === "round",
        "btn-border": color === "border",
        "btn-transparent": color === "transparent" || color == null,
      })}
    >
      {children}
    </button>
  );
}

import classNames from "classnames";

import "./Button.css";

export function Button({ children, onClick, type, className }) {
  return (
    <button
      onClick={onClick}
      className={classNames("btn", className, {
        "btn-brand": type === "brand",
        "btn-primary": type === "primary",
        "btn-secondary": type === "secondary",
        "btn-subtle": type === "subtle",
        "btn-light": type === "light",
        "btn-round": type === "round",
        "btn-border": type === "border",
        "btn-round-border": type === "round-border",
        "btn-transparent": type === "transparent" || type == null,
      })}
    >
      {children}
    </button>
  );
}

import classNames from "classnames";

import "./Button.css";

export function Button({ children, onClick, type }) {
  return (
    <button
      onClick={onClick}
      className={classNames("btn", {
        "btn-brand": type === "brand",
        "btn-primary": type === "primary",
        "btn-secondary": type === "secondary",
        "btn-subtle": type === "subtle",
        "btn-light": type === "light",
        "btn-transparent": type === "transparent" || type == null,
      })}
    >
      {children}
    </button>
  );
}

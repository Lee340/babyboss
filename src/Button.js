import classNames from "classnames";

import "./Button.css";

export function Button({ children, onClick, type }) {
  return (
    <button
      onClick={onClick}
      className={classNames("btn", {
        "btn-subtle": type === "subtle",
        "btn-secondary": type === "secondary",
        "btn-transparent": type === "transparent" || type == null,
      })}
    >
      {children}
    </button>
  );
}

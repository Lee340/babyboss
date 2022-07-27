import classNames from "classnames";
import "./Text.css";

export function Text({ children, size, bold, color }) {
  return (
    <span
      className={classNames("text", {
        "text-s": size === "s",
        "text-m": size === "m" || size == null,
        "text-l": size === "l",
        "text-bold": bold === true,
        "primary-color": color === "primary" || color == null,
        "secondary-color": color === "secondary",
        "subtle-color": color === "subtle",
        "light-color": color === "light",
      })}
    >
      {children}
    </span>
  );
}

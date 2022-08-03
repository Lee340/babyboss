import { Icon } from "./Icon";
import { Text } from "./Text";

import "./FileInput.css";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

export function FileInput({ onChange, className }) {
  return (
    <label className={classNames("file-input-label", className)}>
      <Icon color="primary" icon={faCamera} />
      <Text size="m" color="primary">
        &nbsp; Add photos
      </Text>
      <input onChange={onChange} className="file-input" type="file" />
    </label>
  );
}

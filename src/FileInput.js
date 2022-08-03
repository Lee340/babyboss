import { Icon } from "./Icon";
import { Text } from "./Text";

import "./FileInput.css";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export function FileInput({ onChange }) {
  return (
    <label className="file-input-label">
      <Icon color="primary" icon={faCamera} />
      <Text size="m" color="primary">
        &nbsp; Add photos
      </Text>
      <input onChange={onChange} className="file-input" type="file" />
    </label>
  );
}

import { defaultTagValue, TagValue } from "./Annotation";
import React from "react";
// import DeleteButton from "./DeleteButton";

export interface IDefaultInputSection {
  value: TagValue;
  onChange: (value: TagValue) => void;
  onDelete: () => void;
}

export default ({ value, onChange, onDelete }: IDefaultInputSection) => {
  const [localTagValue, SetLocalTagValue] = React.useState<TagValue | null>(
    value
  );
  const onchangeValue = (inputValue: string) => {
    const nextTagValue: TagValue = {
      tag: (localTagValue || defaultTagValue).tag,
      value: inputValue,
    };
    SetLocalTagValue(nextTagValue);
    onChange(nextTagValue);
  };
  const onchangeTag = (inputValue: string) => {
    const nextTagValue: TagValue = {
      tag: inputValue,
      value: (localTagValue || defaultTagValue).value,
    };
    SetLocalTagValue(nextTagValue);
    onChange(nextTagValue);
  };
  return (
    <div className="rp-default-input-section">
      <select
        id="dino-select"
        value={(value || {}).tag}
        onChange={(e) => onchangeTag(e.target.value)}
      >
        <optgroup label="Theropods">
          <option>Rustus</option>
          <option>Velociraptor</option>
          <option>Deinonychus</option>
        </optgroup>
        <optgroup label="Sauropods">
          <option>Diplodocus</option>
          <option>Saltasaurus</option>
          <option>Apatosaurus</option>
        </optgroup>
      </select>
      <input
        className="rp-default-input-section_input"
        placeholder="INPUT TAG HERE"
        value={value.value}
        onChange={(e) => onchangeValue(e.target.value)}
      />
      <a className="rp-default-input-section_delete" onClick={() => onDelete()}>
        DEL
      </a>
    </div>
  );
};

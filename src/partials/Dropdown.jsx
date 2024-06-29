import React from "react";

const Dropdown = ({ title, option,func }) => {
  return (
    <div className="select">
      <select defaultValue="0" name="format" id="format" onChange={func}>
        <option value="0" disabled>
          {title}
        </option>
        {option.map((o, i) => (
          <option value={o} >
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

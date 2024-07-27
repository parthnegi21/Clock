import React from 'react';

export default function Switch({ toggle, style, isOn }) {
  return (
    <div
      className="form-check form-switch position-relative"
      style={{ left: '70%', top: '16%', fontSize: '20px' }}
    >
      <input
        className="form-check-input"
        type="checkbox"
        checked={isOn}
        onChange={toggle}  // Ensures state is updated
        style={{ ...style, border: '1px solid grey',position:'absolute',left:'27%',top:'43%'}}
        role="switch"
        id="flexSwitchCheckDefault"
      />
    </div>
  );
}

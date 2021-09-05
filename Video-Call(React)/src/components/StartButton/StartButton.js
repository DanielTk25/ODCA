import React from 'react';
import './StartButton.css';

export default function StartButton(props) {
  return (
    <button
      className="start-button"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      Click to start the call
    </button>
  );
}

<<<<<<< HEAD
import React from "react";
import "./styles.css";

function Button({ text, onClick, outlined }) {
  return (
    <div
      className={outlined ? "btn-outlined" : "btn"}
      onClick={() => onClick()}
    >
      {text}
    </div>
  );
}

=======
import React from "react";
import "./styles.css";

function Button({ text, onClick, outlined }) {
  return (
    <div
      className={outlined ? "btn-outlined" : "btn"}
      onClick={() => onClick()}
    >
      {text}
    </div>
  );
}

>>>>>>> acdcc3f23962c7027ca2210d4f21ccebb9ba735b
export default Button;
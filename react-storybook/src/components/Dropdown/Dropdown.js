import React from "react";

import { Dropdown } from "react-bootstrap/Dropdown"

function CustomDropdown(props) {

  const { children, variant, ...rest} = props;
  return (
    <div>
      <div class="dropdown">
        <button
          class={`btn ${variant} dropdown-toggle`}
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          { children }
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">
            Action
          </a>
          <a class="dropdown-item" href="#">
            Another action
          </a>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </div>
    </div>
  );
}

export default CustomDropdown;

import * as React from "react";
import * as ReactDOM from "react-dom";

export interface ToggleItem {
  id: string,
  title: string,
}

function Toggle(props) {
  return (
    <>
      {props?.title &&
        <div>
          {props?.title}
        </div>
      }

      <div
        className="btn-group"
        role="group"
      >

        {props?.items?.map((item) => (
          <>
            <input
              type="radio"
              className="btn-check"
              name={item?.id}
              id={item?.id}
              autoComplete="off"
              checked={props?.checked === item?.id}
              onChange={() => props?.handleChange(item?.id)}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor={item?.id}
            >
              {item?.title}
            </label>
          </>
        ))}

      </div>
    </>
  )
}

export default Toggle;
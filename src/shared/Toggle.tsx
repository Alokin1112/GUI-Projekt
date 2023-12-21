import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

export interface ToggleItem {
  id: string,
  title: string,
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap:4px;
`

function Toggle(props) {
  return (
    <Wrapper>
      {props?.title &&
        <div>
          {props?.title}
        </div>
      }

      <div
        className="btn-group"
        role="group"
      >

        {props?.items?.map((item, index) => (
          <React.Fragment key={index}>
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
          </React.Fragment>
        ))}

      </div>
    </Wrapper>
  )
}

export default Toggle;
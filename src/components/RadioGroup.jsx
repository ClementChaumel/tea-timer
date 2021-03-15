import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  incurvedOut,
  incurvedIn,
  outsetRegularShadow,
} from "./StyledComponents";

const RadioButton = styled.label`
  height: 64px;
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${incurvedOut};
  box-shadow: ${outsetRegularShadow};
  transition: 0.2s ease-in-out;
  cursor: pointer;
`;

const RadioGroupContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  input {
    height: 0;
    width: 0;
    appearance: none;
  }

  input:checked + ${RadioButton} {
    background: ${incurvedIn};
  }
`;

const RadioGroup = ({ items }) => (
  <RadioGroupContainer>
    {items.map((item, index) => (
      <div>
        <input type="radio" id={index} name="vibe" />
        <RadioButton htmlFor={index}>
          <FontAwesomeIcon icon={item} size="3x" />
        </RadioButton>
      </div>
    ))}
  </RadioGroupContainer>
);

export default RadioGroup;

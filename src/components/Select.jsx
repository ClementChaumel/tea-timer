import * as React from "react";
import styled from "styled-components";

import {
  insetRegularShadow,
  insetShallowShadow,
  TextInput,
} from "./StyledComponents";

const SelectSC = styled(TextInput)`
  &:focus {
    outline: none;
    box-shadow: ${insetRegularShadow};
  }

  &:active {
    box-shadow: ${insetShallowShadow};
  }
`;

const Select = ({ options }) => (
  <SelectSC as="select">
    <option selected="true" disabled>
      Select one
    </option>
    {options.map((option) => (
      <option value="item">{option}</option>
    ))}
  </SelectSC>
);

export default Select;

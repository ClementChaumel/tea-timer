import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  incurvedOut,
  incurvedIn,
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
    {options.map((option) => (
      <option value="item">{option}</option>
    ))}
  </SelectSC>
);

export default Select;

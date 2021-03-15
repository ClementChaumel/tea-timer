import styled from "styled-components";

export const backgroundColor = "#d9dfce";
export const incurvedOut = "linear-gradient(225deg, #e8efdc, #c3c9b9)";
export const incurvedIn = "linear-gradient(225deg, #c3c9b9, #e8efdc)";
export const darkShadow = "#b8beaf";
export const brightShadow = "#faffed";

export const outsetRegularShadow = `-2px 2px 5px ${darkShadow}, 2px -2px 6px ${brightShadow}`;
export const outsetShallowShadow = `-1px 1px 2px ${darkShadow}, 1px -1px 2px ${brightShadow}`;

export const insetRegularShadow = `inset -2px 2px 5px ${darkShadow}, inset 2px -2px 6px ${brightShadow}`;
export const insetShallowShadow = `inset -1px 1px 2px ${darkShadow}, inset 1px -1px 2px ${brightShadow}`;

export const TextInput = styled.input`
  padding: 0 16px;
  height: 42px;
  border-radius: 10px;
  background: ${backgroundColor};
  box-shadow: ${insetRegularShadow};
  transition: box-shadow 0.2s ease-in-out;

  &:focus,
  &:hover {
    box-shadow: ${insetShallowShadow};
  }
`;

export const Button = styled.button`
  padding: 0 16px;
  height: 42px;
  border-radius: 10px;
  background: ${backgroundColor};
  box-shadow: ${outsetRegularShadow};
  transition: box-shadow 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: ${outsetShallowShadow};
  }
  &:focus {
    outline: none;
  }

  &:active {
    box-shadow: ${insetRegularShadow};
  }
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  border-radius: 10px;
  background: ${backgroundColor};
  box-shadow: ${insetRegularShadow};
  width: 100%;
  height: 20px;
  padding: 0 4px;

  &::-webkit-slider-thumb {
    appearance: none;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: ${backgroundColor};
    box-shadow: ${outsetShallowShadow};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    appearance: none;
    border: none;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: ${backgroundColor};
    box-shadow: ${outsetShallowShadow};
    cursor: pointer;
  }
`;

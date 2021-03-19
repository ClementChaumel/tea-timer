import styled from "styled-components";

export const textColor = "#51544d";
export const backgroundColor = "#d9dfce";
export const incurvedOut = "linear-gradient(225deg, #e8efdc, #c3c9b9)";
export const incurvedIn = "linear-gradient(225deg, #c3c9b9, #e8efdc)";
export const darkShadow = "#b8beaf";
export const brightShadow = "#faffed";

export const outsetRegularShadow = `-4px 4px 10px ${darkShadow}, 4px -4px 12px ${brightShadow}`;
export const outsetShallowShadow = `-2px 2px 5px ${darkShadow}, 2px -2px 6px ${brightShadow}`;

export const insetDeepShadow = `inset -4px 4px 10px ${darkShadow}, inset 4px -4px 12px ${brightShadow}`;
export const insetRegularShadow = `inset -2px 2px 5px ${darkShadow}, inset 2px -2px 6px ${brightShadow}`;
export const insetShallowShadow = `inset -1px 1px 2px ${darkShadow}, inset 1px -1px 2px ${brightShadow}`;

export const TextInput = styled.input`
  padding: 0 16px;
  height: 42px;
  border-radius: 10px;
  background: ${backgroundColor};
  box-shadow: ${insetDeepShadow};
  transition: box-shadow 0.2s ease-in-out;

  &:focus,
  &:hover {
    box-shadow: ${insetShallowShadow};
  }
`;

export const Button = styled.button`
  padding: 16px 16px;
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: bold;
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

  > *:first-child {
    margin-right: 12px;
  }
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  border-radius: 9999px;
  background: ${backgroundColor};
  box-shadow: ${insetDeepShadow};
  width: 100%;
  height: 40px;
  padding: 0 4px;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: ${insetShallowShadow};
  }

  &::-webkit-slider-thumb {
    appearance: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background: ${backgroundColor};
    box-shadow: ${outsetShallowShadow};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    appearance: none;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background: ${backgroundColor};
    box-shadow: ${outsetShallowShadow};
    cursor: pointer;
  }
`;

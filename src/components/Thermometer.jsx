import * as React from "react";
import styled from "styled-components";
import ReactSlider from "react-slider";

import {
  textColor,
  backgroundColor,
  insetRegularShadow,
  outsetRegularShadow,
} from "./StyledComponents";

const ThermometerWrapper = styled.div`
  position: relative;
  width: 60px;
  top: 200px;
  left: 30px;
`;

const Tank = styled.div`
  position: absolute;
  background: ${backgroundColor};
  box-shadow: ${outsetRegularShadow};
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

const Length = styled.div`
  position: absolute;
  top: -200px;
  left: 15px;
  background: ${backgroundColor};
  box-shadow: ${outsetRegularShadow};
  width: 30px;
  height: 220px;
  border-radius: 9999px;

  &::before {
    content: "";
    position: absolute;
    top: 200px;
    left: -15px;
    background: ${backgroundColor};
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }
`;

const MarkingsWrapper = styled.div`
  position: absolute;
  left: -16px;
  top: -195px;
  height: 200px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
`;

const Marking = styled.span`
  text-align: end;

  &::after {
    content: "";
    display: inline-block;
    margin-left: 8px;
    width: 10px;
    height: 1px;
    background: ${textColor};
  }
`;

const InsideTank = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: ${backgroundColor};
  box-shadow: ${insetRegularShadow};
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const InsideLength = styled.div`
  position: absolute;
  left: 25px;
  top: -186px;
  background: ${backgroundColor};
  box-shadow: ${insetRegularShadow};
  height: 200px;
  width: 10px;
  border-radius: 9999px;
`;

const MercuryTank = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #d88472;
`;

const StyledSlider = styled(ReactSlider)`
  left: 28px;
  top: -180px;
  width: 20px;
  height: 200px;
  cursor: pointer;
`;

const StyledThumb = styled.div`
  border-radius: 50%;
  cursor: grab;
`;

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) => (props.index === 1 ? "#d88472" : "#00000000")};
  border-radius: 999px;
  width: 3px;
  transition: 0.3s ease-out;
`;

const Thermometer = () => {
  const Thumb = (props) => <StyledThumb {...props}></StyledThumb>;

  const Track = (props, state) => (
    <StyledTrack {...props} index={state.index} />
  );
  return (
    <ThermometerWrapper>
      <Tank />
      <Length />
      <MarkingsWrapper>
        <Marking>-10</Marking>
        <Marking>0</Marking>
        <Marking>10</Marking>
        <Marking>20</Marking>
        <Marking>30</Marking>
        <Marking>40</Marking>
      </MarkingsWrapper>
      <InsideTank />
      <InsideLength />
      <MercuryTank />
      <StyledSlider
        defaultValue={[50]}
        renderTrack={Track}
        renderThumb={Thumb}
        orientation="vertical"
      />
    </ThermometerWrapper>
  );
};

export default Thermometer;

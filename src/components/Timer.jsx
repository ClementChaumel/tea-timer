import * as React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSound from "use-sound";
import alarm from "../sounds/SlowMorning.mp3";

import {
  insetRegularShadow,
  textColor,
  backgroundColor,
} from "./StyledComponents";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

const duration = Math.floor(Math.random() * (300 - 180 + 1) + 180); // https://www.google.com/search?q=how+long+should+you+steep+tea+for&ei=pZJUYMmmKI67lwSAhpCADg&oq=how+long+should+you+steep+tea+for&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEAcQHjICCAAyAggAMgQIABAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeOhQIABCwAxCKAxC3AxDUAxDlAhCLAzoICAAQCBAHEB5QlQxYwg5gzRJoAnACeACAAaEBiAHyApIBAzMuMZgBAKABAaoBB2d3cy13aXrIAQq4AQLAAQE&sclient=gws-wiz&ved=0ahUKEwiJjaHVp7zvAhWO3YUKHQADBOAQ4dUDCA0&uact=5

const appear = keyframes`
  from {
    box-shadow: 0px 0px 0px #b8beaf, 0px 0px 0px #faffed;
    transform: scale(.98);
  }

  to {
    box-shadow: -20px 20px 60px #b8beaf, 20px -20px 60px #faffed;
    transform: scale(1);
  }
`;

const carve = keyframes`
  from {
    box-shadow: inset 0px 0px 0px #b8beaf, inset 0px 0px 0px #faffed;
  }

  to {
    box-shadow: ${insetRegularShadow};
  }
`;

const Container = styled.div`
  position: relative;
  background: hotpink;
  height: 200px;
  width: 200px;
`;

const Inside = styled.div`
  position: absolute;
  height: 200px;
  width: 200px;
  top: 0px;
  left: 0px;
  background: ${backgroundColor};
  border-radius: 50%;
  animation: ${carve} 1s linear forwards;
  animation-delay: 4.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Outside = styled.div`
  position: absolute;
  height: 300px;
  width: 300px;
  top: -50px;
  left: -50px;
  background: ${backgroundColor};
  border-radius: 50%;
  animation: ${appear} 1s linear forwards;
  animation-delay: 4s;
`;

const rightSpin = keyframes`
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(180deg);
  }
`;
const leftSpin = keyframes`
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
`;
const closeWrapper = keyframes`
  to {
    clip: rect(auto, auto, auto, auto);
  }
`;

const Wrapper = styled.div`
  width: 260px;
  height: 260px;
  top: -30px;
  left: -30px;
  position: absolute; /* Enable clipping */
  clip: rect(0px, 260px, 260px, 130px); /* Hide half of the progress bar */
  animation: ${closeWrapper} 0.01s forwards linear;
  animation-delay: ${duration / 2}s;
`;

const Circle = styled.div`
  width: 260px;
  height: 260px;
  border: 10px solid ${textColor};
  border-radius: 50%;
  position: absolute;
  clip: rect(0px, 130px, 260px, 0px);
`;

const Left = styled(Circle)`
  animation: ${leftSpin} ${duration}s forwards linear;
  animation-delay: 3s;
`;

const Right = styled(Circle)`
  animation: ${rightSpin} ${duration / 2}s forwards linear;
  animation-delay: 3s;
`;

const Timer = () => {
  const [play] = useSound(alarm, { volume: 0.4 });

  React.useEffect(() => {
    setTimeout(() => {
      play();
    }, duration * 1000);
  }, [play]);

  return (
    <Container>
      <Outside />
      <Inside>
        <FontAwesomeIcon icon={faMugHot} size="5x" />
      </Inside>
      <Wrapper>
        <Left />
        <Right />
      </Wrapper>
    </Container>
  );
};

export default Timer;

import * as React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import {
  faFlushed,
  faGrimace,
  faGrinHearts,
  faDizzy,
  faGrinSquintTears,
} from "@fortawesome/free-regular-svg-icons";
import {
  faMugHot,
  faLeaf,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  textColor,
  TextInput,
  Button,
  Slider,
} from "../components/StyledComponents";
import RadioGroup from "../components/RadioGroup";
import Select from "../components/Select";
import Thermometer from "../components/Thermometer";
import Timer from "../components/Timer";

const reveal = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fade = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

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

const hide = keyframes`
  from {
    box-shadow: -20px 20px 60px #b8beaf, 20px -20px 60px #faffed;
    transform: scale(1);
  }

  to {
    box-shadow: 0px 0px 0px #b8beaf, 0px 0px 0px #faffed;
    transform: scale(.98);
  }
`;

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    color: ${textColor}
  }

  input,
  label,
  select,
  button,
  textarea
  {
    margin:0;
    border:0;
    padding:0;
    display:inline-block;
    vertical-align:middle;
    white-space:normal;
    background:none;
    line-height:1;
    
    /* Browsers have different default form fonts */
    font-size:13px;
    font-family: 'Raleway', sans-serif;
  }

  *:focus
  {
    outline:0;
  }

`;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  background: #d9dfce;
`;

const FieldWrapper = styled.div`
  > p {
    font-size: 1.3rem;
    margin-bottom: 8px;
  }

  > input,
  select {
    width: 100%;
  }
  opacity: 0;
  animation: ${reveal} 1s linear forwards;
  animation-delay: 3s;
`;

const TitleWrapper = styled(FieldWrapper)`
  opacity: 1;
  animation: none !important;
  grid-area: title;

  > h1 {
    font-weight: 100;

    > strong {
      font-weight: bold;
    }
  }
`;

const ContentWrapper = styled.div`
  padding: 50px;
  border-radius: 50px;
  background: #d9dfce;
  transform: ${(props) => (props.isHidden ? "scale (1)" : "scale (0.98)")};
  box-shadow: ${(props) =>
    props.isHidden
      ? "-20px 20px 60px #b8beaf, 20px -20px 60px #faffed;"
      : "0px 0px 0px #b8beaf, 0px 0px 0px #faffed;"};

  display: grid;
  grid-template-areas:
    "title title"
    "type thermometer"
    "sign thermometer"
    "cvv thermometer"
    "gender gender"
    "vibe vibe"
    "button button";

  grid-template-columns: 1fr 125px;
  grid-row-gap: 24px;
  grid-column-gap: 48px;

  animation: ${(props) => (props.isHidden ? hide : appear)} 1s linear forwards;
  animation-delay: 2s;

  ${FieldWrapper} {
    ${(props) =>
      props.isHidden &&
      css`
        opacity: 1;
        animation: ${fade} 1s linear forwards;
      `};
  }
`;

const TypeWrapper = styled(FieldWrapper)`
  grid-area: type;
`;
const SignWrapper = styled(FieldWrapper)`
  grid-area: sign;
`;
const CvvWrapper = styled(FieldWrapper)`
  grid-area: cvv;
`;
const ThermometerWrapper = styled(FieldWrapper)`
  grid-area: thermometer;
`;

const GenderWrapper = styled(FieldWrapper)`
  grid-area: gender;
  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
`;
const VibeWrapper = styled(FieldWrapper)`
  grid-area: vibe;
`;

const ButtonWrapper = styled(FieldWrapper)`
  grid-area: button;
  justify-self: center;
  margin-top: 12px;
`;

const DonateButton = styled(Button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
`;

const TimerWrapper = styled.div`
  display: ${(props) => (props.isHidden ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  grid-column: 1 / 3;
  grid-row: 2 / 8;
  z-index: 10;
  opacity: 0;

  ${(props) =>
    !props.isHidden &&
    css`
      animation: ${reveal} 1s linear forwards;
    `};
  animation-delay: 3s;
`;

const IndexPage = () => {
  const [isBrewing, setIsBrewing] = React.useState(false);

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Simplicitea</title>
      </Helmet>
      <ContentWrapper isHidden={isBrewing}>
        <TitleWrapper>
          <FontAwesomeIcon icon={faLeaf} size="3x" />
          <h1>
            Simplici<strong>tea</strong>
          </h1>
        </TitleWrapper>
        <TypeWrapper>
          <p>Type of tea</p>
          <TextInput type="text" placeholder="green, black, earl-grey..." />
        </TypeWrapper>
        <SignWrapper>
          <p>Your Astrological sign / Myers–Briggs type</p>
          <Select
            options={[
              "ESFJ",
              "Aries",
              "ISTJ",
              "Taurus",
              "ISTP",
              "Gemini",
              "ISFJ",
              "Cancer",
              "ISFP",
              "ENFJ",
              "Leo",
              "ENTP",
              "INFJ",
              "Virgo",
              "INFP",
              "Libra",
              "INTJ",
              "Scorpio",
              "INTP",
              "ESTP",
              "Sagittarius",
              "ESTJ",
              "Capricorn",
              "ESFP",
              "Aquarius",
              "Pisces",
              "ENFP",
              "ENTJ",
            ]}
          />
        </SignWrapper>
        <CvvWrapper>
          <p>Your credit card number</p>
          <TextInput type="number" placeholder="1234 5678 9012 2345" />
        </CvvWrapper>
        <GenderWrapper>
          <p>Gender</p>
          <div>
            <p>Female</p>
            <p>Male</p>
          </div>
          <Slider type="range" min="1" max="100" defaultValue="50" />
        </GenderWrapper>
        <VibeWrapper>
          <p>Vibe check</p>
          <RadioGroup
            items={[
              faFlushed,
              faGrinSquintTears,
              faGrimace,
              faGrinHearts,
              faDizzy,
            ]}
          />
        </VibeWrapper>
        <ThermometerWrapper>
          <p>Temperature outside (in C)</p>
          <Thermometer />
        </ThermometerWrapper>
        <ButtonWrapper>
          <Button
            onClick={() => {
              setIsBrewing(true);
            }}
          >
            <FontAwesomeIcon icon={faMugHot} size="1x" />
            Start steeping
          </Button>
        </ButtonWrapper>
        <TimerWrapper isHidden={!isBrewing}>
          {isBrewing && <Timer />}
        </TimerWrapper>
      </ContentWrapper>
      <DonateButton onClick={() => alert("Don't.")}>
        <FontAwesomeIcon icon={faHandHoldingUsd} size="1x" />
        Donate
      </DonateButton>
      <GlobalStyle />
    </Container>
  );
};

export default IndexPage;

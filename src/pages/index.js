import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  faFlushed,
  faGrimace,
  faGrinHearts,
} from "@fortawesome/free-regular-svg-icons";

import { TextInput, Button, Slider } from "../components/StyledComponents";
import RadioGroup from "../components/RadioGroup";
import Select from "../components/Select";
import Thermometer from "../components/Thermometer";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
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
  display: flex;
  justify-content: center;
  padding: 100px 0;
  background: #d9dfce;
`;

const ContentWrapper = styled.div`
  padding: 100px;
  border-radius: 50px;
  background: #d9dfce;
  box-shadow: -20px 20px 60px #b8beaf, 20px -20px 60px #faffed;
`;

// markup
const IndexPage = () => {
  return (
    <Container>
      <ContentWrapper>
        <h1>Tea timer</h1>
        <TextInput type="text" />
        <Button>Click me!!</Button>
        <Slider
          type="range"
          min="1"
          max="100"
          defaultValue="50"
          onChange={(e) => console.log(e.target.value)}
        ></Slider>
        <RadioGroup items={[faFlushed, faGrimace, faGrinHearts]} />
        <Select options={["gemini", "ares", "fish"]} />
        <Thermometer />
      </ContentWrapper>
      <GlobalStyle />
    </Container>
  );
};

export default IndexPage;

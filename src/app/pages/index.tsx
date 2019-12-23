import React from "react";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

import App from "../components/App";

const rotation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Emoji = styled.p`
  animation: ${rotation} 5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  font-size: 300px;
  width: 300px;
  height: 300px;
  line-height: 1;
`;

export default () => (
  <App>
    <Emoji>🚀</Emoji>
  </App>
);

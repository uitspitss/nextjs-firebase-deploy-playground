import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

import App from "../components/App";

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Emoji = styled.div`
  font-size: 500px;
  animation: ${rotation} 5s linear infinite;
`;

export default () => (
  <App>
    <Emoji>🚀</Emoji>
  </App>
);

import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const Content = styled.div`
  margin-top: 6.4rem;

  ${device.laptop} {
    width: 100%;
    margin-top: 0;
    margin-left: auto;
  }
`;
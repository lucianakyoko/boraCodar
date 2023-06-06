import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const ImageContainer = styled.div`
  width: 100%;
  height: 24.4rem;
  background-color: antiquewhite;

  ${device.tabletS} {
    width: 33.6rem;
    height: 21.5rem;
  }

  ${device.laptop} {
    width: 64rem;
    height: 40rem;
  }
`;
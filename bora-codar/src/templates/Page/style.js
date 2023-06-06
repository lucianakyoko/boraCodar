import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${colors.gradient[100]};

  ${device.laptop} {
    display: flex;
    gap: 4rem;
  }
`;
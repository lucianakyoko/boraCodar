import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import styled from "styled-components";

export const AboutChallengeContainer = styled.div`
  padding: 1.6rem 0;
  display: flex;
  flex-direction: column;
  gap: .8rem;

  border-bottom: 1px solid ${colors.white[150]};

  ${device.laptop} {
    border-bottom: none;
  }
`;
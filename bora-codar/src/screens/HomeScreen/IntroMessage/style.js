import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const IntroMessageContainer = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  ${device.tablet}{
    gap: 2.4rem;
  }
  ${device.laptop} {
    margin-top: 50%;
  }

  .paragraph {
    color: ${colors.white[100]};
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.1rem;
    text-align: center;

    ${device.tablet} {
      font-size: 2rem;
      line-height: 2.3rem;
    }

    &.darker {
      font-weight: 500;
    }

    .logo {
      color: ${colors.purple[150]};
      font-weight: 700;
    }
  }
`;
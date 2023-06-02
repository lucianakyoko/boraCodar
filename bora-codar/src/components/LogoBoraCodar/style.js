import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: .4rem;

  .icon {
    font-size: 2.8rem;
    color: ${colors.purple[150]};
  }
  
  .text {
    color: ${colors.purple[150]};
    font-size: 1.8rem;
    font-weight: 700;
  }

  ${device.tabletS} {
    .icon {
      font-size: 3.2rem;
    }
    .text {
      font-size: 2.4rem;
    }
  }

  ${device.laptop} {
    .text {
      font-size: 3.2rem;
    }
  }
`;
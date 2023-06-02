import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  ${device.tablet} {
    align-items: flex-start;
  }

  ${device.laptop} {
    width: 30.6rem;
    padding-bottom: 7.2rem;
    padding-left: 2rem;
    height: 100vh;

    justify-content: space-between;
    border-right: 1px solid ${colors.white[150]};
  }

  .logos {
    width: 100%;
    padding: 1.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    
    border-bottom: 1px solid ${colors.white[150]};
    
    ${device.laptop} {
      border-bottom: none;
      align-items: flex-start;
      gap: 2.4rem;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    ${device.tablet} {
      align-items: flex-start;
    }
    ${device.laptop} {
      gap: 2.4rem;
    }

    .text {
      color: ${colors.white[100]};
      font-size: 1.2rem;
      font-weight: 300;

      ${device.tablet} {
        font-size: 2rem;
        line-height: 4rem;
      }
      ${device.laptop} {
        font-size: 2.4rem
      }

      .logo {
        color: ${colors.purple[150]};
        font-weight: 700;
      }
    }
  }
`;
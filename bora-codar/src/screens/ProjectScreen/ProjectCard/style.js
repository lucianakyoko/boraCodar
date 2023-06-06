import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  ${device.tabletS} {
    flex-direction: row-reverse;
    align-items: flex-end;
    justify-content: center;
  }

  ${device.tablet} {
    position: absolute;
    top: 20rem;
    left: 24rem;
  }

  ${device.laptop} {
    position: static;
  }
         
  .title-image__wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

  }
  .title {
    padding-left: 1.6rem;
    color: ${colors.white[100]};
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.1rem;

    ${device.laptop} {
      font-size: 2rem;
      line-height: 2.4rem;
    }
  } 
`;
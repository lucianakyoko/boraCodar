import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const TecnologieContainer = styled.div`
  padding: 1.6rem 0;

  display: flex;
  flex-direction: column;
  gap: .8rem;

  border-bottom: 1px solid ${colors.white[150]};

  ${device.laptop} {
    border-bottom: none;
  }
`;

export const TecnologiesWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  
  ${device.tabletS} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.6rem;
  }

  .tecnology {
    padding-left: 1.6rem;

    color: ${colors.white[100]};
    font-size: 1.6rem;
    font-weight: 300;
    letter-spacing: 0.02em;
    position: relative;
    
    &::before {
      content: "";
      width: .8rem;
      height: .8rem;
      background-color: ${colors.blue[150]};

      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    ${device.tabletS} {
      width:calc(50% - 0.8rem);
    }
  }
`;
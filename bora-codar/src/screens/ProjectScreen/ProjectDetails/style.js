import styled from "styled-components";
import { device } from "@/styles/devices";

export const DetailsWrapper = styled.div`
  width: 100%;
  padding: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  ${device.tabletS} {
    width: 80%;
  }

  ${device.tablet} {
    margin-top: 8rem;
  }

  ${device.laptop} {
    gap: 3.2rem;
    margin-top: 0;
  }
`;
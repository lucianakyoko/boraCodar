import styled from "styled-components";
import { colors } from "../colors";
import { device } from "../devices";

export const SectionText = styled.p`
  color: ${colors.white[100]};
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 2.8rem;
  letter-spacing: 0.02em;

  ${device.tablet} {
    font-size: 1.8rem;
    line-height: 3.2rem;
  }
`;
import styled from "styled-components";
import { colors } from "../colors";
import { device } from "../devices";

export const SectionTitle = styled.h3`
  color: ${colors.white[100]};
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.4rem;
  letter-spacing: .2em;
  text-transform: uppercase;

  ${device.tablet} {
    font-size: 2rem;
    line-height: 3.2rem;
  }
`;
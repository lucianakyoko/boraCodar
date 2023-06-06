import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const LinksWrapper = styled.ul`
  margin-left: 1.6rem;
  display: flex;
  gap: 1.2rem;

  ${device.tabletS} {
    margin: 0;
    flex-direction: column;
  }

  .link-wrapper {
    a {
      color: ${colors.white[100]};
      font-size: 2.4rem;

      &:hover {
        color: ${colors.blue[150]};
      }
    }
  }
`;
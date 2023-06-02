import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  ${device.tablet} {
    gap: 1.6rem;
  }
  ${device.laptop} {
    position: relative;
  }

  .names-wrapper {
    color: ${colors.blue[100]};

    display: flex;
    align-items: center;
    gap: 1.2rem;

    &:hover {
      color: ${colors.blue[150]};
    }

    ${device.tablet} {
      gap: 1.6rem;
    }
    ${device.laptop} {
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
      .name:first-child {
        letter-spacing: 0.08em;
      }
    }

    .name {
      font-size: 2.4rem;
      text-transform: uppercase;

      ${device.tablet} {
        font-size: 4rem;
      }
      ${device.laptop} {
        line-height: 4rem;
      }
    }
  }

  .icons-wrapper {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    ${device.tablet} {
      gap: 1.6rem;
    }
    ${device.laptop} {
      position: absolute;
      bottom: 0;
      left: 17.5rem;

      gap: .4rem;
    }

    .icon {
      color: ${colors.blue[100]};
      font-size: 2rem;
      &:hover {
        color: ${colors.blue[150]};
      }
      ${device.tablet} {
        font-size: 3.2rem;
      }
      ${device.laptop} {
        font-size: 2.4rem;
      }
    }
  }
`;

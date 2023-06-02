import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const TimelineBarContainer = styled.div`
  width: 100%;
  padding-left: 1.6rem;

  ${device.tablet} {
    width: 21.8rem;
    position: relative;
  }

  .list {
    padding-right: 1.2rem;
    overflow-x: scroll;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    display: flex;
    gap: 2rem;

    ${device.tablet} {
      overflow-x: hidden;
      overflow-y: scroll;
      scrollbar-width: thin;
      height: 18rem;
      flex-direction: column;
      gap: 2.4rem;
    }
  }
`;

export const TimelineItem = styled.li`
  min-width: 7rem;
  max-width: 7rem;
  color: ${colors.white[150]};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .4rem;

  position: relative;
  z-index: 2;

  ${device.tablet} {
    min-width: 19.1rem;
    flex-direction: row;
    gap: 1.6rem;
  }

  &::before {
    content: "";
    width: 14rem;
    height: .2rem;
    background-color: ${colors.white[150]};
    position: absolute;
    left: -3rem;
    top: 1.8rem;
    transform: translateY(-50%);
    z-index: -1;

    ${device.tablet} {
      width: .2rem;
      height: 14rem;
      left: 7.4rem;
    }
  }

  .date {
    font-size: .8rem;
    font-weight:300;
    line-height: 1rem;

    ${device.tablet} {
      font-size: 1.2rem;
    }
  }

  .dot {
    width: .8rem;
    height: .8rem;
    background-color: ${colors.white[150]};
    border-radius: 50%;
    display: block;
  }
  .project {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${device.tablet} {
      align-items: flex-start;
    }
    .number {
      font-size: .8rem;
      font-weight:300;
      line-height: 1rem;

      ${device.tablet} {
        font-size: 1.2rem;
      }
    }
    .name {
      font-size: 1.2rem;
      font-weight: 300;
      text-align: center;
      line-height: 1.4rem;

      ${device.tablet} {
        font-size: 1.4rem;
        text-align: left;
      }
    }
  }
`;
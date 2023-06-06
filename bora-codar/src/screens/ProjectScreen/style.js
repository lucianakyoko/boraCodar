import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const ContentWrapper = styled.div`
  margin-top: 2.4rem;
  padding-bottom: 6rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  ${device.laptop} {
    align-items: flex-start;
  }
`;
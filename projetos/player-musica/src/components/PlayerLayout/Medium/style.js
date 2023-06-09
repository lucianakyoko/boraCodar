import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const MediumPlayer = styled.div`
  width: 35.771rem;
  height: 26.668rem;
  padding: 2.881rem;

  background-color: ${colors.background[150]};
  border-radius: .96rem;

  display: flex;
  flex-direction: column;
  gap: 2.881rem;

  .cover-title {
    display: flex;
    gap: 2.881rem;
    align-items: center;
  }
`;
import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SmallerPlayer = styled.div`
  width: 35.771rem;
  height: 19.926rem;
  padding: 2.881rem;

  display: flex;
  flex-direction: column;
  gap: 2.881rem;

  background-color: ${colors.background[150]};
  border-radius: .96rem;

  .cover-title {
    display: flex;
    align-items: center;
    gap: 2.881rem;
  }
`;
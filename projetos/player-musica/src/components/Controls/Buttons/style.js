import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5.042rem;

  .button {
    color: ${colors.white[150]};
    font-size: 2.881rem;
    background-color: transparent;
    border: none;
    
    &:hover {
      cursor: pointer;
      color: ${colors.background[100]};
    }
  }
`;

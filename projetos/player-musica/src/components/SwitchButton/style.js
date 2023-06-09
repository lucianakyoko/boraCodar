import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const SwitcherWrapper = styled.div `
  display: flex;
  flex-direction: column;
  gap: .8rem;

  position: absolute;
  top: 3.2rem;
  right: 3.2rem;

  .button {
    padding: .8rem;

    background-color: ${colors.background[150]};
    border: none;
    border-radius: .4rem;

    color: ${colors.white[250]};
    font-size: 1.2rem;

    &:hover, 
    &.active {
      color: ${colors.background[150]};
      background-color: ${colors.white[250]};
      cursor: pointer;
    }
  }
`;
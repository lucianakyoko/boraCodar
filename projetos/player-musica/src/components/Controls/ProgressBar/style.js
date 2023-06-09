import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .96rem;

  .time {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${colors.white[250]};
    font-size: 1.44rem;
    font-weight: 400;
    line-height: 2.305rem;
  }
`;

export const Progress = styled.div`
  width: 100%;
  height: 6px;
  background-color: ${colors.background[200]};
  border-radius: .96rem;
  
  .filled {
    width: ${props => props.width};
    height: 100%;
    background-color: ${colors.white[200]};
    border-radius: .96rem;
    opacity: 1;
  }
`;
import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const TitleAndBandNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .96rem;

  .music-title {
    color: ${colors.white[150]};
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.4rem;
  }
  .band-name {
    color: ${colors.white[150]};
    font-size: 1.9rem;
    font-weight: 400;
    line-height: 1.9rem;
  }
`;
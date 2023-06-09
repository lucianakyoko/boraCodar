import {
  TitleAndBandNameWrapper,
} from './style';

export function TitleAndBand() {
  return(
    <TitleAndBandNameWrapper>
      <h1 className="music-title">Acorda Devinho</h1>
      <p className="band-name">Banda Rocketseat</p>
    </TitleAndBandNameWrapper>
  );
}
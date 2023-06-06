import { AboutChallenge } from "./AboutChallenge";
import { IDid } from "./IDid";
import { Tecnologies } from "./Tecnologies";

import {
  DetailsWrapper,
} from './style';

export function ProjectDetails() {
  return(
    <DetailsWrapper>
      <AboutChallenge />
      <Tecnologies />
      <IDid />
    </DetailsWrapper>
  );
}
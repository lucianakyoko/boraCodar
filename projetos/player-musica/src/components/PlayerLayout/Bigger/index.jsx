import { Buttons } from "../../Controls/Buttons";
import { ProgressBar } from "../../Controls/ProgressBar";
import { Cover } from "../../Info/Cover";
import { TitleAndBand } from "../../Info/TitleAndBand";

import {
  BiggerPlayer
} from './style';

export function Bigger() {
  return (
    <BiggerPlayer>
      <Cover isBigger />
      <TitleAndBand />
      <Buttons />
      <ProgressBar />
    </BiggerPlayer>
  );
}
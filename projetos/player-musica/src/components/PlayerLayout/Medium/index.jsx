import { Buttons } from "../../Controls/Buttons";
import { ProgressBar } from "../../Controls/ProgressBar";
import { Cover } from "../../Info/Cover";
import { TitleAndBand } from "../../Info/TitleAndBand";

import {
  MediumPlayer
} from './style';

export function Medium() {
  return (
    <MediumPlayer>
      <div className="cover-title">
        <Cover />
        <TitleAndBand />
      </div>
      
      <Buttons />
      <ProgressBar />
    </MediumPlayer>
  );
}
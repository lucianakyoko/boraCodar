import { Buttons } from "../../Controls/Buttons";
import { Cover } from "../../Info/Cover";
import { TitleAndBand } from "../../Info/TitleAndBand";

import {
  SmallerPlayer
} from './style';

export function Smaller() {
  return (
    <SmallerPlayer>
      <div className="cover-title">
        <Cover />
        <TitleAndBand />
      </div>

      <Buttons />
    </SmallerPlayer>
  );
}
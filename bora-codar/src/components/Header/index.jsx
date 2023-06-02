import { LogoBoraCodar } from "../LogoBoraCodar";
import { LogoLucianaKyoko } from "../LogoLucianaKyoko";
import { TimelineBar } from "../TimelineBar";

import {
  HeaderContainer,
} from './style';

export function Header() {
  return (
    <HeaderContainer>
      <div className="logos">
        <LogoBoraCodar />

        <div className="wrapper">
          <LogoLucianaKyoko />
          <p className="text">
            Aqui deixo todos os projetos do <span className="logo">#boraCodar</span> organizados. 
          </p>
        </div>
      </div>

      <TimelineBar />
    </HeaderContainer>
  );
}
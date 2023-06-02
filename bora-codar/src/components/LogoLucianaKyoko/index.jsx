import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Orbitron } from "next/font/google";

import {
  LogoContainer,
} from './style';

const orbitronFont = Orbitron(
  {
    weight: ['900'],
    subsets: ['latin']
  }
)
export function LogoLucianaKyoko() {
  return (
    <LogoContainer className={orbitronFont.className}>
      <a 
        className="names-wrapper" 
        href="https://lucianakyoko.com"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span className="name">Luciana</span>
        <span className="name">Kyoko</span>
      </a>
      
      <div className="icons-wrapper">
        <a 
          href="https://github.com/lucianakyoko" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <GithubLogo weight='light' className="icon"/>
        </a>
        <a 
          href="https://www.linkedin.com/in/lucianakyoko/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <LinkedinLogo weight='light' className="icon"/>
        </a>
      </div>

    </LogoContainer>
  );
}
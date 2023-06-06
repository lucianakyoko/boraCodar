import { FigmaLogo, GithubLogo, Link } from "@phosphor-icons/react";

import {
  LinksWrapper,
} from './style';

export function ProjectLinks() {
  return (
    <LinksWrapper>
      <li className="link-wrapper">
        <a href="http://" target="_blank" rel="noopener noreferrer"><GithubLogo/></a>
      </li>
      <li className="link-wrapper">
        <a href="http://" target="_blank" rel="noopener noreferrer"><FigmaLogo/></a>
      </li>
      <li className="link-wrapper">
        <a href="http://" target="_blank" rel="noopener noreferrer"><Link /></a>
      </li>
    </LinksWrapper>
  );
}
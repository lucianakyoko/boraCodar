import { ProjectImage } from "./ProjectImage";
import { ProjectLinks } from "./ProjectLinks";

import {
  ProjectCardContainer,
} from './style';

export function ProjectCard() {
  return (
    <ProjectCardContainer>
      <div className="title-image__wrapper">
        <h2 className="title">Player de música</h2>
        <ProjectImage />
      </div>
      <ProjectLinks />
    </ProjectCardContainer>
  );
}

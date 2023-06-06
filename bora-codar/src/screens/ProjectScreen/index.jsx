import { Page } from "@/templates/Page";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetails } from "./ProjectDetails";
import { 
  ContentWrapper
} from './style';

export function ProjectScreen() {
  return (
    <Page>
      <ContentWrapper>
        <ProjectCard />
        <ProjectDetails />
      </ContentWrapper>
    </Page>
  );
}
import { SectionText } from "@/styles/UI/SectionText";
import { SectionTitle } from "@/styles/UI/SectionTitle"; 

import { 
  AboutChallengeContainer
} from './style';

export function AboutChallenge() {
  return (
    <AboutChallengeContainer>
      <SectionTitle>Desafio:</SectionTitle>
      <SectionText>
        Desenvolva uma página de uma plataforma de Kanban. Use sua criatividade e fique à vontade para ir além nesse projeto, adicionando animações de arrastar, por exemplo.
      </SectionText>
    </AboutChallengeContainer>
  );
}
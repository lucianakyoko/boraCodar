import { SectionTitle } from "@/styles/UI/SectionTitle";
import {
  TecnologieContainer,
  TecnologiesWrapper,
} from './style';

export function Tecnologies() {
  return (
    <TecnologieContainer>
      <SectionTitle>Tecnologias:</SectionTitle>
      <TecnologiesWrapper>
        <li className="tecnology">Next.js</li>
        <li className="tecnology">Styled-components</li>
        <li className="tecnology">Git/ Github</li>
        <li className="tecnology">Node.js</li>
        <li className="tecnology">JavaScript</li>
        <li className="tecnology">Mongo Atlas</li>
      </TecnologiesWrapper>
    </TecnologieContainer>
  );
}
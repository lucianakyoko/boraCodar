import { 
  IntroMessageContainer,
} from "./style";

export function IntroMessage() {
  return (
    <IntroMessageContainer>
      <p className="paragraph"><span className="logo">#boraCodar</span> é uma atividade semanal oferecida pela Rocketseat.</p>
      <p className="paragraph darker">Toda semana somos desafiados a desenvolver projetos incríveis.</p>
    </IntroMessageContainer>
  );

}
import { Page } from "@/templates/Page";
import { IntroMessage } from "./IntroMessage";

import {
  Content,
} from './style';

export function HomeScreen() {
  return (
    <Page>
      <Content>
        <IntroMessage />
      </Content>
    </Page>
  );
}
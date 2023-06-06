import { Roboto_Condensed } from 'next/font/google';
import { Header } from '@/components/Header';

import {
  Container,
} from './style';

const robotoCondensedFont = Roboto_Condensed(
  {
    weight: ['300', '400', '700'],
    subsets: ['latin'] 
  }
)

export function Page({ children}) {
  return (
    <Container className={robotoCondensedFont.className}>
      <Header />
      {children}
    </Container>
  );
}
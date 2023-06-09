import { IoPlayBack, IoPlay, IoPause, IoPlayForward } from 'react-icons/io5';
import {
  ButtonsWrapper,
} from './style';

export function Buttons({player, setPlayer}) {
  
  return (
    <ButtonsWrapper>
      <button className='button'>{<IoPlayBack />}</button>
      <button className='button'>{<IoPlay />}</button>
      <button className='button'>{<IoPlayForward />}</button>
    </ButtonsWrapper>
  );
}
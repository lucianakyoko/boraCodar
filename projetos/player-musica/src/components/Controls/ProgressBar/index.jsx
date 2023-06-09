import {
  ProgressContainer,
  Progress,
} from './style';

export function ProgressBar() {
  return (
    <ProgressContainer>
      <Progress width='50%'>
        <div className='bar'></div>
        <div className='filled'></div>
      </Progress>

      <div className='time'>
        <span>03:20</span>
        <span>00:12</span>
      </div>
    </ProgressContainer>
  );
}
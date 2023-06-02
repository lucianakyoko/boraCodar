import { 
  TimelineBarContainer,
  TimelineItem
} from './style';

export function TimelineBar() {
  return (
    <TimelineBarContainer>
      <ul className='list'>
        <TimelineItem>
          <span className='date'>16/10/2023</span>
          <span className='dot'></span>
          <div className='project'>
            <span className='number'>#01</span>
            <h3 className='name'>Player de música</h3>
          </div>
        </TimelineItem>

        <TimelineItem className='item active'>
          <span className='date'>16/10/2023</span>
          <span className='dot'></span>
          <div className='project'>
            <span className='number'>#02</span>
            <h3 className='name'>Card de Produto</h3>
          </div>
        </TimelineItem>

        <TimelineItem>
          <span className='date'>16/10/2023</span>
          <span className='dot'></span>
          <div className='project'>
            <span className='number'>#03</span>
            <h3 className='name'>Botões e Cursores</h3>
          </div>
        </TimelineItem>

        <TimelineItem>
          <span className='date'>16/10/2023</span>
          <span className='dot'></span>
          <div className='project'>
            <span className='number'>#04</span>
            <h3 className='name'>Chat</h3>
          </div>
        </TimelineItem>

        <TimelineItem>
          <span className='date'>16/10/2023</span>
          <span className='dot'></span>
          <div className='project'>
            <span className='number'>#05</span>
            <h3 className='name'>Calculadora</h3>
          </div>
        </TimelineItem>
      </ul>
    </TimelineBarContainer>
  );
}
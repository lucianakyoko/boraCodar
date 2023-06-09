import { 
  SwitcherWrapper
} from './style';

export function SwitchButton({player, changePlayer}) {
  const buttons = [
    { value: 0, label: 'bigger'},
    { value: 1, label: 'medium'},
    { value: 2, label: 'smaller'},
  ];

  const handleButtonClick = newPlayer => {
    changePlayer(newPlayer)
  }
  return (
    <SwitcherWrapper>
      {buttons.map(button => (
        <button 
          key={button.label}
          className={player === button.value ? 'button active' : 'button'}
          onClick={() => handleButtonClick(button.value)}
        >
          {button.label}
        </button>
      ))}
    </SwitcherWrapper>
  );
}
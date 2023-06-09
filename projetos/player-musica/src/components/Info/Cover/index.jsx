import {
  CoverContainer
} from './style';


export function Cover({isBigger}) {
  return(
    <CoverContainer 
      data-is-bigger={isBigger}
    >     
    </CoverContainer>
  );
}
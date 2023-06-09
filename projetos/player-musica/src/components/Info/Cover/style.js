import styled from 'styled-components';

export const CoverContainer = styled.div`
  width: ${props => props['data-is-bigger'] ? '18.966rem' : '8.403rem'};
  height: ${props => props['data-is-bigger'] ? '18.966rem' : '8.403rem'};

  background-image: url('https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: .6rem;
`;




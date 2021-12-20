import styled from 'styled-components';

const Button = styled.button`
  font-size: 2rem;
  cursor: pointer;
  border: 1px solid blue;
  background: blue;
  color: white;
  padding: 4px 8px;

  :focus {
    outline: none;
  }

  :hover {
    background-color: red;
  }
`;

export default Button;

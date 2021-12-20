import './sass/App.scss';
import Button from './Button';
import NewButton from './NewButton';
import styled from 'styled-components';
import StyledParagraph from './StyledParagraph';

const StyledDiv = styled.div`
  background-color: red;
  color: white;
  padding: 20px;
`;

function App() {
  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: 'lightblue',
      }}
      className='App'
    >
      <header className='App-header'>
        <h1>App</h1>
        <h2>Subtitle</h2>
        <Button>Click Here</Button>
        <hr />
        <NewButton>Click Again</NewButton>
      </header>
      <StyledDiv>
        <StyledParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
          consectetur iure. Quae.
        </StyledParagraph>
      </StyledDiv>
    </div>
  );
}

export default App;

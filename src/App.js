import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: #3498db;
  color: orange;
  text-align: center;
  font-size: 30px;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    font-size: 30px;
    color: white
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
    font-size: 20px;
    color: green;
  }
`;

const App = () => {
  return (
    <Container>
      <Box>
        <p>Responsive Box</p>
        <p>Try resizing the window to see different layouts!</p>
      </Box>
    </Container>
  );
};

export default App;

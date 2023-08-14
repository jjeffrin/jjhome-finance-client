import { Container } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { AppBar } from './components/appBar';

function App() {  

  return (
    <Container maxW={'container.xl'} my={'2rem'}>
      <AppBar />      
      <RouterProvider router={routes} />
    </Container>
  );
}

export default App;

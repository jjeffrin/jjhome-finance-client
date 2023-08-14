import { Container } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppBar } from './components/appBar';
import { DashboardPage } from './pages/dashboard';
import { SalaryPage } from './pages/salary';
import { NotFoundPage } from './pages/notFound';

function App() {

  return (
    <BrowserRouter>
      <Container maxW={'container.xl'} my={'2rem'}>
        <AppBar />
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/salary' element={<SalaryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

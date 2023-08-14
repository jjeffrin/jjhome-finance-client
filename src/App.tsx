import { Container } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppBar } from './components/appBar';
import { DashboardPage } from './pages/dashboard';
import { SalaryPage } from './pages/salary';
import { NotFoundPage } from './pages/notFound';
import { BASE_ROUTE, SALARY_ROUTE, WILDCARD_ROUTE } from './constants';

function App() {

  return (
    <BrowserRouter>
      <Container maxW={'container.xl'} my={'2rem'}>
        <AppBar />
        <Routes>
          <Route path={BASE_ROUTE} element={<DashboardPage />} />
          <Route path={SALARY_ROUTE} element={<SalaryPage />} />
          <Route path={WILDCARD_ROUTE} element={<NotFoundPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

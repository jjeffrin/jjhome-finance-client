import { Container, Progress } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppBar } from './components/appBar';
import { DashboardPage } from './pages/dashboard';
import { SalaryPage } from './pages/salary';
import { NotFoundPage } from './pages/notFound';
import { BASE_ROUTE, ORGANIZATION_ROUTE, SALARY_ROUTE, WILDCARD_ROUTE } from './constants';
import { useAppState } from './hooks/useAppState';
import { OrganizationPage } from './pages/organization';

function App() {

  const { isFetching } = useAppState()

  return (
    <BrowserRouter>
    <Progress opacity={isFetching > 0 ? 100 : 0} isIndeterminate size={'xs'}/>
      <Container maxW={'container.xl'} my={'2rem'}>
        <AppBar />
        <Routes>
          <Route path={BASE_ROUTE} element={<DashboardPage />} />
          <Route path={ORGANIZATION_ROUTE} element={<OrganizationPage />} />
          <Route path={SALARY_ROUTE} element={<SalaryPage />} />
          <Route path={WILDCARD_ROUTE} element={<NotFoundPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

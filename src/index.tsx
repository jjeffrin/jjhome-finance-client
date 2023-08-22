import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import '@fontsource/inter/100.css'
import '@fontsource/inter/200.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'
import { DALServiceProvider } from './contexts/dalServiceContext';
import { AppStateProvider } from './contexts/appStateContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import KeyCloakService from './services/keycloakService';
import HttpService from './services/httpService';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const appTheme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  }
})

const queryClient = new QueryClient()

// KeyCloakService.CallLogin(() => {
  root.render(
    // <React.StrictMode>
    <ChakraProvider theme={appTheme}>
      {/* <KeycloakProvider>
        <AxiosProvider> */}
          <QueryClientProvider client={queryClient}>
            <AppStateProvider>
              <DALServiceProvider>
                <App />
              </DALServiceProvider>
            </AppStateProvider>
          </QueryClientProvider>
        {/* </AxiosProvider>
      </KeycloakProvider> */}
    </ChakraProvider>
    // </React.StrictMode>
  );
// })

HttpService.configure()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

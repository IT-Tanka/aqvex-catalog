import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Catalog from './pages/Catalog';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      // Глобально замінюємо keepPreviousData на placeholderData
      placeholderData: (previousData: unknown) => previousData,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Header />
        <Catalog />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
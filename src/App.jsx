import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes/RoutesApp';
import Layout from './components/shared/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <RoutesApp />
      </Layout>
    </BrowserRouter>
  );
};

export default App;

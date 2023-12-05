import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import RoutesApp from './Routes/RoutesApp';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <RoutesApp />
    </BrowserRouter>
  );
};

export default App;

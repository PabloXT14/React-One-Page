import { GlobalStyle } from './style/global';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Contact } from './components/Contact';
import { SuccessMessage } from './pages/SuccesMessage';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Main />
            <Contact />
          </>
        } />
        <Route path="/message" element={<SuccessMessage />} />
      </Routes>
    </Router>
  );
}

export default App;

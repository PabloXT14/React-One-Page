import { GlobalStyle } from './style/global';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Contact />
    </>
  );
}

export default App;

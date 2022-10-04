import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import Article, { Articles } from './Article';

function App(props) {
  return (
    <>
      <Header />
      <Hero />
      <Articles {...props} />
      <Footer />
    </>
  );
}

export default App;

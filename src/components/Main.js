import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Who from '../components/Who';
import New from './New';

function Main() {
  return (
    <>
      <main>
        <Who/>
        <New/>
        <About />
        <Contact />
      </main>
    </>
  );
}
export default Main;

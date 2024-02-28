
import { Routes , Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Allrest from './Allrest';
import ViewRest from './ViewRest';

function App() {
  return (
    <div>
      <section>
        <Header />
      </section>
<Routes>
<Route path='/' element={<Allrest/>}/>
<Route path='/view/:id' element={<ViewRest/>}/>
</Routes>
      <section>
        <Footer />
      </section>

    </div>
  );
}

export default App;

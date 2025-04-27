
import { Outlet } from 'react-router';
import './App.css';
import { Footer } from './shared/layout/footer';
import { Header } from './shared/layout/header';

function App() {
  return (<>
    <Header />
    <Outlet />
    <Footer />
  </>)
}

export default App;

import './App.css';
import Home from './components/pages/landing-page';
import Layout from './components/pages/layout';

function App() {
  return (
    <div className='font-rubik ' >
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;

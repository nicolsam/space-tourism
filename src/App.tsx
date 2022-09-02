import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from '@components/Header';
import Home from '@pages/Home';

import Logo from '@icons/shared/logo.svg';

function App() {

  return (
    <div className="App flex flex-row">

      <div className="hidden xl:block w-52 h-screen">
        <div className="h-1/6 flex justify-center items-center">
          <Link to="/" className="h-fit cursor-pointer">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
      </div>

      <main className="h-screen xl:h-auto">
        <Header />

        <Routes>
            <Route path="/" element={<Home />} />
        </Routes> 
      </main>

    </div>
  )
}

export default App

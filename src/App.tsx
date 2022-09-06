import { Routes, Route } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

import { GlobalStyle } from './global-styles';
import * as data from '@assets/data.json';

import Header from '@components/Header';
import Home from '@pages/Home';
import Destination from '@pages/Destination';

import Logo from '@icons/shared/logo.svg';

function App() {

  const location = useLocation();
  const pathname = location.pathname.split('/')[1];
  console.log(pathname)

  return (
    <div className="App flex flex-row">

      <GlobalStyle location={pathname} />
      <div className="hidden xl:block xl:w-1/12 h-screen">
        <div className="h-1/6 flex justify-center items-center">
          <Link to="/" className="h-fit cursor-pointer">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
      </div>

      <main className="w-full xl:w-11/12 h-screen xl:h-auto">
        <Header />

        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/destination" element={<Destination destination={data.destinations[0]} />} />
            
            {data.destinations.map((destination) => (
              <Route path={`/destination/${destination.name.toLowerCase()}`} element={<Destination destination={destination} />} />
            ))}
        </Routes> 
      </main>

    </div>
  )
}

export default App

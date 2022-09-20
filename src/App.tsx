import { Routes, Route } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

import { GlobalStyle } from './global-styles';
import * as data from '@assets/data.json';

import { convertStringToSlug } from '@utils/string-utils';

import Header from '@components/Header';
import Home from '@pages/Home';
import Destination from '@pages/Destination';
import Crew from '@pages/Crew';
import Technology from '@pages/Technology';

import Logo from '@icons/shared/logo.svg';

function App() {

  const location = useLocation();
  const pathname = location.pathname.split('/')[1];

  return (
    <div className="App flex flex-row">

      <GlobalStyle location={pathname === '' ? 'home' : pathname} />
      <div className="hidden xl:block xl:w-1/12 h-screen">
        <div className="h-1/6 flex justify-center items-center">
          <Link to="/" className="h-fit cursor-pointer">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
      </div>

      <main className="w-full xl:w-11/12 overflow-hidden h-screen xl:h-auto">
        <Header />

        <div className="h-full xl:h-5/6 xl:pr-24 2xl:pr-28 3xl:pr-52">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destination" element={<Destination destination={data.destinations[0]} />} />
              <Route path="/crew" element={<Crew crewmate={data.crew[0]} />} />
              <Route path="/technology" element={<Technology technology={data.technology[0]} />} />
              
              {data.destinations.map((destination) => (
                <Route path={`/destination/${destination.name.toLowerCase()}`} element={<Destination destination={destination} />} />
              ))}

              {data.crew.map((crewmate) => (
                <Route path={`/crew/${convertStringToSlug(crewmate.name)}`} element={<Crew crewmate={crewmate} />} />
              ))}

              {data.technology.map((technology) => (
                <Route path={`/technology/${convertStringToSlug(technology.name)}`} element={<Technology technology={technology} />} />
              ))}

          </Routes> 
        </div>
      </main>

    </div>
  )
}

export default App

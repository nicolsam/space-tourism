import { Link, useLocation } from 'react-router-dom';

import * as data from '@assets/data.json';
import * as S from './styles';

interface Destination {
  name: string;
  images: {
    png: string,
    webp: string
  };
  description: string;
  distance: string;
  travel: string;
}

interface DestinationProps {
  destination: Destination;
}

const Destination = ({ destination }: DestinationProps) => {

  const location = useLocation();
  
  return (
    <div className="h-5/6 pt-8 xl:pl-0 2xl:pr-52 flex flex-col gap-12 xl:gap-24 justify-center items-center">
        <div className="h-fit pl-12 xl:pl-0 xl:w-full uppercase self-start">
          <h1 className="font-barlowcondensed text-white text-xl xl:text-3xl tracking-widest flex flex-row gap-8"><span className="text-white/25 font-bold">01</span>pick your destination</h1>
        </div>
        <div className="w-full px-20 xl:px-0 xl:pl-20 gap-12 flex flex-col xl:flex-row justify-center xl:justify-end items-center xl:items-start">
          <div className="w-full xl:w-1/2 flex justify-center xl:justify-start">
            <img className="w-2/4 xl:w-auto" src={destination.images.png} alt={destination.name} /> 
          </div>
          <div className="w-full xl:w-1/2 flex flex-col justify-center items-center xl:items-start">
            <div className="mb-4 xl:mb-8 flex flex-row gap-4">
              
              {data.destinations.map((destination) => (
                <div className="text-white uppercase flex flex-row gap-10">
                  <Link to={`/destination/${destination.name.toLowerCase()}`}>
                    <S.DestinationLink active={'/destination/' + destination.name.toLowerCase() === location.pathname}>{destination.name}</S.DestinationLink>
                  </Link>
                </div>
              ))}

            </div>

            <S.DestinationTitle>
              {destination.name}
            </S.DestinationTitle>
            
            <p className="text-base xl:text-lg text-center xl:text-left text-cgray">
              {destination.description}
            </p>

            <S.Divider />

            <div className="flex gap-24">
              <div className="flex flex-col gap-2">
                <h2 className="uppercase text-cgray tracking-wider text-xl font-barlowcondensed">avg. distance</h2>
                <p className="text-4xl text-white">{destination.distance}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="uppercase text-cgray tracking-wider text-xl font-barlowcondensed">est. travel time</h2>
                <p className="text-4xl text-white">{destination.travel}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Destination
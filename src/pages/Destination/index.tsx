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
    <div className="h-full flex flex-col gap-7 md:gap-12 xl:gap-24">
        <div className="w-full md:w-auto h-fit mt-8 xl:mt-20 md:pl-12 xl:pl-0 xl:w-full uppercase self-start">
          <h1 className="font-barlowcondensed text-white text-base md:text-xl xl:text-3xl tracking-widest flex flex-row justify-center md:justify-start gap-4 md:gap-8"><span className="text-white/25 font-bold">01</span>pick your destination</h1>
        </div>
        <div className="w-full md:px-20 xl:px-0 xl:pl-20 gap-7 md:gap-12 flex flex-col xl:flex-row justify-center xl:justify-end items-center xl:items-start">
          <div className="w-full xl:w-1/2 flex justify-center xl:justify-start">
            <img className="w-2/5 md:w-2/4 xl:w-auto" src={destination.images.png} alt={destination.name} /> 
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

            <div className="text-6xl md:text-7xl font-bellefair text-white uppercase">
              {destination.name}
            </div>
            
            <p className="w-[87%] md:w-auto text-base xl:text-lg text-center xl:text-left text-cgray">
              {destination.description}
            </p>

            <S.Divider />

            <div className="flex flex-col md:flex-row gap-8 md:gap-24">
              <div className="flex flex-col items-center md:items-start gap-2">
                <h2 className="uppercase text-cgray tracking-widest md:tracking-wider text-base md:text-xl font-barlowcondensed">avg. distance</h2>
                <p className="text-3xl md:text-4xl text-white uppercase">{destination.distance}</p>
              </div>
              <div className="flex flex-col items-center md:items-start gap-2">
                <h2 className="uppercase text-cgray tracking-widest md:tracking-wider text-base md:text-xl font-barlowcondensed">est. travel time</h2>
                <p className="text-3xl md:text-4xl text-white uppercase">{destination.travel}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Destination
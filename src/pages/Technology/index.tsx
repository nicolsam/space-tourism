import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import * as data from '@assets/data.json';
import * as S from './styles';

import { convertStringToSlug } from '@utils/string-utils';

interface TechnologyProps {
    technology: {
        name: string;
        images: {
            portrait: string;
            landscape: string;
        },
        description: string;
    }
}

const Technology = ({ technology }: TechnologyProps) => {

    const location = useLocation();

    const [currTechnology, setCurrTechnology] = useState<string>();

    useEffect(() => {
        let currLocation = location.pathname.split('/');
        setCurrTechnology(currLocation[2]);
    }, [location]);

    const activedTechnology = (crewmateName: string) => {
        let converted = convertStringToSlug(crewmateName);

        if(currTechnology === converted) {
            return true;
        }

        return false;
    }

    return (
        <div className="h-full md:w-screen xl:w-full flex flex-col gap-12 xl:gap-0 items-center">
            <div className="w-full mt-8 xl:mt-20 h-fit md:pl-12 xl:pl-0 uppercase self-start">
                <h1 className="font-barlowcondensed text-white text-xl xl:text-3xl tracking-widest flex flex-row justify-center md:justify-start gap-8"><span className="text-white/25 font-bold">03</span>space launch 101</h1>
            </div>

            <div className="h-full flex flex-col-reverse gap-4 md:gap-0 xl:flex-row items-center">
                <div className="h-full xl:w-2/3 xl:h-full flex gap-8 xl:gap-24 flex-col xl:flex-row items-center">

                    <div className="px-2 mt-5 xl:w-auto flex flex-row xl:flex-col items-center xl:items-start gap-8">
                        {data.technology.map((technology, index) => (
                            <Link to={`/technology/${convertStringToSlug(technology.name)}`}>
                                <S.TechDot active={activedTechnology(technology.name)}>{index + 1}</S.TechDot>
                            </Link>
                        ))} 
                    </div>

                    <div className="w-full xl:w-5/6 flex flex-col gap-3 xl:gap-5 items-center xl:items-start">
                        <p className="text-center xl:text-left font-barlowcondensed md:text-base uppercase text-cgray tracking-widest">the terminology...</p>
                        <h1 className="text-center xl:text-left font-bellefair text-3xl md:text-4xl xl:text-6xl uppercase text-white">{technology.name}</h1>
                        <p className="text-center xl:text-left font-barlow text-base md:text-lg xl:text-xl text-cgray w-4/5 md:w-3/5 xl:w-3/4">{technology.description}</p>
                    </div>
                    
                </div>

                <div className="h-4/6 xl:h-full w-2/4 xl:w-1/3 hidden xl:flex items-center">
                    <img src={technology.images.portrait} alt={technology.name} className="md:absolute md:right-0 2xl:static" />
                </div>

                <div className="w-full xl:hidden">
                    <img src={technology.images.landscape} alt={technology.name} className="w-full" />
                </div>
            </div>
        </div>
    );
}

export default Technology;
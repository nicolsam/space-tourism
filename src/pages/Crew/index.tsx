import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import * as data from '@assets/data.json';
import * as S from './styles';

import { convertStringToSlug } from '@utils/string-utils';

interface Crewmate {
    name: string;
    images: {
        png: string;
        webp: string;
    };
    role: string;
    bio: string;
}

interface CrewProps {
    crewmate: Crewmate;
}

const Crew = ({ crewmate }: CrewProps) => {

    const location = useLocation();

    const [currCrewmate, setCurrCrewmate] = useState<string>();

    useEffect(() => {
        let currLocation = location.pathname.split('/');
        setCurrCrewmate(currLocation[2]);
    }, [location]);

    const activedPerson = (crewmateName: string) => {
        let converted = convertStringToSlug(crewmateName);

        if(currCrewmate === converted) {
            return true;
        }

        return false;
    }

    return (
        <div className="h-full flex flex-col gap-12 xl:gap-24 relative items-center">
            <div className="w-full mt-8 xl:mt-20 h-fit pl-12 xl:pl-0 uppercase self-start">
                <h1 className="font-barlowcondensed text-white text-xl xl:text-3xl tracking-widest flex flex-row gap-8"><span className="text-white/25 font-bold">02</span>meet your crew</h1>
            </div>
            <div className="h-full flex flex-col xl:flex-row items-center relative">
                <div className="h-2/6 w-2/3 xl:h-full flex flex-col justify-start xl:justify-center items-center xl:items-start relative">
                    <div className="flex flex-col gap-3 xl:gap-5 2xl:mb-32">
                        <h2 className="text-center xl:text-left font-bellefair md:text-2xl xl:text-4xl uppercase text-[#919096]">{crewmate.role}</h2>
                        <h1 className="text-center xl:text-left font-bellefair md:text-4xl xl:text-6xl uppercase text-white">{crewmate.name}</h1>
                        <p className="text-center xl:text-left font-barlow md:text-lg xl:text-xl text-cgray xl:w-1/2">{crewmate.bio}</p>
                    </div>
                    
                    <div className="flex flex-row md:items-center xl:items-start gap-5 absolute bottom-10 xl:bottom-20">
                        {data.crew.map((crewmate) => (
                            <Link to={`/crew/${convertStringToSlug(crewmate.name)}`}>
                                <S.PersonDot active={activedPerson(crewmate.name)}></S.PersonDot>
                            </Link>
                        ))} 
                    </div>
                </div>
                <div className="h-4/6 xl:h-full w-2/4 xl:w-1/3 relative flex items-center xl:items-end xl:self-end">
                    <img className="absolute" src={crewmate.images.png} alt="Crewmate image" />
                </div>
            </div>
        </div>
    );
}

export default Crew;
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
            <div className="w-full md:w-auto h-fit mt-8 xl:mt-20 md:pl-12 xl:pl-0 xl:w-full uppercase self-start">
                <h1 className="font-barlowcondensed text-white text-base md:text-xl xl:text-3xl tracking-widest flex flex-row justify-center md:justify-start gap-4 md:gap-8"><span className="text-white/25 font-bold">02</span>meet your crew</h1>
            </div>
            <div className="h-fit md:h-full flex gap-10 md:gap-0 flex-col-reverse md:flex-col xl:flex-row justify-start items-center md:relative">
                <div className="h-5/6 md:h-2/6 md:w-2/3 xl:h-full flex gap-8 md:gap-0 flex-col-reverse md:flex-col justify-center md:justify-start xl:justify-center items-center xl:items-start md:relative">
                    <div className="flex flex-col gap-0 xl:gap-5 2xl:mb-32 items-center md:items-start">
                        <h2 className="text-center xl:text-left font-bellefair text-lg md:text-2xl xl:text-4xl uppercase text-[#919096] mb-1 md:mb-0">{crewmate.role}</h2>
                        <h1 className="text-center xl:text-left font-bellefair text-2xl md:text-4xl xl:text-6xl uppercase text-white mb-4 md:mb-0">{crewmate.name}</h1>
                        <p className="text-center xl:text-left font-barlow md:text-lg xl:text-xl text-cgray w-[90%] xl:w-1/2">{crewmate.bio}</p>
                    </div>
                    
                    <div className="flex flex-row md:items-center xl:items-start gap-5 md:absolute md:bottom-10 xl:bottom-20">
                        {data.crew.map((crewmate) => (
                            <Link to={`/crew/${convertStringToSlug(crewmate.name)}`}>
                                <S.PersonDot active={activedPerson(crewmate.name)}></S.PersonDot>
                            </Link>
                        ))} 
                    </div>
                </div>
                
                <div className="w-full md:h-4/6 xl:h-full md:w-2/4 xl:w-1/3 md:relative flex flex-col items-center xl:items-end xl:self-end">
                    <img className="w-1/2 md:absolute" src={crewmate.images.png} alt="Crewmate image" />
                    <S.Divider />
                </div>
            </div>
        </div>
    );
}

export default Crew;
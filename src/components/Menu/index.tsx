import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Item from './Item';
import Mobile from '@components/Menu/Mobile';

import * as data from '@assets/data.json';
import * as S from './styles';
import hamburgerIcon from '@icons/shared/icon-hamburger.svg';

import { convertStringToSlug } from '@utils/string-utils';

import { IOptions } from '@shared/interfaces/options.interface';

const optionsInitialValue:IOptions[] = [
    {
        active: true,
        name: 'home',
        link: '/'
    },
    {
        active: false,
        name: 'destination',
        link: '/destination/moon'
    },
    {
        active: false,
        name: 'crew',
        link: '/crew/douglas-hurley'
    },
    {
        active: false,
        name: 'technology',
        link: '/technology/launch-vehicle'
    }

]

const Menu = () => {

    const location = useLocation();

    const [open, isOpen] = useState(false);    
    const [path, setPath] = useState('/');
    const [options, setOptions] = useState(optionsInitialValue);

    const activedOptions = (option: string) => {

        if(path === option) {
            return true;
        }

        return false;
    }

    useEffect(() => {
        let currLocation = location.pathname.split('/');
        setPath('/' + currLocation[1]);
    }, [location]);

    useEffect(() => {
        let newOptions: any = [];

        options.map((option:IOptions) => {

            let newOption: IOptions = {
                active: activedOptions(option.link),
                name: option.name,
                link: option.link
            }

            newOptions.push(newOption);

        });

        setOptions(newOptions);

    }, [path]);

    return (
        <>
            <div className="w-3/5 xl:pr-24 2xl:pr-28 3xl:pr-52 bg-white/[.04] backdrop-blur-2xl hidden md:flex gap-5 xl:gap-14 flex-row justify-center xl:justify-end">
                <Item active={path} link="/"><S.MText>00</S.MText>HOME</Item>  
                <Item active={path} link="/destination" sublink={data.destinations[0].name.toLowerCase()}><S.MText>01</S.MText>DESTINATION</Item>  
                <Item active={path} link="/crew" sublink={convertStringToSlug(data.crew[0].name.toLowerCase())}><S.MText>02</S.MText>CREW</Item>  
                <Item active={path} link="/technology" sublink={convertStringToSlug(data.technology[0].name)}><S.MText>03</S.MText>TECHNOLOGY</Item>  
            </div>

            <img
                onClick={() => isOpen(!open)} 
                src={hamburgerIcon} 
                alt="Open menu" 
                className="md:hidden absolute right-10 cursor-pointer"
            />

            {open &&
                <Mobile options={options} isOpen={() => isOpen(false)} />
            }
        </>
    );
}

export default Menu;
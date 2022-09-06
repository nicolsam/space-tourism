import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Item from './Item';

import * as data from '@assets/data.json';
import * as S from './styles';

const Menu = () => {

    const location = useLocation();
    const [path, setPath] = useState('/');

    useEffect(() => {
        let pathname = location.pathname.split('/');
        setPath('/' + pathname[1]);
    }, [location.pathname]);

    return (
        <div className="w-3/5 2xl:pr-52 bg-white/[.04] backdrop-blur-2xl flex gap-5 xl:gap-14 flex-row justify-center xl:justify-end">
            <Item active={path} link="/home"><S.MText>00</S.MText>HOME</Item>  
            <Item active={path} link="/destination" sublink={data.destinations[0].name.toLowerCase()}><S.MText>01</S.MText>DESTINATION</Item>  
            <Item active={path} link="/crew"><S.MText>02</S.MText>CREW</Item>  
            <Item active={path} link="/technology"><S.MText>03</S.MText>TECHNOLOGY</Item>  
        </div>
    );
}

export default Menu;
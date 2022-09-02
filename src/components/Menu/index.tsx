import { useLocation } from 'react-router-dom';
import Item from './Item';

import * as S from './styles';

const Menu = () => {

    const location = useLocation();

    return (
        <div className="w-3/5 pr-20 2xl:pr-52 bg-white/[.04] backdrop-blur-2xl flex gap-5 xl:gap-14 flex-row justify-center xl:justify-end">
            <Item active={location.pathname} link="/"><S.MText>00</S.MText>HOME</Item>  
            <Item active={location.pathname} link="/destination"><S.MText>01</S.MText>DESTINATION</Item>  
            <Item active={location.pathname} link="/crew"><S.MText>02</S.MText>CREW</Item>  
            <Item active={location.pathname} link="/technology"><S.MText>03</S.MText>TECHNOLOGY</Item>  
        </div>
    );
}

export default Menu;
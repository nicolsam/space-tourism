import Item from './Item';

import * as S from './styles';

const Menu = () => {
    return (
        <div className="w-3/5 absolute right-0 bg-white/[.04] backdrop-blur-2xl">
          <div className="w-full xl:w-3/4 flex gap-5 xl:gap-14 flex-row justify-center">
            <Item link="/"><S.MText>00</S.MText>HOME</Item>  
            <Item link="/"><S.MText>01</S.MText>DESTINATION</Item>  
            <Item link="/"><S.MText>02</S.MText>CREW</Item>  
            <Item link="/"><S.MText>03</S.MText>TECHNOLOGY</Item>  
          </div>
        </div>
    );
}

export default Menu;
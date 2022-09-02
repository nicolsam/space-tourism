import { Link } from 'react-router-dom';
import * as S from './styles';

interface ItemProps {
    active: string;
    link: string;
    children: React.ReactNode;
}

const Item = ({active, link, children}:ItemProps) => {
    return (
        <S.Title active={active === link}>
            <Link to={link} className="h-28 flex flex-col justify-center items-center hover:cursor-pointer">
                <p className="text-sm xl:text-base 2xl:text-xl text-white tracking-widest flex flex-row gap-3">{children}</p>
            </Link>
        </S.Title>
   );  
}

export default Item;
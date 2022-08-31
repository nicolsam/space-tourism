import { Link } from 'react-router-dom';
import * as S from './styles';

interface ItemProps {
    link: string;
    children: React.ReactNode;
}

const Item = ({link, children}:ItemProps) => {
   return (
    <S.Title>
        <Link to={link} className="h-28 flex flex-col justify-center items-center hover:cursor-pointer">
            <p className="text-sm xl:text-xl text-white tracking-widest flex flex-row gap-3">{children}</p>
        </Link>
    </S.Title>
   );  
}

export default Item;
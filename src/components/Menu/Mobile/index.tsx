import { Link } from 'react-router-dom';
import * as S from './styles';
import closeIcon from '/icons/shared/icon-close.svg';

import { IOptions } from '@shared/interfaces/options.interface';

interface MobileProps {
    options: IOptions[];
    isOpen: any;
}

const Mobile = ({ options, isOpen }: MobileProps) => {
    return (
        <div className="absolute top-0 h-screen w-full md:hidden flex justify-end">
            <div className="h-full w-2/3 bg-white/[.04] backdrop-blur-2xl pl-8 py-10 relative flex flex-col gap-20">
                <div className="relative mr-8">
                    <img onClick={() => isOpen()} className="absolute right-0 cursor-pointer" src={closeIcon} alt="Close icon" />
                </div>
                <div className="flex flex-col gap-8">
                    {options.map((option: IOptions, index) => (
                        <Link to={option.link} className="w-full text-white uppercase font-barlowcondensed tracking-widest">
                            <S.Item active={option.active}>
                                <span className="font-bold">0{index}</span>{option.name}
                            </S.Item>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Mobile;
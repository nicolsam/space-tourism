import { Link, useLocation } from 'react-router-dom';

import Menu from '@components/Menu';

import Logo from '@icons/shared/logo.svg';

import * as S from './styles';

const Header = () => {
  return (
    <div className="w-full md:w-auto pt-5 md:pt-0 h-fit xl:h-1/6 relative top-0 z-50 flex flex-row xl:justify-end items-center xl:items-center">
        <div className="h-full pl-8 xl:hidden">
          <Link to="/" className="h-fit cursor-pointer">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="hidden xl:block w-2/5 z-50">
          <S.Row />
        </div>

        <Menu />

    </div>
  )
}

export default Header
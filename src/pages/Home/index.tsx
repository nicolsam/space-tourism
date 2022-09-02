import { Link } from 'react-router-dom';
import * as S from './styles';

import './index.css';

const Home = () => {
    return (
        <div className="h-5/6 xl:pr-52 xl:py-40 relative flex flex-col gap-36 xl:gap-0 xl:flex-row justify-center items-center xl:items-end">
            <div className="w-3/5 xl:w-2/5 text-white flex flex-col justify-end">
                <h1 className="w-full flex flex-col">
                    <S.Travel className="uppercase xl:text-4xl tracking-widest self-center xl:self-start">so, you want travel to</S.Travel>
                    <S.Space className="uppercase self-center">space</S.Space>
                </h1>
                <S.Description className="text-lg xl:text-xl self-center xl:self-start text-center xl:text-left">
                    Let’s face it; if you want to go to space, 
                    you might as well genuinely go to outer space and not hover kind of on the edge of it. 
                    Well sit back, and relax because we’ll give you a truly out of this world experience!
                </S.Description>
            </div>
            <div className="w-3/5 flex justify-center items-center xl:justify-end xl:items-end">
                <S.Explore className="w-60 h-60 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 rounded-full">
                    <Link to="/destination" className="w-full h-full bg-white rounded-full cursor-pointer flex justify-center items-center">
                        <S.ExploreText className="uppercase text-3xl tracking-widest">explore</S.ExploreText>
                    </Link>
                </S.Explore>
            </div>
        </div>
    );
}

export default Home;
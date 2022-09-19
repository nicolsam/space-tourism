import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Mobile from './index';

import * as S from './styles.stories';

export default {
  title: 'Mobile Menu',
  component: Mobile,
  args: {
  }
} as ComponentMeta<typeof Mobile>

// export const MobileMenu: ComponentStory<typeof Mobile> = () => (
//     <S.Viewport>
//         <Mobile />
//     </S.Viewport>
// );

import { IOptions } from '@shared/interfaces/options.interface';
const options:IOptions[] = [
    {
        active: false,
        name: 'HOME',
        link: '/'
    },
    {
        active: true,
        name: 'destination',
        link: '/destination'
    }
]

import hamburgerIcon from '/icons/shared/icon-hamburger.svg';
import { useState } from 'react';

export const MobileMenu:ComponentStory<typeof Mobile> = () => {
    const [open, isOpen] = useState(false);    

    return (
        <Router>
            <S.Viewport>
                <img 
                    onClick={() => isOpen(!open)} 
                    src={hamburgerIcon} 
                    alt="Open menu"
                    className="absolute right-10 top-10 cursor-pointer" 
                />                

                {open && 
                    <Mobile options={options} isOpen={() => isOpen(false)} />
                }
            </S.Viewport>
        </Router>
    );
};

import React from 'react'
import { Icon } from 'Components/UI';

import ThemeOn from 'assets/images/themeOn.svg';
import ThemeOff from 'assets/images/themeOff.svg';

const light = <Icon src={ThemeOn} alt='Tema claro' />
const dark = <Icon src={ThemeOff} alt='Tema escuro' />

export default ({ theme }) => theme ? dark : light;

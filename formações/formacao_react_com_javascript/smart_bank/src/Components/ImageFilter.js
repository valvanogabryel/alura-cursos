import React from 'react';

import foodImage from 'assets/images/alimentacao.svg';
import othersImage from 'assets/images/outros.svg';
import transportImage from 'assets/images/transporte.svg';
import utilitiesImage from 'assets/images/utilidades.svg';
import healthImage from 'assets/images/saude.svg';
import { ThemeIcon } from './UI';

const images = {
  Restaurante: <ThemeIcon src={foodImage} alt='Restaurante' />,
  Utilidades: <ThemeIcon src={utilitiesImage} alt='Utilidades' />,
  Transporte: <ThemeIcon src={transportImage} alt='Transporte' />,
  Saúde: <ThemeIcon src={healthImage} alt='Saúde' />,
  default: <ThemeIcon src={othersImage} alt='Outros' />
}

export default (type) => {
  return images[type] || images.default;
}

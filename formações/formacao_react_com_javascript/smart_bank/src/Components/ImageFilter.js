import React from 'react';

import foodImage from 'assets/images/alimentacao.svg';
import othersImage from 'assets/images/outros.svg';
import transportImage from 'assets/images/transporte.svg';
import utilitiesImage from 'assets/images/utilidades.svg';
import healthImage from 'assets/images/saude.svg';
import { Icon } from './UI';

const Images = {
  Restaurante: <Icon src={foodImage} alt='Restaurante' />,
  Utilidades: <Icon src={utilitiesImage} alt='Utilidades' />,
  Transporte: <Icon src={transportImage} alt='Transporte' />,
  Saúde: <Icon src={healthImage} alt='Saúde' />,
  default: <Icon src={othersImage} alt='Outros' />
}

export default (type) => {
  return Images[type] || Images.default;
}

import React from 'react'

import { Box, Button } from 'Components/UI';
import Items from 'Components/Items';

import { extratoLista } from 'info';

const Extract = () => {
  const extracts = extratoLista.updates;

  return (
    <Box>
      {
        extracts.map(({ id, type, value, date, from, }) => {
          return (
            <Items
              key={id}
              type={type}
              from={from}
              date={date}
              value={value}
            />
          )
        })
      }
      <Button>
        Ver mais
      </Button>
    </Box>
  );
}

export default Extract;

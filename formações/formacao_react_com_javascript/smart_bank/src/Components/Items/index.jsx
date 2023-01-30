import React from 'react';
import styled from 'styled-components';

import Item from 'Components/Item';
import ImageFilter from 'Components/ImageFilter';

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  padding: 10px;
  font-size: 12px;
`

export default (props) => {
  return (
    <Items>
      {ImageFilter(props.type)}
      <Item
        {...props}
      />
      <span>{props.date}</span>
    </Items>
  )
};

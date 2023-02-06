import React, { useState } from 'react';
import { ReactComponent as ArrowDownIcon } from '../../images/icon-arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from '../../images/icon-arrow-up.svg';

export const NavItem = ({text = 'asd', children}) => {
  const [selected, setSelected] = useState('');
  return (
    <div className='relative'>
      <div className='flex space-x-2 cursor-pointer items-center '>
        <span 
          className='text-medium-gray hover:text-almost-black transition duration-500 ease-in-out'
          onClick={() => children && setSelected(text !== selected ? text : '')}
        >{text}</span>
        {children && (selected === text ?  <ArrowUpIcon /> : <ArrowDownIcon />)}
      </div>
      {selected && children}
    </div>
  )
}

import { getByTestId, render , screen , fireEvent} from '@testing-library/react';
import React from 'react';

import CustomSearch from '../CustomSearch';

const onClick = jest.fn();

it("Check if custom search is rendered",()=>{
    render(<CustomSearch/>);
    const ele = screen.getByTestId('Maindiv');
    expect(ele).toBeInTheDocument();
})


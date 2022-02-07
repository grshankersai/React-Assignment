import React from 'react';
import BookDetailView from './BookDetailView';
import {render , fireEvent, getRoles} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


test("Header renders with correct text", ()=>{

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(<BookDetailView />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const headerEl = component.getByTestId("Test1");
    
    expect(headerEl.innerHTML).toBe("");
  
  
  
  });
import React from "react";
import { create } from "react-test-renderer";
import {sum, multiply} from '../maths.js';
//import Basic from './../Basic.js';
import { render, screen } from '@testing-library/react';

describe('multipe',()=>{
    test('multiplication of two numbers',()=>{
        expect(multiply(3,4)).toBe(12);
    })
})


describe('sum', () => {
    test('sums up two values', () => {
      expect(sum(2, 4)).toBe(6);
    });
  });

describe('Testing sum', () => {
    function sum(a, b) {
        return a + b;
    }

    it('should equal 4',()=>{
        expect(sum(2,2)).toBe(4);
        })

    test('also should equal 4', () => {
        expect(sum(2,2)).toBe(4);
        }) 

      /*  test('renders App component', () => {
            render(<Basic />);
            //screen.debug();
            screen.getByText('Search:');
            
           
    // succeeds
    expect(screen.getByText('Search:')).toBeInTheDocument();
 
    // succeeds
    //expect(screen.getByText(/Search/)).toBeInTheDocument();
          });
          //expect(screen.getByRole('textbox')).toBeInTheDocument();
         */
});

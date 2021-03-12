import React from "react";
import { create } from "react-test-renderer";
import {sum, multiply} from '../maths.js';
import ReactDOM from 'react-dom';
import App from '../App.js';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders a snapshot', () => {
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
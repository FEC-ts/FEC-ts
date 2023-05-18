/** @jest-environment jsdom */
import renderer from 'react-test-renderer';
import OverviewStyleItem from '../../client/src/components/Overview/OverviewStyleItem.jsx';
import {cleanup, fireEvent, render} from '@testing-library/react';

import react,  {useState, useEffect, useRef, useLayoutEffect,  useContext}from 'react';

const stubs = require('./stubs.js');


var style = stubs.style;
var currentStyle = stubs.currentStyle;

describe('OverviewStyleItem', ()=>{


  it('should render current style', ()=> {
    const component = renderer.create(<OverviewStyleItem style={style} currentStyle={currentStyle} />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })






})

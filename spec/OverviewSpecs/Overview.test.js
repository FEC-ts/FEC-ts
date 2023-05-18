/** @jest-environment jsdom */
import renderer from 'react-test-renderer';
import Overview from '../../client/src/components/Overview/Overview.jsx';
import {cleanup, fireEvent, render} from '@testing-library/react';

import react,  {useState, useEffect, useRef, useLayoutEffect,  useContext}from 'react';
const stubs = require('./stubs.js');

var productInfo_1 = stubs.productInfo_1;
describe('Overview productInfo_1', ()=>{


  it('should render overview section', ()=> {
    const component = renderer.create(<Overview productInfo={productInfo}/>);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })



})

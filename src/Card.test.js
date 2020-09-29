import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
//import store from './store';
import renderer, { act } from 'react-test-renderer';


describe('card component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Card title={''} content={''} />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<Card title={'first card'} content={'This is a card'}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
        });
});   
/*
    it('render UI as expected', () => {
        const tree = renderer
        .create(${props.title} === 'first card')
    })
    */
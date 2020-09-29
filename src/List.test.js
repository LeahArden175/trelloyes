import React from 'react';
import ReactDOM from 'react-dom';
import STORE from './store';
import List from './List'
import renderer, { act } from 'react-test-renderer';


/*
describe('list component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<List />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
       it('renders List UI as expected', () => {
        const lists = STORE.lists.map(list => {
          return <List
            key={list.id}
            header={list.header}
            cards={list.cardIds.map(id => STORE.allCards[id])}
          />
        })
        const tree = renderer
          .create(lists)
          .toJSON()
        expect(tree).toMatchSnapshot();
});
});
*/


it('renders without crashing', () =>{
    const div = document.createElement('div');
    ReactDOM.render(
      <List 
        key={STORE.lists[0].id}
        header={STORE.lists[0].header}
        cards={STORE.lists[0].cardIds.map(id => STORE.allCards[id])}
      />,
      div
    )
  
    ReactDOM.unmountComponentAtNode(div);
  })
  
  it('renders as expected', () => {
    const tree = renderer
      .create( <List 
        key={STORE.lists[0].id}
        header={STORE.lists[0].header}
        cards={STORE.lists[0].cardIds.map(id => STORE.allCards[id])}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
import * as React from 'react';
import PropTypes from 'prop-types';

import { ListStyled, ButtonStyled, NoItemsStyled } from './styles';

import ListItem from './components/ListItem';

export class App extends React.Component {

  static propTypes = {
    items: PropTypes.string,
    visibility: PropTypes.string,
    onNewItem: PropTypes.func,
  }

  static defaultProps = {
    visibility: 'visible'
  }

  render() {
    const { items, visibility, onNewItem } = this.props;
    return (
      <ListStyled visibility={visibility}>
          <ButtonStyled onClick={onNewItem}>New Item</ButtonStyled>
          {
            JSON.parse(items).length > 0 ? 
            JSON.parse(items).map(item => <ListItem key={item.id} item={item}/> ) :
            <NoItemsStyled>
              <h2>No Items for your search</h2>
            </NoItemsStyled>
          }
      </ListStyled>
    )
  }
}
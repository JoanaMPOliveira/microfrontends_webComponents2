  
import * as React from 'react';
import PropTypes from 'prop-types';

import { SearchFormStyled, SearchFormInputStyled } from './styles'

export class App extends React.Component {

  static propTypes = {
    onSearch: PropTypes.func,
    visibility: PropTypes.string,
  }

  static defaultProps = {
    visibility: 'visible'
  }

  render() {
    const { onSearch, visibility } = this.props
    return (
      <SearchFormStyled visibility={visibility}>
        <SearchFormInputStyled onChange={onSearch} placeholder="Search..."/>
      </SearchFormStyled>
    )
  }
}
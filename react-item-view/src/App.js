  
import * as React from 'react';
import PropTypes from 'prop-types';

import { ItemViewStyled, ItemViewImageWrapperStyled, ItemViewInfoStyled, InfoHeaderStyled, InfoBodyStyled, ButtonStyled } from './styles';


export class App extends React.Component {

  static propTypes = {
    visibility: PropTypes.string,
    item: PropTypes.object,
    onBackToList: PropTypes.func
  }

  static defaultProps = {
    visibility: 'hidden'
  }

  render() {
    const { item, visibility, onBackToList } = this.props;
    return (
        <ItemViewStyled visibility={visibility}>
            <ItemViewImageWrapperStyled>
              <img src={item.cover} />
            </ItemViewImageWrapperStyled>
            <ItemViewInfoStyled>
              <InfoHeaderStyled>
                <div>
                  <h2>{item.title}</h2>
                  <h4>{item.subtitle}</h4>
                  <span>{item.author}</span>
                </div>
                <div>
                  <h5>{item.price}</h5>
                </div>
              </InfoHeaderStyled>
              <InfoBodyStyled>
                <p>{item.description}</p>
              </InfoBodyStyled>
            </ItemViewInfoStyled>
            <ButtonStyled onClick={onBackToList}>Back to list</ButtonStyled>
        </ItemViewStyled>
    )
  }
}
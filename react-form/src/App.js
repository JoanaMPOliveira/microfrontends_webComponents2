  
import * as React from 'react';
import PropTypes from 'prop-types';

import { FormStyled, FormGroupStyled, ButtonGroupStyled, ButtonInputStyled, ButtonCancelStyled, FormTitleStyled } from './styles'

export class App extends React.Component {

  static propTypes = {
    visibility: PropTypes.string,
    fields: PropTypes.string,
    onFinish: PropTypes.func
  }

  static defaultProps = {
    visibility: 'hidden'
  }

  render() {
    const { visibility, fields, onFinish } = this.props;
    return (
      <FormStyled visibility = {visibility}>
        <FormTitleStyled><h1>Create a new Item</h1></FormTitleStyled>
        {JSON.parse(fields).map((field, index) => (
          field !== 'id' &&
            <FormGroupStyled key={index}>
                <label>{field}</label>
                {
                  field !== "description" ? 
                  <input name={field} type="text"/> 
                  : 
                  <textarea rows="10" name={field} type="text"/> 
                }
            </FormGroupStyled>
        ))}
        <ButtonGroupStyled>
            <ButtonCancelStyled onClick={onFinish}><span>Cancel</span></ButtonCancelStyled>
            <ButtonInputStyled type="submit" value="Submit" />
        </ButtonGroupStyled>
      </FormStyled>
    )
  }
}
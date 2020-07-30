  
import * as React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { FormStyled, FormGroupStyled, ButtonGroupStyled, ButtonInputStyled, ButtonCancelStyled, FormTitleStyled } from './styles'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.item ? this.props.item.id : uuidv4(),
      title: this.props.item ? this.props.item.title : '',
      subtitle: this.props.item ? this.props.item.subtitle : '',
      description: this.props.item ? this.props.item.description : '',
      author: this.props.item ? this.props.item.author : '',
      cover: this.props.item ? this.props.item.cover : '',
      price: this.props.item ? this.props.item.price : ''
    }
  }
  static propTypes = {
    visibility: PropTypes.string,
    fields: PropTypes.string,
    onFinish: PropTypes.func,
    item: PropTypes.object
  }

  static defaultProps = {
    visibility: 'hidden'
  }

  handleSubmit = () => {
    const { item } = this.props
    // alert(`Item: \n ${
    //     Object.keys(this.state).map(key => `${key}: ${this.state[key]}\n`)
    // } was successfuly submited`)

    // ir buscar os items ao local state
    const items = JSON.parse(localStorage.getItem('items'))
    if (item) {
      const itemToUpdateIndex = items.findIndex(element => item.id == element.id)
      items[itemToUpdateIndex] = this.state
    } else {
      items.push(this.state)
    }

    localStorage.setItem('items', JSON.stringify(items))
    console.log(items, localStorage)
  }

  handleChange = (name, value) => {
    console.log('changed')
    this.setState({
        [name]: value
    })
  }

  render() {
    const { visibility, fields, onFinish, item } = this.props;
    return (
      <FormStyled visibility = {visibility} onSubmit={this.handleSubmit}>
        <FormTitleStyled><h1>Create a new Item</h1></FormTitleStyled>
        {JSON.parse(fields).map((field, index) => (
          field !== 'id' &&
            <FormGroupStyled key={index}>
                <label>{field}</label>
                {
                  field !== "description" ? 
                  <input name={field} type="text" value={this.state[field]} onChange={(e) => this.handleChange(e.target.name, e.target.value)} /> 
                  : 
                  <textarea rows="10" name={field} type="text" value={this.state[field]} onChange={(e) => this.handleChange(e.target.name, e.target.value)} /> 
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
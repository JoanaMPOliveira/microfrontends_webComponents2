import React from 'react'
import PropTypes from 'prop-types';

import { ListItemStyled, ListItemImageWrapperStyled, ListItemImageStyled, ListItemInfoStyled, ListItemBtnWrapperStyled, ListItemBtnStyled } from './styles';

class ListItem extends React.Component {
    static propTypes = {
        item: PropTypes.object,
    }

    getAppContainerChildren = () => {
        const appContainer = document.getElementById('app-container')
        return appContainer.children
    }

    displayWebComponent = (e, webComponet) => {
        const { item } = this.props
        e.preventDefault()
        
        const containerChildren = this.getAppContainerChildren()
        
        for (let child of containerChildren) {
            if (child.tagName !== webComponet) {
                child.setAttribute('visibility', 'hidden')
            } else {
                child.setAttribute('visibility', 'visible')
                child.setAttribute('item', JSON.stringify(item))
            }
        }

        window.scrollTo(0,0)
    }

    render() {
        const { item } = this.props
        return (
            <ListItemStyled>
                <ListItemImageWrapperStyled>
                    <ListItemImageStyled src={ item.cover } />         
                </ListItemImageWrapperStyled>
                <ListItemInfoStyled>
                    <h4>{ item.title }</h4>
                    <h5>{ item.subtitle }</h5>
                    <span>{ item.author }</span>
                    <span>{ item.price }</span>
                </ListItemInfoStyled>
                <ListItemBtnWrapperStyled>
                    <ListItemBtnStyled onClick={(e) => this.displayWebComponent(e, 'REACT-ITEM-VIEW')}>View</ListItemBtnStyled>
                    <ListItemBtnStyled onClick={(e) => this.displayWebComponent(e, 'REACT-FORM')}>Edit</ListItemBtnStyled>
                </ListItemBtnWrapperStyled>
            </ListItemStyled>
        )
    }
}

export default ListItem
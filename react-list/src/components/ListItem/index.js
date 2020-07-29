import React from 'react'
import PropTypes from 'prop-types';

import { ListItemStyled, ListItemImageWrapperStyled, ListItemImageStyled, ListItemInfoStyled, ListItemBtnWrapperStyled, ListItemBtnStyled } from './styles';

class ListItem extends React.Component {
    static propTypes = {
        item: PropTypes.object,
    }

    displayItemView = (e) => {
        const { item } = this.props
        e.preventDefault()


        const appContainer = document.getElementById('app-container')
        const containerChildren = appContainer.children
        for (let child of containerChildren) {
            if (child.tagName !== 'REACT-ITEM-VIEW') {
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
                    <ListItemBtnStyled onClick={this.displayItemView}>View</ListItemBtnStyled>
                    <ListItemBtnStyled>Edit</ListItemBtnStyled>
                </ListItemBtnWrapperStyled>
            </ListItemStyled>
        )
    }
}

export default ListItem
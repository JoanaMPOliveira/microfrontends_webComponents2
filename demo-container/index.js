document.addEventListener('DOMContentLoaded', function () { 
    const localItems = JSON.parse(localStorage.getItem('items'))
   
    const state = {
        filteredItems: localItems
    }

    const formFiels = Object.keys(localItems[0]).map(key => key)
    
    const reactSearch = document.createElement('react-search')
    reactSearch.addEventListener('onSearch', (e) => handleSearch(e, localItems))

    const reactList = document.createElement('react-list')
    reactList.setAttribute('items', JSON.stringify(state.filteredItems))
    reactList.addEventListener('onNewItem', () => displayReactForm())
    
    const reactForm = document.createElement('react-form')
    reactForm.setAttribute('visibility', 'hidden')
    reactForm.setAttribute('fields', JSON.stringify(formFiels))
    reactForm.removeAttribute('item')
    reactForm.addEventListener('onFinish', () => displayHome())
    
    const reactItemView = document.createElement('react-item-view')
    reactItemView.setAttribute('visibility', 'hidden')
    reactItemView.addEventListener('onBackToList', () => displayHome())
    
    const appContainer = document.getElementById('app-container')
    appContainer.appendChild(reactSearch)
    appContainer.appendChild(reactList)
    appContainer.appendChild(reactItemView)
    appContainer.appendChild(reactForm)
    
    
    function handleSearch(e, localItems) {
        const searchValue = e.target.childNodes[0][0].value
        state.filteredItems = localItems.filter(item => (
            item.title.toLowerCase().includes(searchValue.toLowerCase()) || 
            item.subtitle.toLowerCase().includes(searchValue.toLowerCase()) || 
            item.author.toLowerCase().includes(searchValue.toLowerCase()) 
            ))
            
            reactList.setAttribute('items', JSON.stringify(state.filteredItems))    
        }
        
        function displayReactForm() {
            reactSearch.setAttribute('visibility', 'hidden')
            reactList.setAttribute('visibility', 'hidden')
            reactItemView.setAttribute('visibility', 'hidden')
            reactForm.setAttribute('visibility', 'visible')
        }
        
        function displayHome() {
            reactSearch.setAttribute('visibility', 'visible')
            reactList.setAttribute('visibility', 'visible')
            reactItemView.setAttribute('visibility', 'hidden')
            reactForm.setAttribute('visibility', 'hidden')
            reactForm.removeAttribute('item')
        
    }

})

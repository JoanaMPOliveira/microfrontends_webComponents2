document.addEventListener('DOMContentLoaded', function () {
    const items = [
        {
            id: "1",
            title: "New Life",
            subtitle: "Relive now",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            author: "Dr. Wisdom",
            cover: "https://picsum.photos/200/250",
            price: "34.56€"
        },
        {
            id: "2",
            title: "Now I see",
            subtitle: "Buy glasses",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            author: "View Baddly",
            cover: "https://picsum.photos/200/250",
            price: "32.09€"
        },
        {
            id: "3",
            title: "Eat like a queen",
            subtitle: "close your mouth",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            author: "Queen Elizabeth",
            cover: "https://picsum.photos/200/250",
            price: "12.98€"
        },
        {
            id: "4",
            title: "Why animals love humans",
            subtitle: "Be stupid but not starving",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            author: "Snoopy Dog",
            cover: "https://picsum.photos/200/250",
            price: "56,12€"
        },
        {
            id: "5",
            title: "The blind that could see",
            subtitle: "Open your eyes",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            author: "Dr. Wisdom",
            cover: "https://picsum.photos/200/250",
            price: "99,99€"
        },
        {
            id: "6",
            title: "The last but not the least",
            subtitle: "A backwards run",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            author: "Mr. Crab",
            cover: "https://picsum.photos/200/250",
            price: "38,99€"
        },
    
    ]
    
    const state = {
        filteredItems: items
    }

    const formFiels = Object.keys(items[0]).map(key => key)
    
    const reactSearch = document.createElement('react-search')
    reactSearch.addEventListener('onSearch', (e) => handleSearch(e, items))

    const reactList = document.createElement('react-list')
    reactList.setAttribute('items', JSON.stringify(state.filteredItems))
    reactList.addEventListener('onNewItem', () => displayReactForm())
    
    const reactForm = document.createElement('react-form')
    reactForm.setAttribute('visibility', 'hidden')
    reactForm.setAttribute('fields', JSON.stringify(formFiels))
    reactForm.addEventListener('onFinish', () => displayHome())
    
    const reactItemView = document.createElement('react-item-view')
    reactItemView.setAttribute('visibility', 'hidden')
    reactItemView.addEventListener('onBackToList', () => displayHome())
    
    const appContainer = document.getElementById('app-container')
    appContainer.appendChild(reactSearch)
    appContainer.appendChild(reactList)
    appContainer.appendChild(reactItemView)
    appContainer.appendChild(reactForm)
    
        
    function handleSearch(e, items) {
        const searchValue = e.target.childNodes[0][0].value
        state.filteredItems = items.filter(item => (
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
        
    }

})

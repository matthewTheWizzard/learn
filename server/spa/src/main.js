const root = document.getElementById('app');

const mainButton = document.createElement('button');
mainButton.textContent = 'Go to main';
root.append(mainButton);

mainButton.addEventListener('click', ()=> goTo('/main'));

const mainLink = document.createElement('a');
mainLink.href = '/main';
mainLink.textContent = 'Go to main';
root.append(mainLink);

const aboutButton = document.createElement('button');
aboutButton.textContent = 'Go to about';
root.append(aboutButton);

aboutButton.addEventListener('click', ()=> goTo('/about'));

const createPage = (page) => {
    const pageContainer = document.createElement('div');
    pageContainer.className = page;
    pageContainer.textContent = page;
    
    return pageContainer
}

const container = document.createElement('div');
container.className = 'container';
root.append(container);

const mainPage = createPage('main')
const aboutPage = createPage('about')

const routes = {
    '/main': mainPage,
    '/about': aboutPage
}

const goTo = (path) => {
    const page = routes[path];
    
    if (page) {
        container.replaceChildren(page);
    }
}

container.append(mainPage);
class Component {
  constructor({ tag, props, text, children }) {
      this.tag = tag;
      this.props = props ?? {};
      this.children = children ?? [];
      this.text = text;
  }

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Initializes the component by creating an HTML element based on its tag,
 * props, text, and children. Attributes are set from props, text content is 
 * set if provided, and child components are initialized and appended. 
 * Returns the root HTML element representing the component.
 * 
 * @returns {HTMLElement} The initialized root element of the component.
 */

/******  80e4f987-4da4-489e-906d-e66f78337963  *******/  init() {
      const root = document.createElement(this.tag);
      Object.keys(this.props).forEach((key) => root.setAttribute(key, this.props[key]));

      if (this.text) {
          root.textContent = this.text;
      }

      this.addChildren(this.children);
      this.root = root;
      return root;
  }

  render(parent) {
      parent.innerHTML = '';
      const root = this.init();
      parent.appendChild(root);
      return root;
  }

  addChildren(children) {
      this.children = [...this.children, ...children];

      children.forEach((child) => {
          if (typeof child === 'string') {
              this.root.appendChild(document.createTextNode(child));
          } else {
              this.root.appendChild(child.init());
          }
      });
  }

  addListener(event, callback) {
      this.root.addEventListener(event, callback);
  }
}

class MainPage extends Component {
  constructor() {
      super({
          tag: 'main',
          children: [
              new Component({
                  tag: 'h1',
                  text: 'Главная'
              }),
              new Component({
                  tag: 'p',
                  text: 'Добро пожаловать на главную страницу!'
              })
          ]
      });
  }
}

class AboutPage extends Component {
  constructor() {
      super({
          tag: 'main',
          children: [
              new Component({
                  tag: 'h1',
                  text: 'О нас'
              }),
              new Component({
                  tag: 'p',
                  text: 'Здесь информация о нас.'
              })
          ]
      });
  }
}

class Navigation extends Component {
  aboutBtn = new Component({
    tag: 'button',
    text: 'Главная',
    props: { id: 'home-btn' }
})

  homeBtn = new Component({
    tag: 'button',
    text: 'О нас',
    props: { id: 'about-btn' }
})
  constructor(appInstance) {
      super({
          tag: 'nav',
      });

      this.appInstance = appInstance;
      this.addChildren([this.aboutBtn, this.homeBtn]);
  }

  attachEvents() {
    this.aboutBtn.addListener('click', () => this.appInstance.navigate('about'));
    this.homeBtn.addListener('click', () => this.appInstance.navigate('home'));
  }
}

class App {
  constructor() {
      this.routes = {
          home: MainPage,
          about: AboutPage
      };
  }

  navigate(page) {
      const root = document.getElementById('app');
      new this.routes[page]().render(root);
  }

  start() {
      document.body.innerHTML = '';
      
      const nav = new Navigation(this);
      const appContainer = new Component({ tag: 'div', props: { id: 'app' } });

      nav.render(document.body);
      appContainer.render(document.body);
      nav.attachEvents();
      
      this.navigate('home');
  }
}

document.addEventListener('DOMContentLoaded', () => new App().start());

class Component {
  constructor({ tag, props, text, children }) {
      this.tag = tag;
      this.props = props ?? {};
      this.children = children ?? [];
      this.text = text;
  }

  init() {
      const root = document.createElement(this.tag);
      Object.keys(this.props).forEach((key) => root.setAttribute(key, this.props[key]));

      if (this.text) {
          root.textContent = this.text;
      }

      this.children.forEach((child) => {
          if (typeof child === 'string') {
              root.appendChild(document.createTextNode(child));
          } else {
              root.appendChild(child.init());
          }
      });
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
  }

  addListener(event, callback) {
      root.addEventListener(event, callback);
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

      this.addChildren([this.aboutBtn, this.homeBtn]);
      this.appInstance = appInstance;
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

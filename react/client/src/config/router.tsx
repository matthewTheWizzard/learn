import {
  createBrowserRouter,
} from "react-router";
import App from "../App";
import { AboutPage } from "../pages/about";
import { ChatPage } from "../pages/chat";
import { LoginPage } from "../pages/login";

export enum Routes {
  login = '/',
  about = '/about',
  chat = '/chat/:id?',
  chats = '/chat'
}

export const router = createBrowserRouter([{
    path: Routes.login,
    Component: App,
    children: [
      { index: true, Component: LoginPage },
      { path: Routes.about, Component: AboutPage },
      { path: Routes.chat, Component: ChatPage },
    ],
  },
]);

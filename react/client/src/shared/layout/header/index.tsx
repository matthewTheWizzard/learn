import { NavLink } from "react-router";
import { Routes } from "../../../config/router";

export function MyAppNav() {
    return (
        <nav>
            <NavLink to={Routes.login}>Home</NavLink>
            <NavLink to={Routes.about}>About</NavLink>
            <NavLink to={Routes.chats}>Chat</NavLink>
        </nav>
    );
}

export const Header = () => {
    return (
        <header>
            <MyAppNav />
        </header>
    )
}


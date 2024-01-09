import { useState, useEffect } from React;
import { Link } from "react-scroll";

function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = {}
}
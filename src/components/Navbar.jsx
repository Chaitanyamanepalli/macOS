import dayjs from "dayjs";
import { navLinks, navIcons } from "#constants";
import useWindowStore from "#store/window.js";

const Navbar = () => {
    const { windows, openWindow, closeWindow } = useWindowStore();

    const handleToggle = (type) => {
        if (windows[type]?.isOpen) {
            closeWindow(type);
        } else {
            openWindow(type);
        }
    };

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">Chaitanya's Portfolio</p>

                <ul>
                    {navLinks.map(({ id, name, type }) => {
                        return (
                            <li key={id} onClick={() => handleToggle(type)}>
                                <p>{name}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map(({ id, img }) => {
                        return (
                            <li key={id}>
                                <img src={img} className="icon-hover" alt={`icon-${id}`} />
                            </li>
                        );
                    })}
                </ul>
                <time>{dayjs().format("ddd MMM D h:mm A")}</time>
            </div>
        </nav>
    );
};

export default Navbar;
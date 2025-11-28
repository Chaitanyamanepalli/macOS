import { locations } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import { Search } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import clsx from "clsx";

const Finder = () => {
    const { activeLocation, setActiveLocation } = useLocationStore();
    const renderList = (items) => items.map((item) => (
        <li key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
                item.id === activeLocation.id ? "active" : "not-active"
            )}
        >
            <img src={item.icon} className="w-4" alt={item.name} />
            <p className="text-sm font-medium truncate">
                {item.name}
            </p>
        </li>
    ));
    return (
        <>
            <div id="window-header">
                <WindowControls target="finder" />
                <Search className="icon" />
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">
                    <div>
                        <h3>Favorites</h3>
                        <ul>
                            {renderList(Object.values(locations))}
                        </ul>
                    </div>
                    <div>
                        <h3>Work</h3>
                        <ul>
                            {renderList(locations.work.children)}
                        </ul>
                    </div>
                </div>

                <div className="content flex-1 overflow-y-auto p-8">
                    {activeLocation.id === 2 ? (
                        <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed font-medium">
                            <p>
                                I’m <span className="font-bold text-gray-900">Chaitanya Manepalli</span>, a 3rd-year B.Tech student and a passionate Frontend Developer who loves building clean, interactive, and user-focused web experiences. Over the years, I’ve worked on several real-time projects — from UI-rich applications to full-stack prototypes — and developed a strong eye for design, performance, and usability.
                            </p>
                            <p>
                                Along with frontend development, I’m also deeply interested in Artificial Intelligence, especially how smart systems can enhance user experiences and solve real-world problems. I enjoy learning, experimenting, and constantly pushing myself to build better projects every day.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-4 auto-rows-min">
                            {activeLocation.children.map((child) => (
                                <div
                                    key={child.id}
                                    className="flex flex-col items-center gap-3 group cursor-pointer"
                                    onDoubleClick={() => {
                                        if (child.type === "img") {
                                            useWindowStore.getState().openWindow("imgfile", child);
                                        } else if (child.type === "resume") {
                                            useWindowStore.getState().openWindow("resume");
                                        }
                                    }}
                                >
                                    <img
                                        src={child.icon}
                                        alt={child.name}
                                        className="object-contain object-center w-16 h-16 relative group-hover:scale-105 transition-transform"
                                    />
                                    <p className="text-sm text-center font-medium w-full truncate px-2">
                                        {child.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, "finder")

export default FinderWindow;
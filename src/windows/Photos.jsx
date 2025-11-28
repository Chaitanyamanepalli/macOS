import { gallery, photosLinks } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";

import { useState } from "react";
import clsx from "clsx";
import useWindowStore from "#store/window";

const Photos = () => {
    const [active, setActive] = useState(photosLinks[0].title);
    const { openWindow } = useWindowStore();

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
            </div>

            <div className="flex h-full">
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul>
                        {photosLinks.map((link) => (
                            <li
                                key={link.id}
                                onClick={() => setActive(link.title)}
                                className={clsx(
                                    active === link.title ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                                )}
                            >
                                <img src={link.icon} alt={link.title} />
                                <p>{link.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="gallery flex-1 overflow-y-auto">
                    <ul className="grid grid-cols-1 gap-4 p-4">
                        {gallery.map((item) => (
                            <li key={item.id} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;

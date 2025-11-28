import { useRef } from "react";
import useWindowStore from "#store/window.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];
        const ref = useRef(null);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            if (isOpen) {
                // Pop-up animation (Windows OS style: slide up + scale + fade)
                gsap.fromTo(el,
                    { scale: 0.8, opacity: 0, y: 50 },
                    { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.2)" }
                );

                // Make draggable
                Draggable.create(el, {
                    type: "x,y",
                    trigger: el.querySelector("#window-header"),
                    onPress: () => focusWindow(windowKey), // Focus on drag start
                    allowContextMenu: true,
                });
            }
        }, [isOpen]);

        if (!isOpen) return null;

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{ zIndex }}
                className="window-frame"
                onMouseDown={() => focusWindow(windowKey)}
            >
                <Component {...props} />
            </section>
        );
    }
    Wrapped.displayName = `WindowWrapper(${Component.displayName ||
        Component.name || "Component"})`;

    return Wrapped;
};

export default WindowWrapper;
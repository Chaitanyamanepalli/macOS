import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { Check } from "lucide-react";
import { Flag } from "lucide-react";
import WindowControls from "#components/WindowControls.jsx";
import { techStack } from "#constants/index.js";

const Terminal = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="terminal" />
                <h2>Tech Stack</h2>

            </div>
            <div className="techstack">
                <p>
                    <span className="font-bold" >@Chaitu </span>
                    show tech stack
                </p>

                <div className="label">
                    <p className="w-32">Category</p>
                    <p> Technologies</p>

                </div>
                <ul className="content">
                    {techStack.map(({ category, items }) => {
                        return (
                            <li key={category} className="flex items-start gap-2">
                                <Check className="check mt-1" size={20} />
                                <h3 className="mt-0.5">{category}</h3>
                                <ul className="flex flex-wrap gap-1 flex-1">
                                    {items.map((item, i) =>
                                        <li key={i}>
                                            {item}
                                            {i < items.length - 1 ? "," : ""}
                                        </li>

                                    )}
                                </ul>
                            </li>
                        )
                    })}

                </ul>
                <div className="footnote">
                    <p>
                        <Check size={20} /> 5 of 5 stacks loaded succesfully
                    </p>
                    <p className="text-black">
                        <Flag size={15} fill="black" />
                        Render time: 6ms

                    </p>

                </div>
            </div>

        </>
    );
}

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
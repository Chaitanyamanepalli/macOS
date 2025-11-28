import { locations } from "#constants";

const Desktop = () => {
    return (
        <section id="desktop" className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
            {Object.values(locations).map((location) =>
                location.children?.map((item) => {
                    if (!item.position) return null;
                    return (
                        <div
                            key={item.id}
                            className={`absolute flex flex-col items-center gap-1 w-20 pointer-events-auto cursor-pointer group ${item.position}`}
                        >
                            <div className="p-1 rounded-md group-hover:bg-white/20 transition-colors">
                                <img src={item.icon} alt={item.name} className="w-12 h-12 object-contain drop-shadow-lg" />
                            </div>
                            <span className="text-white text-xs font-medium drop-shadow-md px-1 rounded-sm group-hover:bg-blue-600/80 transition-colors text-center leading-tight">
                                {item.name}
                            </span>
                        </div>
                    );
                })
            )}
        </section>
    );
};

export default Desktop;

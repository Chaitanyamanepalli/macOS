import useArchiveStore from "#store/archive";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";

const Archive = () => {
    const { archivedItems } = useArchiveStore();

    return (
        <>
            <div id="window-header">
                <WindowControls target="archive" />
                <p className="font-bold text-[#5f6266] flex-1 text-center">Archive</p>
            </div>

            <div className="bg-white h-full p-5 overflow-y-auto">
                {archivedItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400">
                        <p>No archived items</p>
                    </div>
                ) : (
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Type</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {archivedItems.map((item) => (
                                <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4">{item.type}</td>
                                    <td className="px-6 py-4">{item.date}</td>
                                    <td className="px-6 py-4">
                                        <button
                                            className="font-medium text-blue-600 hover:underline"
                                            onClick={() => {
                                                if (item.type === "Project") {
                                                    // Open Finder (Projects)
                                                    import("#store/window").then(({ default: useWindowStore }) => {
                                                        useWindowStore.getState().openWindow("finder");
                                                    });
                                                } else if (item.type === "File") {
                                                    // Open Resume (example)
                                                    import("#store/window").then(({ default: useWindowStore }) => {
                                                        useWindowStore.getState().openWindow("resume");
                                                    });
                                                }
                                            }}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

const ArchiveWindow = WindowWrapper(Archive, "archive");

export default ArchiveWindow;

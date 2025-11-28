import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useArchiveStore = create(
    immer((set) => ({
        archivedItems: [
            {
                id: 1,
                name: "Old Project",
                type: "Project",
                date: "2024-01-15",
            },
            {
                id: 2,
                name: "Draft Resume",
                type: "File",
                date: "2024-02-20",
            },
            {
                id: 3,
                name: "Meeting Notes",
                type: "Note",
                date: "2024-03-10",
            },
        ],

        archiveItem: (item) =>
            set((state) => {
                state.archivedItems.push({
                    ...item,
                    date: new Date().toISOString().split("T")[0],
                });
            }),
    }))
);

export default useArchiveStore;

import useWindowStore from "#store/window";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";

const ImageViewer = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile.data;

    if (!data) return null;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <p className="font-bold text-[#5f6266] flex-1 text-center">{data.name || "Image Viewer"}</p>
            </div>
            <div className="preview flex items-center justify-center h-full bg-gray-100">
                <img
                    src={data.icon || data.img}
                    alt={data.name || "preview"}
                    className="max-w-full max-h-full object-contain"
                />
            </div>
        </>
    );
};

const ImageViewerWindow = WindowWrapper(ImageViewer, "imgfile");

export default ImageViewerWindow;

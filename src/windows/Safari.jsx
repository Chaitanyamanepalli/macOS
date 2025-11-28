import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper";
import { PanelLeft, ChevronLeft, ChevronRight, ShieldHalf, Share, Plus, Copy } from "lucide-react"
import { MoveRight } from "lucide-react"
import { blogPosts } from "#constants";

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <div className="flex items-center gap-5">
          <WindowControls target="safari" />
          <div className="flex items-center gap-4 text-gray-500">
            <PanelLeft className="icon !p-0.5" />
            <div className="flex items-center gap-2">
              <ChevronLeft className="icon !p-0.5" />
              <ChevronRight className="icon !p-0.5" />
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-4">
          <div className="search group">
            <ShieldHalf className="size-3 text-gray-500 group-hover:text-gray-700 transition-colors" />
            <input type="text"
              placeholder="Search or enter website name"
              className="flex-1 text-center group-focus-within:text-left transition-all" />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="blog">
        <h2>Experience & Education</h2>
        <div className="space-y-8">
          {blogPosts.map(({ id, image, title, date, link }) => (
            <div key={id} className="blog-post">
              <div className="col-span-2">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <p>{date}</p>
                <h3>{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari")

export default SafariWindow
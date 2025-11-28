import gsap from "gsap"
import { Draggable } from "gsap/Draggable"

import { Navbar, Welcome, Dock, Desktop } from "#components"
import { Terminal, Safari, Resume, Finder, Photos, ImageViewer, Archive, Contact } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>

      <Navbar />
      <Welcome />
      <Dock />
      <Desktop />


      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Photos />
      <ImageViewer />
      <Archive />
      <Contact />
    </main>
  )
}

export default App
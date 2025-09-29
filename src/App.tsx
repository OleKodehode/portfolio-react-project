import { Route, Routes } from "react-router-dom";
import "./style/App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Test from "./pages/Test";
import Navbar from "./components/Navbar";

/* 
Plan for portfølje;
Home
Projects samle-side
Projects sider (:id)

Home trenger;
Navbar
  Buttons
Landing Image Section
  Parallax Img
  3 * P
Projects Section
  H2/title
  Project Cards
    (H3/title, Img, P)
  Button
Skills Section
  Grid of all programming skills
About Section
  H2/title
  About "card"
    P Bold
    2 * P
    Img
Contact Section
  H2/title 
  P - Email, github
  Button
Footer
  P
  Button

Projects;
Navbar ^
Landing Image Section
  Parallax Img
Highlighted Projects Section
  Project Cards ^
Other Projects Section
  Project Cards ^
Assignments Section
  Project Cards ^
Footer ^

Individual Projects;
Navbar ^
Project Image
H2 Project Title
P Project details

Palette forslag fra LLM basert på figma;
(Dark Mode)
BG Primary: zinc-900 (main/section)
BG Secondary: zinc-800 (Cards, navbar?)
Text Primary: zinc-200 (heading, body text)
Text Secondary: zinc-400 (subtitles, metadata)
Borders/dividers: zinc-700 
Accent Primary: purple-500 (links, buttons, highlights)
Accent Hover/dark: purple-700 (hover, icons)
Success: green-400 (om nødvendig)
Error: red-400 (om nødvendig)

(Light Mode)
BG Primary: zinc-50 (main/section)
BG Secondary: zinc-100 (Cards, navbar?)
Text Primary: zinc-900 (heading, body text)
Text Secondary: zinc-600 (subtitles, metadata)
Borders/dividers: zinc-300 
Accent Primary: purple-700 (links, buttons, highlights)
Accent Hover/dark: purple-500 (hover, icons)
Success: green-600 (om nødvendig)
Error: red-600 (om nødvendig)
*/

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;

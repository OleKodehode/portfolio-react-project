import "./style/App.css";

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
*/

function App() {
  return (
    <>
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <div>
          <div className="text-xl font-medium text-black dark:text-white">
            ChitChat
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            You have a new message!
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

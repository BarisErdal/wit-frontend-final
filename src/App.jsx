import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageProvider";
import { Switch, Route } from "react-router-dom/";
import SkillsPage from "./components/SkillsPage";
import ProjectsPage from "./components/ProjectsPage";
import HireMePage from "./components/HireMePage";
function App() {
  return (
    <LanguageProvider>
      <Header />

      <Switch>
        <Route path="/skills">
          <SkillsPage />
        </Route>

        <Route path="/projects">
          <ProjectsPage />
        </Route>

        <Route path="/hireme">
          <HireMePage />
        </Route>

        <Route path="/">
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </Route>
      </Switch>
    </LanguageProvider>
  );
}

export default App;

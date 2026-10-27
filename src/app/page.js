import NavBar from "./Components/Navbar";
import  About from "./About/page.js"
import Footer from "./Components/Footer";
import Contact from "./Contact/page.js";
import Skill from "./Skills/page.js";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="min-height: calc(100vh - 176px);">
      <About/>
      </main>
      <Skill />
      <Contact />
      <Footer />
    </>
  );
}
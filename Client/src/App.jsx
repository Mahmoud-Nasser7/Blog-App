import {Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import DashBoard from "./pages/DashBoard"
import Header from "./components/Header"
const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/dashBoard" element={<DashBoard/>} />
      <Route path="/projects" element={<Projects/>} />
    </Routes>
    
    
    </>
  )
}

export default App
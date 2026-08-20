import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import About from './components/About'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />   
        <About />  
        <Skills />   
      </main>
    </>
  )
}

export default App

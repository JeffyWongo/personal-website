import Image from 'next/image'
import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'


export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
import React from "react"
import { MainPage } from "./components/MainPage"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import './styles/App.css'
import './styles/normalize.css'

function App() {


  return (
    <div id="app">
    <Header ></Header>
    <MainPage></MainPage>
    <Footer ></Footer>
    </div>
  )
}

export default App

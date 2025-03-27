import React from 'react'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MealtCategory from './components/MealCategory'
import SingleMealcategory from './components/SingleMealcategory'
import Navbar from './components/Navbar'
import "./App.css"
import FavoriteRecipes from './pages/FavoriteRecipes'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <BrowserRouter>
    <Toaster/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Categories/:id" element={<SingleMealCategory/>}/>
      <Route path="/meal/:id" element={<SingleMealcategory/>}/>
      <Route path="/favoriteRecipes" element={<FavoriteRecipes/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    
    </BrowserRouter>
  )
}

export default App
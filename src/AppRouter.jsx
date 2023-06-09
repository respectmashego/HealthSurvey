import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import AuthForm from './components/authentication/AuthForm'
import SurveyPage from './pages/surveyPage/SurveyPage'
const AppRouter = () => {
  return (
    <Routes>
        <Route  path="*"  element={<HomePage/>}/>
        <Route  path="/auth"  element={<AuthForm/>}/>
        <Route  path="/survey"  element={<SurveyPage/>}/>
    </Routes>
  )
}

export default AppRouter
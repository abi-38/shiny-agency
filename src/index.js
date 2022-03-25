import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Footer from './components/Footer'
import GlobalStyle from './utils/style/GlobalStyle'
import {ThemeProvider} from './utils/context/index'

// dans react-router v6 -> switch est remplacé par Routes
// aussi <Route path="/" component={Home} /> -> <Route path='/welcome' element={<Home/>} />
ReactDOM.render(
    <React.StrictMode>
      <Router>
        <ThemeProvider>
          <GlobalStyle/>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/survey/:questionNumber" element={<Survey />} />
              <Route path="/results" element={<Results />} />
              <Route path="/freelances" element={<Freelances />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </ThemeProvider>
      </Router>
    </React.StrictMode>,
document.getElementById('root')
)
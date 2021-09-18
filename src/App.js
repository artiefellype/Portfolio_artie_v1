/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './App.css'

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Container, Grid} from "@material-ui/core";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';

export default function App() {
        return(
        <div >
                <Container>
                        <Grid container>
                                <Grid item xs={12} 
                                      sm={12} 
                                      lg={4} 
                                      style={{backgroundColor:'red'}}>
                                 <Profile/>
                                 
                                </Grid>
                                <Grid item xs 
                                      style={{backgroundColor: 'blue'}}>
                                  <Header/>
                                  <Router>
                                        <Switch>
                                          <Route path="/Portfolio">
                                                <Portfolio/>
                                          </Route>
                                          <Route path="/Resume">
                                                <Resume/>
                                          </Route>
                                        </Switch>
                                        
                                  </Router>        
                                  
                                  <Footer/>
                                  
                                </Grid>
                        </Grid>
                </Container>
            
        </div>
        )
}
  
    




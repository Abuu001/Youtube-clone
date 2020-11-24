import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar"
import ModelView from "./ModelVIew/ModelView"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import SearchPage from "./SearchPage/SearchPage"

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
          <Header />
          <Switch>
              <Route path="/" exact> 
              <div className="app__page">
                  <SideBar />
                  <ModelView />
                </div>
              </Route>
              <Route path="/search/:searchTerm" exact> 
                <div className="app__page">
                  <SideBar />
                  <SearchPage />
                </div>
              </Route>
          </Switch>
     
      </Router>
    </div>
  );
}

export default App;

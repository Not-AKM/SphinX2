import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Games from './Components/Agents/Games';
import AllMeta from './Components/Meta/Meta';
import User from './Components/Form/User';
import {Layout, Header, HeaderRow, Navigation, Drawer, Content, Icon, FABButton } from 'react-mdl';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import FooterMain from './Components/FooterMain/FooterMain';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Router>

          <div className="demo-big-content">
            <Layout>
                <Header waterfall>

                    <HeaderRow title="SphinX 🎮">
                      <Link to="/User">
                        <FABButton mini colored >
                          <Icon name="account_circle" raised/>
                      </FABButton>
                      </Link>
                    </HeaderRow>

                    <HeaderRow>
                        <Navigation>
                            <Link to="/">HOME</Link>
                            <Link to="/About">ABOUT</Link>
                            <Link to="/AllAgents">GAMES</Link>
                            <Link to="/AllMeta">META</Link>
                        </Navigation>
                    </HeaderRow>
                </Header>

                <Drawer title="SphinX 🎮" style={{backgroundColor:'darkgrey'}}>
                    <Navigation>
                        <Link to="/">HOME</Link>
                        <Link to="/About">ABOUT</Link>
                        <Link to="/AllAgents">GAMES</Link>
                        <Link to="/AllMeta">META</Link>
                        <Link to="/User">USER</Link>
                    </Navigation>
                </Drawer>

                <Content>
              
                  <Switch>
                    <Route path='/About' component={About} />
                    <Route path='/AllAgents' component={Games} />
                    <Route path='/AllMeta' component={AllMeta} />
                    <Route path='/User' component={User} />
                    <Route path='/' component={Home} />
                  </Switch>
                  <FooterMain />

                </Content>
                
            </Layout>
          </div>
      
        </Router>
    
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './User.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
            if(this.state.activeTab === 0){
                return(
                    <div>
                        <SignIn />
                    </div>
                )
            }
            else if(this.state.activeTab === 1){
                return(
                    <div>
                        <SignUp />
                    </div>
                )
            }
    }

    render() { 
        return (
        <div className="nav">
            <Tabs activeTab={ this.state.activeTab } onChange={(tabID) => this.setState({ activeTab: tabID })} ripple>
                <Tab>Sign In</Tab>
                <Tab>Sign Up</Tab>
            </Tabs>

            <section>
                    <Grid>
                        <Cell col={12}><div className="content">{this.toggleCategories()}</div></Cell>
                    </Grid>             
            </section>
        </div>
        );
    }
}

export default Nav;
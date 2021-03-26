import React, { Component } from 'react';
import './Meta.css';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Something from './Ranks/Ranks.js';

class AllMeta extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
            if(this.state.activeTab === 0){
                return(
                    <div className="projects-grid">
                        <Something />
                    </div>
                )
            }
            else if(this.state.activeTab === 1){
                return(
                    <div className="projects-grid">
                        <Something />
                    </div>
                )
            }      
            else if(this.state.activeTab === 2){
                return(
                    <div className="projects-grid">
                        <Something />
                    </div>
                )
            }
    }

    render() { 
        return (
        <div className="category-tabs">
            <Tabs activeTab={ this.state.activeTab } onChange={(tabID) => this.setState({ activeTab: tabID })} ripple>
                <Tab>Something</Tab>
                <Tab>Something</Tab>
                <Tab>Something</Tab>
            </Tabs>

            <section className='allmapbg'>
                    <Grid>
                        <Cell col={12}><div className="content">{this.toggleCategories()}</div></Cell>
                    </Grid>             
            </section>
        </div>
        );
    }
}

export default AllMeta;
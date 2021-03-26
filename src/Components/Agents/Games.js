import React,{Component} from 'react';
import './Games.css';

import { ExternalLink } from 'react-external-link';

import imagebrimstone from './Images/Brimstone_artwork.webp';
import imagejett from './Images/Jett_artwork.webp';
import imageomen from './Images/Omen_artwork.webp';
import imagephoenix from './Images/Phoenix_artwork.webp';
import imagereyna from './Images/Reyna_artwork.webp';
import imageviper from './Images/Viper_artwork.webp';

import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, Button } from 'react-mdl';


class Games extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
            if(this.state.activeTab === 0){
                return(
                    <div>
                        <div className="projects-grid-1">
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{ color: '#fff', height: '176px', margin:'auto'}}><img src={imagejett} style={{maxWidth:'80%'}} alt="imagejett"/></CardTitle>
                                <CardText>GAME</CardText>
                                <Button colored>
                                    <ExternalLink href="https://not-akm.github.io/SphinX/Games/final_catchy_ver_%20webgl/index.html">
                                    <span>Play Now</span>
                                    </ExternalLink>
                                </Button>
                                
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', margin:'auto'}}><img src={imagephoenix} style={{maxWidth:'80%'}} alt="imagephoenix"/></CardTitle>
                                <CardText>GAME</CardText>
                                <Button colored>
                                    <ExternalLink href="https://not-akm.github.io/SphinX/Games/final_catchy_ver_%20webgl/index.html">
                                    <span>Play Now</span>
                                    </ExternalLink>
                                </Button>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', margin:'auto'}}><img src={imagereyna} style={{maxWidth:'80%'}} alt="imagereyna"/></CardTitle>
                                <CardText>GAME</CardText>
                                <Button colored>
                                    <ExternalLink href="https://not-akm.github.io/SphinX/Games/final_catchy_ver_%20webgl/index.html">
                                    <span>Play Now</span>
                                    </ExternalLink>
                                </Button>
                        </Card>
                        </div>
                    </div>
                )
            }
            else if(this.state.activeTab === 1){
                return(
                    <div>
                    <div className="projects-grid-1">
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{ color: '#fff', height: '176px', margin:'auto'}}><img src={imageviper} style={{maxWidth:'80%'}} alt="imageviper"/></CardTitle>
                                <CardText>GAME</CardText>
                                <Button colored>
                                    <ExternalLink href="https://not-akm.github.io/SphinX/Games/final_catchy_ver_%20webgl/index.html">
                                    <span>Play Now</span>
                                    </ExternalLink>
                                </Button>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{ color: '#fff', height: '176px', margin:'auto'}}><img src={imageomen} style={{maxWidth:'80%'}} alt="imageomen"/></CardTitle>
                                <CardText>GAME</CardText>
                                <Button colored>
                                    <ExternalLink href="https://not-akm.github.io/SphinX/Games/final_catchy_ver_%20webgl/index.html">
                                    <span>Play Now</span>
                                    </ExternalLink>
                                </Button>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{ color: '#fff', height: '176px', margin:'auto'}}><img src={imagebrimstone} style={{maxWidth:'80%'}} alt="imagebrimstone"/></CardTitle>
                                <CardText>GAME</CardText>
                                <Button colored>
                                    <ExternalLink href="https://not-akm.github.io/SphinX/Games/final_catchy_ver_%20webgl/index.html">
                                    <span>Play Now</span>
                                    </ExternalLink>
                                </Button>
                        </Card>
                        </div>
                    </div>
                )
            }      
    }

    render() { 
        return (
        <div className="category-tabs">
            <Tabs activeTab={ this.state.activeTab } onChange={(tabID) => this.setState({ activeTab: tabID })} ripple>
                <Tab>Single Player</Tab>
                <Tab>Multi Player</Tab>
            </Tabs>

            <section className="allagentsbg">
                    <Grid>
                        <Cell col={12}><div className="content">{this.toggleCategories()}</div></Cell>
                    </Grid>             
            </section>
        </div>
        );
    }
}

export default Games;
import React, {Component} from 'react';
import './App.css'
import MusicSong from './MusicSong/MusicSong';
import axios from 'axios';
import TitleBar from './TitleBar/TitleBar';
import PageFooter from './PageFooter/PageFooter';


class App extends Component {
    constructor (props){
        super(props);
        this.info = [
  
        ];
  
        this.state = {
            
            filter : {title: '', album: '', artist: ''},
            genre: '', releaseDate: ''
        };
    }

    componentDidMount(){
        this.getSongs()
    }
    
    async getSongs() {
        try{
          let response = await axios.get("http://localhost:3000/api/songs");
          // console.log(response.data)
          this.setState({
            info: response.data 
          })
        }
        catch (error) {
          console.log("API request error");
        }
    
      }
      
      



    render() { 
        return ( 
            <React.Fragment>
                <div className="my-component">
                <TitleBar/>
                <MusicSong/>
                <PageFooter/>
                </div>
            </React.Fragment>
         );
    }
}
 
export default App;
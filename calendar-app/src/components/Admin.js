import React, { component } from 'react'
import './Admin.css'
import axios from 'axios'


class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          image: '',
          discription: ''
        }
    console.log('in the constructor'+this.state)  
    };

    handleChange = ( { target } ) => {
        this.setState({
          [target.name]: target.value
        })
        console.log('handleChange'+this.state);
      }
    
    
    handleSubmit = event => {
        event.preventDefault();
        //const data = new FormData(event.target);
        axios
        .post('http://localhost:5000/api/calendars', {
            method: 'POST',
            mode: 'no-cors',
            data: this.state
            })
        .then(res => {
            console.log("Res ?", res);
        })
        event.preventDefault();

    }

    render(){
        return(
            <div>
                <header className='adminHeader'>

                    
                </header>
                <div className="formContainter">
                    <br/><br/><br/><br/>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="image">Image URL</label><br/>

                        <input onChange={this.handleChange} id="image" name="image" type="text" /><br/><br/>

                    
                        <label htmlFor="description">Description</label><br/>
                        <input onChange={this.handleChange} name="description" id="description" type="text" />
                        <br/>
                        <button>Save</button>
                    </form><br/><br/><br/><br/>
                </div>
                <footer>
                <br/><br/><br/><br/>
                  
                    <a href="https://www.wildcodeschool.com/fr-BE/campus/bruxelles" target="_blank">Developpers team</a>
                </footer>

            </div>
        )
    
    
};
}

export default Admin;
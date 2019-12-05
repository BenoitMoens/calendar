import React, { component } from 'react'
import './Admin.css'


class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          photo: '',
          discription: ''
        }
    console.log('in the constructor'+this.state)  
    };




    render(){
        return(
            <div>
                <header className='adminHeader'>
                    
                    
                </header>
                <div className="formContainter">
                    <br/>
                    <form>
                        <label>Image URL</label><br/>

                        <input type="url" /><br/><br/>

                        <label>Video URL</label><br/>
                        <input type="url" /><br/><br/>

                        <label>Description</label><br/>
                        <input type="text" />
                        <br/>
                        <button>Save</button>
                    </form><br/>
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
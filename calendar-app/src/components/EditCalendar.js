import React, { component } from 'react'
import './Admin.css'
import axios from 'axios'

class EditCalendar extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
  
        this.state = {
            calendar: []
        }

        console.log(this.state)
    }

    handleChange = ( { target } ) => {
        console.log(target.id)

        const newCalendar = this.state.calendar.map((hatch, index) => {
            console.log(hatch.nr, target.id)
            if(hatch.nr == target.id) {
                let newHatch = hatch;
                console.log('here new hatch ?')
                newHatch.text = target.value
                console.log('here new hatch ?', hatch)
                return  newHatch
            } else {
                return hatch
            }
        })

        this.setState({
           calendar: newCalendar
        })


    }

    componentDidMount () {
        this.setState({
            calendar: JSON.parse(localStorage.calendar)
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        localStorage.setItem("calendar", JSON.stringify(this.state.calendar));

 
    }

    render() {
        const { calendar } = this.state;
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
            
                        {calendar.map((hatch, i) => <>
                                <label htmlFor="">Image URL</label><br/>
                                <input onChange={this.handleChange} id={hatch.nr} name={hatch.id} type="text" value={hatch.text} /> 
                            </>
                        )}
                    
                
                <button>Save</button>
            </form>
        </div>
        )
}};

export default EditCalendar;
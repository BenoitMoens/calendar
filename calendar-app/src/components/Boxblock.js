import React  from 'react';


class Boxblock extends React.Component {
    constructor() {
      super();
      this.state = {
        showGift: false,
        days: 0
      };
    }
  
    componentDidMount = () => {
      const dat = new Date();
      
      if (dat.getMonth() + 1 === 12) {
        this.setState({ days: dat.getDate() });
      }
  
      //this.setState({ days: 24 });
    };
    handleChange = id => {
      this.setState({ showGift: id });
    };
}
    export default Boxblock;
    
import React, {Component} from 'react';
import {getOKR} from './okrService/index';
import DropDown from './components/DropDown/DropDown';
import './App.css';

class App extends Component {
  state = {
    okrs: null
  }

  componentDidMount = () => {
    getOKR().then((res) => {
      console.log(res.data);
      let finalObj = res.data.reduce((acc, ele) => {
        if(ele.parent_objective_id.length === 0) {
          if(!acc[ele.id]) {
            acc[ele.id] = {
              ownData: ele.title,
              children: [],
              opened: true
            };
          }
          else {
            acc[ele.id].ownData = ele.title;
          }
        }
        else {
          if(!acc[ele.parent_objective_id]) {
            acc[ele.parent_objective_id] = {
              ownData: null,
              children: [ele.title],
              opened: true
            };
          }
          else {
            acc[ele.parent_objective_id].children.push(ele.title);
          }
        }
      return acc;
    }, {});
    this.setState({
      okrs: finalObj
    });
  });
}

  render () {
    console.log(this.state);
    console.log(this.state.okrs);
    let dropdowns = null;
    if(this.state.okrs) {
      console.log(Object.keys(this.state.okrs));
      dropdowns = Object.keys(this.state.okrs).map((okr, index) => <DropDown 
      key={index} 
      title={this.state.okrs[okr].ownData}  
      opened = {this.state.okrs[okr].opened}
      elements={this.state.okrs[okr].children}/>);
    }
    return(
      <div className="App">
        OKR
        {dropdowns}
      </div>
    );
  }
}

export default App;

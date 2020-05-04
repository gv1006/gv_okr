import React, {Component} from 'react';
import DropDownArrow from '../../images/dropdown-arrow.png'
import './DropDown.css';

class DropDown extends Component {
    constructor(props){
      super(props)
      this.state = {
        opened: this.props.opened,
        title: this.props.title
      }
    }
    toggleList = () => {
        console.log('list toggled');
        this.setState({
            opened: !this.state.opened
        });
    
    }
    render(){
        console.log(this.state);
        const{elements} = this.props
        const{opened, title} = this.state
        if(!title){
            return null;
        }
        return(
          <div className="dd-wrapper">
              <div className="dd-header" onClick={() => this.toggleList()}>
              <div className="dd-header-title">{title}</div>
              <img className="dropdown-arrow" src={DropDownArrow} alt="arrow" onClick={this.toggleList}/>
          </div>
        {opened && <ul className="dd-list">
             {elements.map((item) => (
               <li className="dd-list-item" key={item} >{item}</li>
              ))}
            </ul>}
          </div>
        )
      }
}

export default DropDown;
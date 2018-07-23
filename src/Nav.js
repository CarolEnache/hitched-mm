import React, { Component } from 'react';
import DropDown from './component/DropDown';
import DummyData from './component/DummyData';
import './App.css';

const nav = DummyData;

class Nav extends Component {

  constructor(props){
    super(props);

    this.state = {
      navList: [],
    }
  }

  componentDidMount(){
    this.setState({
      navList: nav,
    })
  }

  render() {
    const navList = this.state.navList;
    return (
      <div className="Nav-bar">
        {navList.map((item) => (
          <div key={item.id}>
            <DropDown 
              title={item.title}
              list={item.list}
            />
            {
              item.key === 'test1'
                && <p>More</p> 
            }
          </div>
        ))}
      </div>
    );
  }
}

export default Nav;

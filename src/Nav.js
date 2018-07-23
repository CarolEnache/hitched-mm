import React, { Component } from 'react';
import DropDown from './component/DropDown';
import DummyData2 from './component/DummyData2';
import './App.css';

const nav = DummyData2;
class Nav extends Component {

  constructor(props){
    super(props);

    this.state = {
      navList: [],
      item: []
    }
  }

  componentDidMount(){
    const item = []
    nav.map(i => {
      item.push(i)
    })
    console.log(item)
    this.setState({
      navList: nav,
      item: item
    })
  }

  render() {
    const {navList, item} = this.state;
    return (
      <div className="Nav-bar">
        {item.map((i) => (
          <div key={i.id}>
            <DropDown 
              title={i.label}
              list={i.list}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Nav;

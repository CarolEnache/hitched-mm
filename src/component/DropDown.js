import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

class DropDown extends Component {

  constructor(props){
    super(props);

    this.state = {
      listOpen: false,
      headerTitle: this.props.title,
      list: this.props.list,
      id: this.props.id
    }
  }

  handleClickOutside() {
    this.setState({
      listOpen: false
    })
  }

  hoverOn = () => {
    this.setState({
      listOpen: true
    })
  }
  hoverOff = () => {
    this.setState(prevSate => ({
      listOpen: !prevSate.listOpen
    }))
  }

  render(){

    const {listOpen, headerTitle, list, id} = this.state;
    return[
      <div className='dd-wraper' key={id}>
        <a 
          href='#' 
          className='dd-header-title'
          onMouseEnter={this.hoverOn}
          onMouseLeave={this.hoverOff}
          >{headerTitle}</a>
        {listOpen
          ? <FontAwesome name='angle-up' size='2x' />
          : <FontAwesome name='angle-down' size='2x' />
        }
        {listOpen && <ul className='dd-list'>
          {list.map((item)=> (
            <li className='dd-list-item' key={item.id}>{item.title}</li>
           )
          )}
        </ul>}
      </div>
      
    ]
    
  }
 }

export default DropDown;
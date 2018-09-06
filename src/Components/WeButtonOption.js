import React, { Component } from 'react';
import {ButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu, Button} from 'reactstrap';

class WeButtonOption extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="dropdown-container">
      <Button className='btn HeaderThread__btn'>
         <i class="fas fa-arrow-left HeaderThread__arrow"></i>
       </Button>
        <ButtonDropdown className="button-group" direction="left" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle className="button-option" caret color="primary">
          ···
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu dropdown-menu-right">
            <DropdownItem> Crear grupo </DropdownItem>
            <DropdownItem> Cerrar sesión</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}

export default WeButtonOption;

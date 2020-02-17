import React, { Component } from 'react'
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

export default class DownloadButton extends Component {
    render() {
        return (
            <UncontrolledButtonDropdown group={false} className="d-inline-block">
              <DropdownToggle color="primary">
                Download&nbsp;<i className="fal fa-arrow-to-bottom"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem><a href="#">PDF</a></DropdownItem>
                <DropdownItem><a href="#">PPT</a></DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
        )
    }
}

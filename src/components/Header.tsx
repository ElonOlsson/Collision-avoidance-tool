import * as React from 'react';
import Logotype from './Logotype';
import TopMenu from './TopMenu';


export class Header extends React.Component {
  render() {
    return (
      <div>
        <Logotype />
        <TopMenu />
      </div>
    )
  }
}

export default Header

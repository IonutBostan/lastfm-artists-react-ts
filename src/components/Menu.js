import React from "react";
import { Link } from "../ui";

class Menu extends React.PureComponent {
  render() {
    const { data, active, onMenuClick } = this.props;
    if (!data || data.constructor !== Array) {
      return null;
    }

    const links = data.filter(country => country.id !== active).map(country => (
      <li key={country.id}>
        <Link onClick={() => onMenuClick(country.id)}>{country.name}</Link>
      </li>
    ));

    return (
      <div className="menu">
        <ul className="reset text-right">{links}</ul>
      </div>
    );
  }
}

export default Menu;

import * as React from "react";
import { Link } from "../ui";

interface ICountry {
  id: string;
  name: string;
}

interface IMenuProps {
  data: ICountry[];
  active: any;
  onMenuClick: (id: string) => void;
}

class Menu extends React.PureComponent<IMenuProps, {}> {
  public render() {
    const { data, active } = this.props;
    if (!data || data.constructor !== Array) {
      return null;
    }

    const links = data.filter(country => country.id !== active).map(country => (
      <li key={country.id}>
        <Link onClick={this.onMenuClick.bind(this, country.id)}>
          {country.name}
        </Link>
      </li>
    ));

    return (
      <div className="menu">
        <ul className="reset text-right">{links}</ul>
      </div>
    );
  }
  private onMenuClick(id: string): void {
    this.props.onMenuClick(id);
  }
}

export default Menu;

import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// tslint:disable-next-line:no-any
(enzyme as any).configure({ adapter: new Adapter() });

import { Link } from "react-router-dom";
import './MainNavigation.css'

const MainNavigation = (props) => {

  return (
    <div className="navigation">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/task1'>Task 1</Link></li>
        <li><Link to='/task2'>Task 2</Link></li>
        <li><Link to='/task3'>Task 3</Link></li>
      </ul>
    </div>
  );
};

export default MainNavigation;

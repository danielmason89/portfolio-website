import { func, string } from "prop-types";
// import { CgSun } from "react-icons/cg";
// import { HiMoon } from "react-icons/hi";
const ModeSwitch = ({ themeToggler }) => {
  return <button onClick={themeToggler}>Dark Mode</button>;
};

ModeSwitch.propTypes = {
  theme: string,
  toggleTheme: func,
};
export default ModeSwitch;

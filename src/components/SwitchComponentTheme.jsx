import '../css/App.css';
import ReactSwitch from "react-switch"


function SwitchComponentTheme(props) {
   
    const {theme,toggleTheme} = props

    return (
        
        <div className='switch'>
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} className="switch" onColor="#000000" handleDiameter={15} uncheckedIcon={false} checkedIcon={false} boxShadow="0px 1px 2px rgba(0, 0, 0, 0.6)" activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)" height={8} width={20} />
        </div>
    );
}

export default SwitchComponentTheme;
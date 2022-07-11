import '../css/App.css';
import ReactSwitch from "react-switch"


function SwitchComponentLeng(props) {
   
    const {leng,toggleLeng} = props
    
    return (
        
        <div className='switch'>
            <label> {leng === "ENG" ? "ENG" : "ESP"} </label>
            <ReactSwitch onChange={toggleLeng} checked={leng === "ESP"} className="switch" onColor="#000000" handleDiameter={15} uncheckedIcon={false} checkedIcon={false} boxShadow="0px 1px 2px rgba(0, 0, 0, 0.6)" activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)" height={8} width={20} />
        </div>
    );
}

export default SwitchComponentLeng;
import "./styles.css"
import {useState} from "react";

function Avtorization() {

    const [passInputChange, setPassInputChange] = useState('');
    const [passInputClasses, setPassInputClasses] = useState('pass-input-passive');
    const [toggleIcon, setToggleIcon] = useState('🕶');
    const [toggleIconClasses, setToggleIconClasses] = useState('toggle-icon-passive');
    const [ripple, setRipple] = useState('');
    //const [passLabel, setPassLabel] = useState('Strength');
    const [type, setType] = useState('password');


    const handlePassInput = (e) => {
        setPassInputChange(e.target.value);

    };

    const togglePassInput = (e) => {
        if (type === 'password') {
            setType('text');
            setToggleIcon('👓');
            setRipple('ripple-active');
        } else {
            setType('password');
            setToggleIcon('🕶');
            setRipple('ripple-passive');
        }
    };

    return (
        <form className='form'>
            <div className='input-container'>
                <div className="input-group">
                    <input
                        type="text"
                        className={passInputClasses}
                        placeholder='Введите логин'
                        //value={passInputChange}
                        //onChange={handlePassInput}
                    />
                </div>
            </div>
            <div className='input-container'>
                <div className='input-group'>
                    <input
                        type={type}
                        className={passInputClasses}
                        placeholder='Введите пароль'
                        value={passInputChange}
                        onChange={handlePassInput}
                    />
                    <span
                        onClick={togglePassInput}
                        className={`toggle ${toggleIconClasses}`}
                    >
                        {toggleIcon}
                    </span>
                </div>

            </div>
            <div className="btn">
                <button type="submit">
                    Войти
                </button>
            </div>
        </form>
    );
}
export default Avtorization;



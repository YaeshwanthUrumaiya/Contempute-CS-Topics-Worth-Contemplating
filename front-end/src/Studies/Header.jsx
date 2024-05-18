import './Header.css'

function toggle_light_mode(){
    document.getElementById("body").classList.toggle("light-mode");
}

function Header({setToSetting}){
    return(<header id="the-header">
        <h1>Title.</h1>
        <input type="text" placeholder='Search'/>
        <button onClick={toggle_light_mode}></button>
        <button onClick={setToSetting}></button>
    </header>)
}

export default Header
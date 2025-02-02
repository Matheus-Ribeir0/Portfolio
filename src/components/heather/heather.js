import "./heather.css"; 

const Hether = (props) => {
    return (
        <header>
            <img src="logo.png" alt="Logo" className="logo"/>
            <div id="language">
             <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
            </div>
           
        </header>
    );

}

export default Hether;
import "./mainPage.css"; 
const MainPage = (props) => {
    return (
        <div className="main_page">
            <div className="text-section">
                    
                    <h2>Hello World <span class="wave">👋</span></h2>

                    <h2>I am <span id="name">Matheus Ribeiro</span></h2>
                    <div className="text-type">
                        <h1>Fullstack Developer</h1>
                    </div>
                
                <button className="button">let's connect</button>
            </div>
            <div className="image-section">

            </div>
            <div className="nav_bar">

            </div>
        </div>
    );

}

export default MainPage;
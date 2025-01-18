import "./Home.css";

function Home() {
    return (
        <div id="home">
            <nav>
                <div>
                    <p>1 km/h</p>
                    <p>17:00</p>
                </div>
                <div className="input-field">
                    Your City Name
                </div>
                <div>
                    <div className="input-field">
                        1000 €
                    </div>
                    <div className="input-field">
                        0 Person
                    </div>
                </div>
            </nav>
            <div className="input-field">
                City Score
            </div>
            <div className="input-field">
                Start Simulation
            </div>
        </div>
    );
}

export default Home;

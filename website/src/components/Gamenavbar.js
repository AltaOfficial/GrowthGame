import Pageicon from "./Pageicon";

const Gamenavbar = () => {
    return ( 
        <div className="navbar flex justify-center">
            <div className="logo flex items-center">
                <div className="logo-image">
                    <Pageicon></Pageicon>
                </div>
                <a href="/" className="text-xl"><span className="font-bold">Growth</span> Game</a>
            </div>
        </div>
    );
}

export default Gamenavbar;
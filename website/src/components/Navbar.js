import logo from "../Logo/logo white transparent.png"

const Navbar = () => {
    return ( 
        <div className="navbar flex justify-center">
            <div className="logo flex items-center">
                <div className="logo-image">
                    <img className="logo w-16" src={logo} alt="logo" />
                </div>
                <a href="/" className="font-xl"><span className="font-bold">Growth</span> Game</a>
            </div>
        </div>
    );
}
 
export default Navbar;
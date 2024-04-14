import Pageicon from "./Pageicon";
import { Button, Link } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';

const Homenavbar = () => {
    const navigate = useNavigate();
    const handleClick = (event) => {
        if(event.target.className.includes("nav-play-now-cta")){    
            navigate("/game");
        }
    }

    return (         
    <div className="navbar grid grid-cols-3 items-center">
        <div className="logo flex items-center mx-auto">
            <Pageicon></Pageicon>
            <a href="/" className="text-xl"><span className="font-bold">Growth</span> Game</a>
        </div>
        <div className="links space-x-4 mx-auto" highContrast>
                <Link highContrast underline="none" href="/" className="about">About</Link>
                <Link highContrast underline="none" href="/" className="how-to-play">How To Play</Link>
        </div>
        <div className="play-now-cta font-Montserrat mx-auto">
            <Button onClick={(e) => {handleClick(e)}} highContrast radius='full'  className="nav-play-now-cta p-4 hover:cursor-pointer">Play Now</Button>
        </div>
    </div>
);
}
 
export default Homenavbar;
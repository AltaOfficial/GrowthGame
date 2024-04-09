import Pageicon from "./Pageicon";
import {Button, Link} from '@radix-ui/themes';

const Homenavbar = () => {
    return (         
    <div className="navbar flex justify-around items-center">
        <div className="logo flex items-center">
            <div className="logo-image">
                <Pageicon></Pageicon>
            </div>
            <a href="/" className="text-xl"><span className="font-bold">Growth</span> Game</a>
        </div>
        <div className="links space-x-4" highContrast>
                <Link highContrast underline="none" href="/" className="about">About</Link>
                <Link highContrast underline="none" href="/" className="how-to-play">How To Play</Link>
        </div>
        <div className="play-now-cta">
            <Link href='/game'><Button highContrast radius='full' variant='outline' className="nav-play-now-cta">Play G Now</Button></Link>
        </div>
    </div>
);
}
 
export default Homenavbar;
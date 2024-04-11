import Pageicon from "./Pageicon";
import { Button, Link } from '@radix-ui/themes';

const Homenavbar = () => {
    return (         
    <div className="navbar grid grid-cols-3 items-center">
        <div className="logo flex items-center mx-auto">
            <Pageicon></Pageicon>
            <a href="/" className="text-xl"><span className="font-bold">Growth</span> Game</a>
        </div>
        <div className="links space-x-4 mx-auto" highContrast>
                <Link highContrast underline="none" href="/" className="about hover:underline">About</Link>
                <Link highContrast underline="none" href="/" className="how-to-play">How To Play</Link>
        </div>
        <div className="play-now-cta font-Montserrat mx-auto">
            <Link href='/game'><Button highContrast radius='full'  className="nav-play-now-cta p-4">Play Now</Button></Link>
        </div>
    </div>
);
}
 
export default Homenavbar;
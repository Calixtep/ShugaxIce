import Events from "../Events";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Cater() {
    return (
        <div>
            <Navbar />
                <div className="bg-cover bg-[url('./src/assets/cater-background2.jpg')] p-32 ">
                    <h1 className="text-8xl underline underline-offset-[17px]">Let's Work <br/>Together</h1>
                </div>
            <Events />
            <Footer />
        </div>
    )}
import Navbar from "./navbar";
import LeftContent from "./leftcontent";
import RightContent from "./rightcontent";

function Section1() {
    return(
        <div>
            <Navbar />
            <div className="m-5 h-130 flex gap-5 bg-white">
                <LeftContent />
                <RightContent />
            </div>
        </div>
    )
}
export default Section1;
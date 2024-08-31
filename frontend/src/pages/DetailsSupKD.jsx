import Navbar from "../components/NavbarAB"
import ReviewInput from "../components/ReviewInput"
import ReviewSup from "../components/ReviewSupKD"
import Superviser from "./SuperviserKD"

const DetailsSupKD=()=>{
    return(
        <div>
            <Navbar/>
            <div style={{marginBottom:85}}><ReviewSup/></div>
            <div><ReviewInput/></div>
            
        </div>
    )
}
export default DetailsSupKD
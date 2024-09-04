import Navbar from "../components/NavbarAB"
import ReviewInput from "../components/ReviewInput"
import ReviewSup from "../components/ReviewSupKD"
import Superviser from "./SuperviserKD"

const DetailsSupKD=()=>{
    const { patient_id } = useParams();

   
    return(
        <div>
            <Navbar/>
            <div style={{marginBottom:85}}><ReviewSup 
            patient_id={patient_id}/></div>
            <div><ReviewInput /></div>
            
        </div>
    )
}
export default DetailsSupKD
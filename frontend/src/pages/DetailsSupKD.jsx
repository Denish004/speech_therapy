import Footer from "../components/FooterAB";
import Navbar from "../components/NavbarAB"
import ReviewInput from "../components/ReviewInput"
import ReviewSup from "../components/ReviewSupKD"
import Superviser from "./SuperviserKD"
import { useParams, useNavigate } from 'react-router-dom';
const DetailsSupKD=()=>{
    const { patient_id } = useParams();

   
    return(
        <div>
            <Navbar/>
            <div style={{display:"flex",justifyContent:"center"}}><div>
                <div style={{marginBottom:85}}><ReviewSup 
            patient_id={patient_id}/></div>
            <div><ReviewInput /></div>
            </div></div>
            <Footer/>
            
            
        </div>
    )
}
export default DetailsSupKD
import SuperviserCard from "../components/CardsSupKD"
import PCardSup from "../components/PCardSup"
import PendingCard from "../components/PendingCardKD"

const Superviser=()=>{
    return(
        <div style={{display:"flex"}}>
            <div style={{marginLeft:15}}><SuperviserCard/>
       <SuperviserCard/>
       <SuperviserCard/></div>
       <div style={{width:400,margin:30}}><PCardSup/>
       <PendingCard/></div>
       
       </div>
    )
} 
export default Superviser
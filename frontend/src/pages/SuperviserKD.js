import SuperviserCard from "../components/CardsSupKD"
import Navbar from "../components/NavbarAB"
import PCardSup from "../components/PCardSup"

import PendingCard from "../components/PendingCardKD"
import Card from "../components/ProfileSW"

const Superviser=()=>{
    return(
        <div>
            <Navbar/>
        <div style={{display:"flex"}}>
            <div style={{marginLeft:15}}><SuperviserCard/>
       <SuperviserCard/>
       <SuperviserCard/></div>
       <div style={{width:400,margin:30}}><PCardSup/>
       <PendingCard/></div>
       
       </div>
       </div>
    )
} 
export default Superviser
import { createScope,animate,utils } from "animejs"
const animateSS=()=>{
    const scope = createScope()
    return(
           <div className="NavlinksCon">
            <aside className="navStyle">Home</aside>
            <aside className="navStyle">Subjects</aside>
            <aside className="navStyle">Specialty</aside>
            <aside className="navStyle">Activitys</aside>
            <aside className="navStyle">Student Control</aside>            
        </div>
    )
}

export default animateSS
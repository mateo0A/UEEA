import { createScope,animate,utils } from "animejs"
import { useRef ,useEffect } from "react"

const Links=()=>{
    const root = useRef(null);
    const scope = useRef(null);
    useEffect(()=>{
        scope.current =createScope({root}).add(()=>{
            const $aside=root.current.querySelectorAll('aside')
            console.log($aside);
               animate($aside,{
                x:[{to:"-10%",ease:"inCirc",duration:1000}],
                delay:(_,i)=>i*50,
                loop:true,
                loopDelay:400            
            })
        })
    })
    return(
        <div className="NavlinksCon" ref={root}>
            <aside className="navStyle">Home</aside>
            <aside className="navStyle">Subjects</aside>
            <aside className="navStyle">Specialty</aside>
            <aside className="navStyle">Activitys</aside>
            <aside className="navStyle">Student Control</aside>            
        </div>
    )
}
export default Links;
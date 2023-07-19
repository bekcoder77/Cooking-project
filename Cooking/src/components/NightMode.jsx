import React from 'react'

function NightMode() {
  return (
    <div>
         <div className="nightMode">
   
   <div className="slider">
       <p onClick={handleClick} className="circle"></p>
       <p onClick={handleClicke} className="circle"></p>
       <p onClick={handleClicked} className="circle"></p>
       <p onClick={Click} className="circle"></p>
       <p onClick={Clicke} className="circle"></p>
    </div>

     <div>
       <input
         onClick={() => setmode(!mode)}
         type="checkbox"
         className="checkbox"
         id="checkbox"
       />
       <label htmlFor="checkbox" className="label">
         <div className="fa-sun">
           {" "}
           <BsFillSunFill />
         </div>
         <div className="fa-moon">
           {" "}
           <BsFillMoonStarsFill />
         </div>
         <div className="ball"></div>
       </label>
     </div>
     
   </div>
    </div>
  )
}

export default NightMode
import React from 'react'


export default function Header() {

    
//  <img src="../images/NZ Flag@2x.png" alt="" className='' />
//             <img src="../images/HOME.svg" alt="" />
//             <img src="../images/Ellipse 38.png" alt="" /> 

    return (
        <div className="headerElement">
            <div className="headerElement-left">
                 <img src="../images/Star Logo 07-2.png" alt="" className="starLogo" />
            </div>

            <div className="headerElement-middle">
                
                    <div>HOME</div>
                    <div>PROJECTS</div>
                    <div>TEACHERS</div>
                    
            </div>

            <div className="headerElement-right">
                         <div className="langSection">LANG
                              <img src="../images/NZFlag.png" alt="" />
                              <img src="../images/Maori Flag.png" alt="" />
                         </div>

                        <div className="profileHeaderSection">
                           <img src="../images/Ellipse 38.png" alt="" className="headerProfilePic" />
                           RAWHIRI FLETCHER
                        </div>
            </div>
            
            
        </div>
        
    )

}
import React from "react"

export default function StudProjLibMain() {
    return (
       <div className="splMain">
            <div className="splLeftBlock">
              
                <div className="splLeftBlock-subscription">
                        <div>SUBSCRIPTION</div>
                        <hr color="#707070" />                  
                        
                        <label> <input type="checkbox" />Free </label>
                        <br />
                        <label> <input type="checkbox" />Premium </label>
                </div>

                <div className="splLeftBlock-activity">
                        <div>ACTIVITY TYPE</div>
                        <hr color="#707070"/>
                        <label> <input type="checkbox" />Animation </label>
                        <br />
                        <label> <input type="checkbox" />Game </label>
                        <br />
                        <label> <input type="checkbox" />Chatbot </label>
                        <br />
                        <label> <input type="checkbox" />Augmented Reality </label>
                </div>


                <div className="splLeftBlock-year">
                        <div>YEAR LEVEL</div>
                        <hr color="#707070" />
                        <label> <input type="checkbox" />1 - 4 </label>
                        <br />
                        <label> <input type="checkbox" />5 - 6 </label>
                        <br />
                        <label> <input type="checkbox" />7 - 8 </label>
                        <br />
                        <label> <input type="checkbox" />9 - 13 </label>
                </div>

                <div className="splLeftBlock-subject">
                        <div>SUBJECT MATTER</div>
                        <hr color="#707070" />
                        <label> <input type="checkbox" />Computer Science</label>
                        <br />
                        <label> <input type="checkbox" />Maths </label>
                        <br />
                        <label> <input type="checkbox" />Science </label>
                        <br />
                        <label> <input type="checkbox" />Language </label>
                        <br />
                        <label> <input type="checkbox" />Art </label>
                        <br />
                        <label> <input type="checkbox" />Music </label>
                </div>

        </div>


        <div className="splRightBlock">

                <div className="splRightBlock-head"> PROJECTS</div>

                <div className="splRightBlock-head-descrip"> 
                Welcome to the project library. 
                You can use the filters on the right to help you search for specific projects. 
                </div>

                <div className="splRightBlock-navbar">
                        <div className="splRightBlock-progressButtons">
                                <button type="button">BEGINNER</button>
                                <button type="button">INTERMEDIATE</button>
                                <button type="button">ADVANCED</button>
        	        </div>
                                
                        <div className="splRightBlock-showMenu">
                                <label className="splRightBlock-label">SHOW</label>
                                <button type="button">25</button>
                                <button type="button">50</button>
                                <button type="button">100</button>
                        </div>

                </div>

                <div className="splRightBlock-container">

                                <div className="splRightBlock-topRow">
                                        
                                        <div className="topRow-left">
                                                <div className="topRow-leftTop">
                                                        <img src="../images/Project 01.png" alt="" />
                                                </div>
                                                <div className="topRow-leftMid">Introduction</div>  
                                                <div className="topRow-leftBottom">BEGINNER | Animation</div>            
                                        </div>
                                        
                                        <div className="topRow-middle">
                                                        <div className="topRow-middleTop">
                                                        <img src="../images/Project 02.png" alt="" />
                                                </div>
                                                <div className="topRow-middleMid">My Birthday</div>  
                                                <div className="topRow-middleBottom">BEGINNER | Animation</div>   
                                        </div>

                                        <div className="topRow-right">
                                                <div className="topRow-rightTop">
                                                        <img src="../images/Project 03.png" alt="" />
                                                </div>
                                                <div className="topRow-rightMid">10 Block Challenge</div>  
                                                <div className="topRow-rightBottom">BEGINNER | Animation</div> 
                                        </div>

                                </div>

                                <div className="splRightBlock-secondRow">

                                        <div className="secondRow-left">
                                                <div className="secondRow-leftTop">
                                                        <img src="../images/Project 04.png" alt="" />
                                                </div>
                                                <div className="secondRow-leftMid">Build a band</div>  
                                                <div className="secondRow-leftBottom">BEGINNER | Animation</div>            
                                        </div>

                                <div className="secondRow-middle">
                                        <div className="secondRow-middleTop">
                                                <img src="../images/Project 05.png" alt="" />
                                        </div>
                                        <div className="secondRow-middleMid">The bear and monkey</div>  
                                        <div className="secondRow-middleBottom">BEGINNER | Animation</div> 
                                </div>

                                <div className="secondRow-right">
                                        <div className="secondRow-rightTop">
                                                <img src="../images/Project 06.png" alt="" />
                                        </div>
                                        <div className="secondRow-rightMid">Debugging</div>  
                                        <div className="secondRow-rightBottom">BEGINNER | Animation</div> 
                                </div>


                                </div>

                                <div className="splRightBlock-thirdRow"></div>

                                <div className="splRightBlock-fourthRow"></div>

                                <div className="splRightBlock-fifthRow"></div>

                

                </div>




        </div>

       </div>
)
}
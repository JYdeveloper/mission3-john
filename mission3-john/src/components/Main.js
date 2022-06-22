import React from 'react'

export default function Main() {
    return (
        <div className="mainSection">
            
            <div className="leftBlock">
                <div className='leftBlock-inner'>
                    <img src="../images/Ellipse 38.png" alt="" />
                    <button onClick={""}>EDIT PROFILE</button>
                    <button onClick={""}>CHANGE PHOTO</button>
                </div>
            </div>

            <div className="rightBlock-container">

                <div className="rightBlock">
                                <div className="studentName"> Rawiri Fletcher </div>

                                <div className="rightBlock-Inner">
                                    <div className= "rightBlock-headings">
                                        <div>School</div>
                                        <br></br>
                                        <div>Teacher</div>
                                        <br></br>
                                        <div>Course</div>
                                        <br></br>
                                        <div>Date of Birth</div>
                                        <br></br>
                                        <div>Contact No</div>
                                        <br></br>
                                        <div>Email Address</div>
                                    </div>

                                    <div className="rightBlock-studentData">
                                        <div>Homai School</div>
                                        <br></br>
                                        <div>Jasmina Salvador</div>
                                        <br></br>
                                        <div>Beginner</div>
                                        <br></br>
                                        <div>25 June 2010</div>
                                        <br></br>
                                        <div>022 524 63 99</div>
                                        <br></br>
                                        <div>fletchy.r@gmail.com</div>
                                        <br></br>
                                    </div>
                                </div>

                                <div className="buttonLine-bottom">
                                <button onClick={""} className="projectsButton">BACK TO PROJECTS</button>
                                </div>
            
                </div>
            
            </div>

        </div>
    )
}

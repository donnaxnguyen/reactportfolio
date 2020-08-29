import React from "react";
import "./About.css";



function body(props) {
    return (
        
        <div className="aboutApp">

            <div className="container">
            <div className="card">
                    <div className="card-header">
                        <h3> About Me </h3>
            </div>
            <div className="card-body">
                        <blockquote className="blockquote mb-0">
          <div className="row">
<img src= {process.env.PUBLIC_URL + "/img/picture.png"} className="me" alt="me img" width ="300px"/>
                <p>Hello! Thank you for visiting my page! I am currently a student at UC Berkeley's Full Stack program.</p>
                <p>I'm also currently pursuing a Business Adminstration major with a focus in Accounting, and minoring in Computer Science.</p><p></p>
                <p>To learn about me, take a look at my <a href="https://docs.google.com/document/d/1EE_PgIor1UQMJNINNBw6mo37V6ru41FdIiEEOJXFGU4/edit?usp=sharing">Resume</a>!</p>
 </div>
   </blockquote>
   </div>
 </div>

 <div className="card">
                    <div className="card-header">
                        <h3> Portfolio </h3>
            </div>
            <div className="card-body">
                        <blockquote className="blockquote mb-0">
          <div className="row">
          <div className="col-md-4">
                        <div className="card card-body">
                        <img src= {process.env.PUBLIC_URL + "/img/burgers.png"} className="img" alt="img" height = "200px" width ="200px"/>
                            <h3>Eat A Burger</h3>
                            <p>Create and Eat a Burger!</p>
                            <a href="https://limitless-refuge-82836.herokuapp.com/">Deployed App</a> 
                            <a href="https://github.com/donnaxnguyen/burgerhomework">View Code</a>
                            <div className="card-action">                                                   
                            </div>                     
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="card card-body">
                        <img src= {process.env.PUBLIC_URL + "/img/notes.png"} className="img" alt="img" height = "200px" width ="200px"/>
                            <h3>Note Taker</h3>
                            <p>Create and Edit Notes!</p>
                            <a href="https://floating-springs-49667.herokuapp.com/">Deployed App</a> 
                            <a href="https://github.com/donnaxnguyen/notetaker">View Code</a>
                            <div className="card-action">                                                   
                            </div>                     
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-body">
                        <img src= {process.env.PUBLIC_URL + "/img/weather.png"} className="img" alt="img" height = "200px" width ="200px"/>
                            <h3>Weather Viewer</h3>
                            <p>View the Weather!</p>
                            <a href="https://donnaxnguyen.github.io/weather-dashboard-hw/">Deployed App</a> 
                            <a href="https://github.com/donnaxnguyen/weather-dashboard-hw">View Code</a>
                            <div className="card-action">                                                   
                            </div>                     
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-body">
                        <img src= {process.env.PUBLIC_URL + "/img/planner.png"} className="img" alt="img" height = "200px" width ="200px"/>
                            <h3>Daily Planner</h3>
                            <p>Write and Edit Errands!</p>
                            <a href="https://donnaxnguyen.github.io/planner-homework/">Deployed App</a> 
                            <a href="https://github.com/donnaxnguyen/planner-homework">View Code</a>
                            <div className="card-action">                                                   
                            </div>                     
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-body">
                        <img src= {process.env.PUBLIC_URL + "/img/quiz.png"} className="img" alt="img" height = "200px" width ="200px"/>
                            <h3>Cat Quiz</h3>
                            <p>A Quiz about Cats!</p>
                            <a href="https://donnaxnguyen.github.io/code-quiz/">Deployed App</a> 
                            <a href="https://github.com/donnaxnguyen/code-quiz">View Code</a>
                            <div className="card-action">                                                   
                            </div>                     
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-body">
                        <img src= {process.env.PUBLIC_URL + "/img/fitness.png"} className="img" alt="img" height = "200px" width ="200px"/>
                            <h3>Fitness Tracker</h3>
                            <p>Track Your Workouts!</p>
                            <a href="https://thawing-anchorage-09563.herokuapp.com/">Deployed App</a> 
                            <a href="https://github.com/donnaxnguyen/fitnesstracker">View Code</a>
                            <div className="card-action">                                                   
                            </div>                     
                        </div>
                    </div>

 </div>
   </blockquote>
   </div>
 </div>


            </div>

        </div>
            )
        }
export default body
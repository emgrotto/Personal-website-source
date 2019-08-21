import React from 'react';
import pdf from './files/EmmaGrotto_Resume.pdf'
import "./index.css";
import "./Resume.css";

export class Resume extends React.Component {
    render() {
        return (
            <div className="resbody">
                <div className="title">
                    {/*<img src={require("./img/initial.png")} alt="black banner logo" />*/}
                    <div className="circleLogo">
                        <div>EG</div>
                    </div>
                </div>
                <div className="contacts">
                    <div>
                        <p>Email: emgrotto@gmail.com</p>
                    </div>
                    <div>
                        <p href="https://github.com/emgrotto">Github: emgrotto</p>
                    </div>
                    <div>
                        <p>LinkedIn: Emma Grotto</p>
                    </div>

                </div>
                <div className="body">

                    <div className="sec">Education</div>
                    <div className="info">
                        <p><b>Mount Holyoke College</b>, South Hadley, MA </p>
                        <ul>
                            <li>BA in Computer Science and Physics ‘19</li>
                            <li>Magna Cum Laude, GPA = 3.916 </li>
                        </ul>
                        <br></br>
                        <p><b>Online Resources</b></p>
                        <ul>
                            <li>Udactiy - Intro to Machine Learning</li>
                            <li>Codecademy - reactJS part 1 and 2, HTML, JavaScript, SQL, CSS</li>
                            <li>DataCamp - Introduction to R, Introduction to the Tidyverse</li>
                        </ul>


                    </div>
                

                    <div className="sec">Skills</div>
                    <div className="info_skills">
                        <p><b>Languages:</b> Python, Java, C, C++, R, XML, HTML, JavaScript, CSS, LaTex, SQL</p>
                        <p><b>Tools:</b> Eclipse, Atom, Jupyter, RStudio, Visual Studio, Git</p>
                        <p><b>Technologies:​</b> MongoDB, Unity, Gazebo, DataGraph</p>
                        <p><b>Libraries:</b> NumPy, SymPy, matplotlib, reactJS, scikit-learn, ggplot, plotly, tidyverse, nltk, PIL, Java Swing</p>
                        <p><b>Laboratory:</b> Oscilloscope, Plasma Etch, Spin Coater, Evaporator, Analog and Digital electronics</p>
                    
                    </div>

                    <div className="sec">Projects</div>
                    <div className="info">
                        <p><b>Sudoku Solver</b></p>
                        <p className="dis">Developed a sudoku solver using constraint satisfaction with the forward checking and minimum remaining values heuristics.</p>
                        <br></br>
                        <p><b>Woosh</b></p>
                        <p className="dis">Developed a program that emulates the UNIX shell by using the C functions: fork, wait and exec. Woosh allows paths to be added and command arguments.</p>
                        <br></br>
                        <p><b>Memory Manager</b></p>
                        <p className="dis">Coded Memory Initialization, Allocation and Free functions using a heap-like structure for available blocks of memory in C. Headers, containing the size and next/magic number, tracked the free and allocated blocks.</p>
                    </div>

                    <div className="sec">Experience</div>
                    <div className="info">
                        <table>
                            <tbody>
                                <tr>
                                    <th className="dates">
                                        July 2019 – present
                                    </th>
                                    <th>
                                        <p className="jobTitle"><b>​Software Engineering Intern</b></p>
                                        <p className="dis">XVIVO Scientific Animation, July 2019 – present</p>
                                        <ul>
                                            <li>Developing an asset management system as a hybrid app using ReactJS, Electron and MongoDB</li>
                                        </ul>
                                    </th>
                                </tr>

                                <tr>
                                    <th className="dates">
                                        Jan. – May 2019
                                    </th>
                                    <th>
                                        <p className="jobTitle"><b>Giga Education Mentor</b></p>
                                        <p className="dis">Mount Holyoke College Computer Science Department</p>
                                        <ul>
                                            <li>Support CS students and facilitate an environment which enables success and learning</li>
                                            <li>Carry out code reviews with mentees to ensure concepts and code style is well understood</li>
                                        </ul>
                                    </th>
                                </tr>

                                <tr>
                                    <th className="dates">
                                        Sept. – Dec. 2017 <br></br> Sept. – Dec. 2018
                                    </th>
                                    <th>
                                        <p className="jobTitle"><b>Student Tutor</b></p>
                                        <p className="dis">Mount Holyoke College Physics Department</p>
                                        <ul>
                                            <li>Instructed students to investigate mathematical concepts and debug Python code</li>
                                            <li>Assisted and guided students with homework and lab problems</li>
                                        </ul>
                                    </th>
                                </tr>

                                <tr>
                                    <th className="dates">
                                        June. – Aug. 2018
                                    </th>
                                    <th>
                                        <p className="jobTitle"><b>Research Student</b></p>
                                        <p className="dis">Multi-Robotic Systems Lab, Mount Holyoke College</p>
                                        <ul>
                                            <li>Calibrated multiple cameras using the openCV interactive calibration tool</li>
                                            <li>Assisted in creating robot models using Gazebo for simulations</li>
                                            <li>Integrated camera calibration parameters into robot models</li>
                                        </ul>
                                    </th>
                                </tr>

                                <tr>
                                    <th className="dates">
                                        Sept. – Dec. 2016 <br></br> Jan. – May. 2018
                                    </th>
                                    <th>
                                        <p className="jobTitle"><b>Physics Grader</b></p>
                                        <p className="dis">Mount Holyoke College Physics Department</p>
                                        <ul>
                                            <li>Graded Force, Energy and Motion Homework; created formatted solution sets in textWorks</li>
                                            <li>Collaborated with faculty</li>
                                            <li>Graded Introduction to Quantum Mechanics homework</li>
                                        </ul>
                                    </th>
                                </tr>

                                <tr>
                                    <th className="dates">
                                        Aug. 2016 – Dec. 2017
                                    </th>
                                    <th>
                                        <p className="jobTitle"><b>Research Student</b></p>
                                        <p className="dis">The Arango Lab, Mount Holyoke College</p>
                                        <ul>
                                            <li>Assisted in developing and testing Quantum Dot Photovoltaic devices</li>
                                            <li>Analyzed data from previous experiments to make decisions for future experiments</li>
                                        </ul>
                                    </th>
                                </tr>

                                <tr>
                                    <th className="dates">
                                        Sept. 2016 - May 2017
                                    </th>
                                    <th>
                                        <p className="jobTitle"><b>Peer-Led Undergraduate Mentor</b></p>
                                        <p className="dis">Mount Holyoke College Physics Department</p>
                                        <ul>
                                            <li>Tutored Electromagnetism to a class of 20 students</li>
                                            <li>Created worksheets to help students solidify their understanding of core concepts</li>
                                            <li>Assisted students with homework problems</li>
                                        </ul>
                                    </th>
                                </tr>

                                <tr>
                                    <th className="dates">
                                        May. - Aug. 2016
                                    </th>
                                    <th>
                                        <p className="jobTitle"><b>Farm Worker</b></p>
                                        <p className="dis">Azienda Agricola Marchese Marino, Monte San Martino MC, Italy</p>
                                        <ul>
                                            <li>Consulted with customers in Italian and sold products at the local farmers market</li>
                                        </ul>
                                    </th>
                                </tr>

                                <tr>
                                    <th className="dates">
                                        Jan. - Aug. 2015
                                    </th>
                                    <th>
                                        <p className="jobTitle"><b>Research Assistant</b></p>
                                        <p className="dis">PhytoTrade, Harare, Zimbabwe</p>
                                        <ul>
                                            <li>Collected and compiled data for a survey on selected plants in Zimbabwe and Botswana</li>
                                            <li>Operated a Garmin GPS to record locations of plants in Zimbabwe</li>
                                            <li>Used Quantum Geographical Information System software (QGIS) to analyze data and formulate maps</li>
                                        </ul>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="sec">Awards</div>
                    <div className="info">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th className="dates">May 2019</th>
                                    <th>Member of Sigma Pi Sigma Physics Honors Society</th>
                                </tr>
                                <tr>
                                    <th className="dates">May 2019</th>
                                    <th>Rusk Prize for Distinction in Physics</th>
                                </tr>
                                <tr>
                                    <th className="dates">May 2018</th>
                                    <th>American Association of Teachers Outstanding Learning Assistant Award</th>
                                </tr>
                                <tr>
                                    <th className="dates">May 2016</th>
                                    <th>Bennett Prize for Excellence in Physics</th>
                                </tr>
                            </tbody>
                        </table>

                    </div>


                    <div className="sec">Competitions</div>
                    <div className="info">

                        <table>
                            <tbody>
                                <tr>
                                    <th className="dates">
                                        March 2019
                                    </th>
                                    <th>
                                        <p className="jobTitle"><b>Five College ASA DataFest</b></p>
                                        <p>University of Massachusetts Amherst</p>
                                        <br></br>
                                        <p className="dis">Used R in a group of 3 students to data wrangle and analyze a dataset. Visualizations and linear models were used to confirm patterns and trends found.</p>
                                        <p className="dis">Prize Winner: Top in Group</p>
                                    </th>
                                </tr>

                                <tr>
                                    <th className="dates">
                                        Nov. 2017
                                    </th>
                                    <th>
                                        <p className="jobTitle"><b>HackHolyoke</b></p>
                                        <p>Mount Holyoke College</p>
                                        <br></br>
                                        <p className="dis">Used Android Studio to develop an Adventure game about Women in Science. Designed images for the game and created the layout using XML with other team members.</p>
                                        <p className="dis">Prize Winner: Best Media Hack</p>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <a href={pdf} target="_blank"><div className="download">Download Resume</div></a>
            </div>
        )
    }

}
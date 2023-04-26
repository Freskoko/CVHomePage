import './App.css';
import jobData from "./jsondata/jobData.json"
import otherjobsData from "./jsondata/otherjobsData.json"
import educationData from "./jsondata/educationData.json"
import projectData from "./jsondata/projectData.json"
import skillsData from "./jsondata/skillsData.json"
import OtherskillsData from "./jsondata/OtherskillsData.json"

import Wave from "react-wavify";

function StartHeader(){
  return (
  <div className='StartHeaderTop'>

    <div >
      
      <h1 className="StartHeaderTop" > Henrik Brøgger</h1>
      <b>  Developer, Biologist, Boulderer </b>

    </div>
  
  </div>
  )
}

function TopRightImage() {
  return (
    <img className="Mediumimg" src={require('./MyLogo.png')} alt="Top Right Logo" />
  );
}

function TopLeftImage(){
  return (
    <img className="MediumimgLeft" src={require('./MySun.webp')} alt="Top Left Logo" />
  );
}


function InfoBarLinks(){
  return (
    <div className="InfoBarLinks">

      <div className="info-bar-item">
        <img src = "https://jfreyberg.github.io/feathericons/map-pin.svg"></img>
        <p>Bergen</p>
      </div>

      <div className="info-bar-item">
        <img src= "https://jfreyberg.github.io/feathericons/user.svg"></img>
        <p>21 Years</p>
      </div>

      <div className="info-bar-item">
        <img src="https://jfreyberg.github.io/feathericons/mail.svg"></img>
        <p>henrik@brogger.no</p>
      </div>

      <div className="info-bar-item">
        <img className = "Smallimg" src='https://icones.pro/wp-content/uploads/2021/06/symbole-github-noir.png'></img>
       
        <p>
          <a href="https://github.com/Freskoko">github</a>
        </p>

      </div>
    </div>

  )
}

function WhatdDoIdo() {
  return (
    <div className="WhatdDoIdo">
      <ul>
        <li className="list-item">Programmer with 2 years of experience in diverse projects and conditions </li>
        <li className="list-item">Teacher and Student at UiB, fullstack webdev, API-enthusiast, bot creation using selenium, LLM Prompting</li>
      </ul>
    </div>  
  );
}



function AllCVJobs({ jobData }) {
  return (
    <div className = "AllCVJobs">
      <ul className='AllCVJobsBigList'>
        {Object.keys(jobData).map((key) => (
          <li key={key}>
            <CVItemText data={jobData[key]} />
          </li>
        ))}
      </ul>
    </div>
  );
}


function CVItemText({ data }) {
  return (
    <div className="AlignRow">
      <div className="CVItemText">
        <p className="dataTitle">{data.title}</p>
        <p>{data.description}</p>
        <p className="dataTime">{data.time}</p>

        {data.thing1 && (
          <ul>
            <li>{data.thing1}</li>

            {data.thing2 && <li>{data.thing2}</li>}
          </ul>
        )}
      </div>

      <div className="CVItemImage">

      <a href={data.link} target="_blank"  rel="noopener noreferrer"><img src="https://jfreyberg.github.io/feathericons/link.svg" className='ImageLinkElement' /></a>

      </div>

    </div>
  );
}



function AllSkillLists({data}){
  return (
    <div className="all-skill-lists">
      {Object.keys(data).map((key) => (
        <FloatingList key={key} SkillsData={data[key]} />
      ))}
    </div>
  );
}

function FloatingList({ SkillsData }) {
  return (
    <div className="floating-list-container">
      <div className="floating-list-title">
        {SkillsData.title} {/* Display the title here */}
      </div>
      <div className="floating-list">
        {SkillsData.skillList.map((item, index) => (
          <div
            key={index}
            className="floating-item"
            style={{
              border: `1px solid ${SkillsData.color}`,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
      <div className="App">

        <div className="AppWrapper">

          <TopRightImage/>
          <TopLeftImage/>

          <StartHeader/>

          <InfoBarLinks/>

          <WhatdDoIdo/>

          <h2>Programming Work Experience</h2>

          <AllCVJobs jobData={jobData} />

          <h2>Skills</h2>

          <AllSkillLists data={skillsData}/>

          
          <div className="waveWrapper">
          <Wave
          className='appWave'
            fill="#38e3fa"
            paused={false}
            options={{
              height: 30,
              amplitude: 50,
              speed: 0.20,
              points: 3,
            }}
          />
        </div>

        </div>

        <div className="AppWrapper2">

          <h2>Projects</h2> 

          <AllCVJobs jobData={projectData} />

          <h2>Education</h2>

          <AllCVJobs jobData={educationData} />

          <h2>Other Skills</h2>

          <AllSkillLists data={OtherskillsData}/>

          <h2>Other work</h2>

          <AllCVJobs jobData={otherjobsData} />

          </div>

      </div>
  );
}

export default App;

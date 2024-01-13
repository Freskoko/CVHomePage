import './App.css';
import jobData from "./jsondata/jobData.json"
import otherjobsData from "./jsondata/otherjobsData.json"
import educationData from "./jsondata/educationData.json"
import projectData from "./jsondata/projectData.json"
import skillsData from "./jsondata/skillsData.json"
import OtherskillsData from "./jsondata/OtherskillsData.json"
import whitelinkLogo from "./whiteLinkLogo.png"
import blacklinkLogo from "./blackLinkLogo.svg"

import Wave from "react-wavify";

function StartHeader(){
  return (
  <div className='StartHeaderTop'>

    <div >
      
      <h1 className="StartHeaderTop" > Henrik Brøgger</h1>
      <b>  Developer, Biologist, Cyclist </b>

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
        <p>22 Years</p>
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

      <div className="info-bar-item">
        <img className = "Smallimg" src='https://cdn-icons-png.flaticon.com/512/61/61109.png'></img>
       
        <p>
          <a href="https://www.linkedin.com/in/henrik-br%C3%B8gger-811749180/">linkedin</a>
        </p>

      </div>



    </div>

  )
}

function WhatdDoIdo() {
  return (
    <div className="WhatdDoIdo">
      <ul>
        <li className="list-item">Programmer with 4 years of experience in diverse projects and conditions </li>
        <li className="list-item">Teacher and Student at UiB </li>
        <li className="list-item">Developer at Eviny Fornybar (formerly BKK) </li>
      </ul>
    </div>  
  );
}



function AllCVJobs({ jobData, color_class, img_col}) {
  return (
    <div className = "AllCVJobs">
      <ul className={color_class}>
        {Object.keys(jobData).map((key) => (
          <li key={key}>
            <CVItemText data={jobData[key]} imgtype={img_col}/>
          </li>
        ))}
      </ul>
    </div>
  );
}


function CVItemText({ data,imgtype }) {
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

      <a href={data.link} target="_blank"  rel="noopener noreferrer"><img src={imgtype} className='ImageLinkElement' /></a>

      </div>

    </div>
  );
}



function AllSkillLists({data, class_colour}){
  return (
    <div className="all-skill-lists">
      {Object.keys(data).map((key) => (
        <FloatingList key={key} SkillsData={data[key]} class_colour={class_colour}/>
      ))}
    </div>
  );
}

function FloatingList({ SkillsData, class_colour }) {
  return (
    <div className={`floating-list-container ${class_colour}`}> {/* Move the class_colour here */}
      <div className={`floating-list-title ${class_colour}`}>
        <p className={class_colour}>
          {SkillsData.title}
        </p>
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

        <div className="waveWrapper">
            <Wave
          className="appWaveBelow"
          fill=""
          paused={false}
          options={{
            height: 100,
            amplitude: 50,
            speed: 0.20,
            points: 3,
            }}
          />
        </div>

          <TopRightImage/>
          {/* <TopLeftImage/> */}

          <StartHeader/>

          <InfoBarLinks/>

          <WhatdDoIdo/>

          <h2>Programming Work Experience</h2>

          <AllCVJobs jobData={jobData} color_class="AllCVJobsBigList_Black" img_col={blacklinkLogo}/>

          <h2>Skills</h2>

          <AllSkillLists data={skillsData} color_class="AllCVJobsBigList_Black"/>

          
          <div className="waveWrapper">
          <Wave
          className='appWave'
            fill="#000000"
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

          <h2 style={{color:"#FFFFFF"}}> Education</h2>

          <AllCVJobs jobData={educationData} color_class="AllCVJobsBigList_White" img_col={whitelinkLogo}/>

          <h2 style={{color:"#FFFFFF"}}  >Projects</h2> 

          <AllCVJobs jobData={projectData} color_class="AllCVJobsBigList_White" img_col={whitelinkLogo}/>

          <h2 style={{color:"#FFFFFF"}} > Other Skills</h2>

          <AllSkillLists data={OtherskillsData} class_colour="white-text" img_col={whitelinkLogo}/>

          <h2  style={{color:"#FFFFFF"}}> Other work</h2>

          <AllCVJobs jobData={otherjobsData} color_class="AllCVJobsBigList_White" img_col={whitelinkLogo}/>

          <div className="waveWrapper">
            <Wave
          className="appWave"
          fill="#FFFFFF"
          paused={false}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.20,
            points: 3,
            }}
          />
        </div>

        </div>

      </div>
  );
}

export default App;

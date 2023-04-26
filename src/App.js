import logo from './logo.svg';
import './App.css';
import jobData from "./jsondata/jobData.json"
import otherjobsData from "./jsondata/otherjobsData.json"
import educationData from "./jsondata/educationData.json"
import projectData from "./jsondata/projectData.json"

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

function TopRightImage(){
  return(
    <img className = "Mediumimg" src="MyLogo.png"></img>
  )
}

function InfoBarLinks(){
  return (
    <div className="InfoBarLinks">

      <div>
        <img src = "https://jfreyberg.github.io/feathericons/map-pin.svg"></img>
        <p>Bergen</p>
      </div>

      <div>
        <img src= "https://jfreyberg.github.io/feathericons/user.svg"></img>
        <p>21 Years</p>
      </div>

      <div>
        <img src="https://jfreyberg.github.io/feathericons/mail.svg"></img>
        <p>henrik@brogger.no</p>
      </div>

      <div>
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

      <a href={data.link} target="_blank"><img src="https://jfreyberg.github.io/feathericons/link.svg" className='ImageLinkElement' /></a>

      </div>

    </div>
  );
}

function App() {
  return (
    <div className="AppWrapper">
      <div className="App">

          <TopRightImage/>

          <StartHeader/>

          <InfoBarLinks/>

          <WhatdDoIdo/>

          <h2>Programming Work Experience</h2>

          <AllCVJobs jobData={jobData} />

          <h2>Projects</h2> 

          <AllCVJobs jobData={projectData} />

          <h2>Education</h2>

          <AllCVJobs jobData={educationData} />


          <h2>Other work</h2>

          <AllCVJobs jobData={otherjobsData} />

        </div>
      </div>
  );
}

export default App;

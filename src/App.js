import logo from './logo.svg';
import './App.css';
import jobData from "./jobData.json"
import otherjobsData from "./otherjobsData.json"

function StartHeader(){
  return (
  <div>

    <div>
      <h1> Henrik Brøgger</h1>
      <b>  Developer, Biologist, Boulderer </b>
    </div>
  
  </div>
  )
}

function InfoBarLinks(){
  return (
    <div className="InfoBarLinks">

      <div>
        <img src = "https://jfreyberg.github.io/feathericons/map-pin.svg"></img>
        <p>Norway</p>
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
        <li className="list-item">Programmer with 4 years of experience in diverse projects and conditions </li>
        <li className="list-item">Teacher and Student at UiB, fullstack webdev, API dev, bot creation using selenium, LLM Prompting</li>
      </ul>
    </div>
  );
}


function CVItem(){

  return (
  <div className="CVItemClass">
    <div className='SmallCVLeft'>
      <p>left</p>
    </div>
    <div className='SmallCVRight'>
      <p>Flask</p>
      <p>React</p>
      <p>SQL</p>
    </div>

  </div>
  )
}

function AllCVJobs({ jobData }) {
  return (
    <div>
      <ul>
        {Object.keys(jobData).map((key) => (
          <li key={key}>
            <CVItemText data={jobData[key]} />
          </li>
        ))}
      </ul>
    </div>
  );
}


function CVItemText({ data }){
  return (
    <div className = "CVItemText">
      <p className = "dataTitle">{data.title}</p>
      <p>{data.description}</p>
      <p className="dataTime" > {data.time}</p>

      <ul>
        <li> {data.thing1} </li>
        <li> {data.thing2} </li>
      </ul>

    </div>
  )
}

function App() {
  return (
    <div className="App">

        <StartHeader/>

        <InfoBarLinks/>

        <WhatdDoIdo/>

        <h2>Programming Work Experience</h2>

        <AllCVJobs jobData={jobData} />

        {/* <h2>Projects</h2> */}

        {/* <AllCVJobs jobData={projectData} /> */}


        <h2>Other work</h2>

        <AllCVJobs jobData={otherjobsData} />

    </div>
  );
}

export default App;

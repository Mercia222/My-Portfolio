import headshot from '../assets/headshot2.jpg'

function About() {
    return (
     <div id="about">
  <h2>About</h2>
  <div className="about-container"> 
    <div className="bio"> 
  <h3>Who am I?</h3>
  <p>I am a Women Techsters Fellow (part of the Women Techsters Fellowship by Tech4dev - class of 2023), 
    I come from a non-technical 
    background and transitioned into technology in August 2022. </p>
    <p> I love the entire process of writing and deploying smart contracts as well as developing and creating apps for the Blockchain protocol architecture. My focus is primarily writing clean and efficient code. 
        </p>
        <p>Hardworking and passionate job/internship seeker with a constant willingness to learn, I am eager to secure an entry-level Blockchain or Solidity Developer position. I bring to the table a creative and technically savvy ability seasoned with high attention to detail and driven by the passion for building a better future.</p>
  </div>   
  <div className="profile-image">
    <img src={headshot} alt="" />
  </div>
  </div>
     </div>
    )
  }
  
  export default About

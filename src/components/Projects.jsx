import nft from '../assets/nft.jpg'
import piggybank from'../assets/piggybank.jpg'
import crowdfunding2 from '../assets/crowdfunding2.jpg'

function Projects() {
    return (
     <div id="projects">
        <h2>Projects</h2>
        <p>This is a glimpse of what I have been working on so far, please click on the provided links</p>
        <div className="box-container">
           <div className="box"> 
           <img src={nft} alt="Github NFT" /> 

<a target= "_blank" href="https://github.com/Mercia222/NFT-CREATION.git"> Project Link </a>
<h4>NFT CREATION </h4>
           </div>

           <div className="box">
           <img src={crowdfunding2} alt="" />

<a target= "_blank" href="https://github.com/Mercia222/CROWDFUNDING-CAMPAIGN-PROJECT"> Project Link </a>
<h4>CROWDFUNDING CAMPAIGN</h4>
           </div>
         <div className='box'>
   <img src={piggybank} alt="" />
<a target= "_blank" href="https://github.com/Mercia222/PIGGYBANK-SMART-CONTRACT.git"> Project Link</a>
<h4>PIGGYBANK SMART CONTRACT</h4>
        </div>

        <div className='box'>
        <img src={nft} alt="" /> 
<a target= "_blank"  href="https://github.com/Mercia222/WomenTechstersCapstone"> Project Link</a>
<h4>SKILLBRIDGE ERC-20 TOKEN</h4>


        </div>
   
      </div>
     </div>
    )
  }
  
  export default Projects
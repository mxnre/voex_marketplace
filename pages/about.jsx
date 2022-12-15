import { TeamItem } from "@voex";
import { BaseLayout } from "@ui";
import {
  bgBlue,
  bgGray,
  bgShape,
  person,
  founder,
  purpleBack2,
  purpleBack,
  baseDark,
  Jeff,
  ken,
  Alcides,
  Carlos,
} from "@assets";

const array = [0, 1, 2, 3];
const About = () => {
  return (
    <BaseLayout>
      <div  className="d-flex flex-column align-items-center header_about">
        <div   style={{...minHeight,maxWidth:'70em'}} className="d-flex justify-content-center py-5  col ">
        <div className="col-11">
        <div
            className="h1-title-without-mb text-white   "
           
          >
            <h1 className="title_detail_nft">The VoEx Mission</h1>

            <p style={{maxWidth:'70em'}} className="mb-3 col-12">
              VoEx is dedicated to improving the human condition through the
              promotion of individual liberty and free markets.
            </p>
            <p style={{maxWidth:'70em'}} className="mb-3 col-12">
              We’ve created an NFT marketplace that provides the tools for
              nonprofit institutions to build community, deepen relationships
              with their supporters, and monetize their intellectual property.
            </p>
          </div>
        </div>
        </div>
    

        <div />
      </div>



      <div  className="d-flex flex-column align-items-center bg-white">
        <div    style={{maxWidth:'70em'}}  className="d-flex justify-content-center py-5  col  ">
        <div className="col-11">
        <div
        style={{maxWidth:'90em'}}
            className="h1-title-without-mb text-white   "
           
          >
            <h2 className="text-dark title_detail_nft">A New NFT Use-case for Philanthropy</h2>

            <p style={{maxWidth:'70em'}} className="mb-3 col-12 text-dark">
            Collectors who own, admire, and share their NFT assets become
          stakeholders in the growth of an ecosystem that advances a common
          vision.
            </p>
            <br/>
            <p style={{maxWidth:'70em'}} className="mb-3 col-12 text-dark ">
            Through the use of smart contract utility features, organizations can incentivize community engagement that will reward both creators and participants.
             
              
              
            </p>

            <br/>
            <p style={{maxWidth:'70em'}} className="mb-3 col-12 text-dark ">
            Organizations can monetize intellectual assets such as: written works, still images, audio, and video.
             
              
              
            </p>

         
          </div>
        </div>
        </div>
    

        <div />
      </div>



    
      <div className="    d-flex justify-content-center align-items-center flex-column py-5 ">
      
          <h1 className="text-white  text-start mb-5 title_detail_nft "> Meet the team.</h1>

        <div className="mt-4 mb-4">
          
          <TeamItem
            name="JOSEPH DIFIGLIA"
            img={founder.src}
            positionInTheCompany="Founder"
            description={
              "Joe has dedicated the past decade of his career to helping students see the world through an economics lens. As a full-time NJCU faculty member and the Executive Director of the New Jersey Council for Economic Education, he oversees initiatives aimed at enhancing economic education for New Jersey’s students."
            }
            description2="Working in support of nonprofit organizations in the Liberty movement, he and his team have built a philanthropic apparatus to help these institutions monetize their assets and engage their community."
         
          />
        </div>

        <div className="mt-4 mb-4">
          <TeamItem
            name="JEFF GONZALEZ"
            img={Jeff.src}
            positionInTheCompany="Marketing & Business Development"
            description={
              "Jeff has dedicated his 20+ year career to business development and digital marketing strategy. From the very beginning Jeff has worked side-by-side with Founder, Joe DiFiglia to help map out the VoEx vision and continually improve the overall strategic planning. Jeff also leads the marketing and development team for VoEx."
            }
          />
        </div>

        <div className="mt-4 mb-4">
          <TeamItem
            name="KEN GLOVER"
            img={ken.src}
            positionInTheCompany="Marketing & Product Architecture"
            description={
              "With a background in digital product architecture, Ken provides VoEx with strategic planning, software development, application integration, and digital team management. Ken is actively researching and planning the next steps for VoEx’s continued expansion in Web3."
            }
          />
        </div>
        <div className="mt-4 mb-4">
          <TeamItem
            name="ALCIDES AGUASVIVAS"
            img={Alcides.src}
            positionInTheCompany="Project Strategy & Design"
            description={
              "Al is deeply passionate for all things NFT and Crypto. He leads our project strategies and has designed the VoEx marketplace among other NFT ventures. Al’s creative background and deep knowledge of NFTs provide VoEx with a strategic advantage both for the marketplace and for individual projects."
            }
          />
        </div>
        <div className="mt-4 mb-4">
          <TeamItem
            name="CARLOS AGUASVIVAS"
            img={Carlos.src}
            positionInTheCompany="Lead Developer"
            description={
              "Carlos is dedicated to web and software development. He has been working on Blockchain projects for several years, developing in Javascript, ReactJs, and Solidity. Carlos also acquired working knowledge of the Moralis platform, and Ganache, Truffle, and Remix to do testing on the Ethereum Virtual Machine (EVM). Carlos leads the development team in the creation of the VoEx marketplace."
            }
          />
        </div>
      </div>
    </BaseLayout>
  );
};

const style = {
  backgroundImage: `url(${bgShape.src})`,
  paddingTop: "18em",
};

const bgDark = {
  backgroundImage: `url(${baseDark.src})`,
};

const styleBlue = {
  backgroundImage: `url(${purpleBack.src})`,
};

const minHeight = {
  minHeight: "27em",
};

const imageClass = {
  position: "absolute",
  top: "33em",
};

const h1Class = {
  textAlign: "left",
  color: "#fff",
  width: "100%",
  marginLeft: "6em",
  marginTop: "2em",
};

export default About;

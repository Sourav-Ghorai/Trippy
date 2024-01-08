import "./DestinationStyle.css";

const DestinationData = (props)=>{
   return(
      <div className= {`first-des ${props.cName}`}>
         <div className="des-text">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
         </div>
         <div className="image">
            <img src={props.img1} alt="img"/>
            <img src={props.img2} alt="img"/>
         </div>
      </div>
   )
}

export default DestinationData;
import Mountain1 from "../assets/4.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";

const Destination = ()=>{
   return (
      <div className="destination">
         <div>
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
         </div>
         <DestinationData
            title="Taal Volcano, Batangas"
            text="One of the most iconic views in Luzon, Mt Taal boasts a
            volcano inside a lake inside an island. If you fancy a closer
            look, the hike up to the crater is a mere 45 minutes, and is easy
            enough for beginners. Guides will assist you most of   
            the way, and you'll see the peculiar environment found on
            an active volcano, including volcanic rocks and steam vents."
            img1={Mountain1}
            img2={Mountain2}
         />

         <DestinationData
            cName="second-des"
            title="Mt. Daguldul, Batangas"
            text="If you're looking for a hike that's a little more challenging
            but still good for a beginner mountaineer, check out Mt
            Daguldul in San Juan Batangas. You'll start your hike from
            the beach and pass through tropical forest, different rock
            formations, ond small streams. there's a small store
            halfway up the trail where you can take a break and drink
            bukO juice, and though the Summit itself may not have the
            best view, the breeze is fantastic. Once youve made it
            back down. head straight to the beach tor a refreshing
            well-deserved swim."
            img1={Mountain3}
            img2={Mountain4}
         />
      </div>
   )
}

export default Destination;
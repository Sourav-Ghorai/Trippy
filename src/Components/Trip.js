import TripData from "./TripData";
import "./TripStyle.css";
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"

function Trip(){
   return(
      <div className="trip">
         <h1>Recent Trips</h1>
         <p>You can discover unique destination using Google maps.</p>
         <div className="tripcard">
            <TripData
               img={Trip1}
               heading="Trip in Indonesia"
               text="Indonesia, officially the Republic of
               Indonesia, is a country in Southeast Asia
               and Oceania between the Indian and
               Pacific oceans. It consists of over 17,000
               islands, including Sumatra, Java, Sulawesi, and parts of Borneo ond Now Guinea."
            />
            <TripData
               img={Trip2}
               heading="Trip in Malaysia"
               text="Malaysia is a Southeast Asian country
               occupying parts Of the Malay Peninsula
               and the island ot Borneo. It's known for its
               beaches, rainforests and mix of Malay.
               Chinese Indian and European cultural
               influences."
            />
            <TripData
               img={Trip3}
               heading="Trip in France"
               text="France. in western Europe, encompasses
               medieval Cities, alpine villages and
               Mediterranean beaches. Paris, its capital, is
               tamed for its toshion houses, classical art
               museums including the Louvre and
               monuments like the Eiffel Tower."
            />
         </div>
      </div>
   )
}

export default Trip;
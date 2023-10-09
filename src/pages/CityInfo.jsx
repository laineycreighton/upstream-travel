//----- IMPORTS -----//

//CSS
import '../assets/css/CityInfo.css';

//Images
import map from '../assets/images/charlotte.jpeg';

//----- EXPORTS -----//
export default function CityInfo() {

    //Return
    return (
        <div className='city-info'>

            <div>
                {/* Restaurants */}
                <div>
                    Placeholder
                </div>

                {/* Things To Do */}
                <div>
                    Placeholder
                </div>
            </div>

            <div>
                {/* City Name */}
                <h2>Charlotte, NC</h2>

                {/* Map */}
                <div>{map}</div>
            </div>

        </div>
    )
}
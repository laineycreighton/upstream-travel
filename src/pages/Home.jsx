//----- IMPORTS -----//

//CSS
import '../assets/css/Home.css';

//Images
import arrow from '../assets/images/arrow-right.svg';

//Components
// import Photos from '../components/Photos';

//----- EXPORTS -----//
export default function Home() {

    //Return
    return (
        <div className='home'>

            <div>
                {/* Header */}
                <h1>Don't go with the flow.</h1>

                {/* City Search */}
                <form>
                    <input type="text" />
                    <button>Explore <img src={arrow} alt="arrow" /></button>
                </form>
            </div>

            <div>
                {/* Rotating Photos */}
                {/* <Photos /> */}
            </div>

        </div>
    )
}
//----- IMPORTS -----//

//CSS
import '../assets/css/About.css';

//Images
import arrow from '../assets/images/arrow-right.svg';

//Components
// import Photos from '../components/Photos';

//----- EXPORTS -----//
export default function About() {

    //Return
    return (
        <div className='home'>

            <div>
                {/* Header */}
                <h1>Don't go with the flow.</h1>

                {/* About */}
                <article>
                    Welcome to UpstreamTravel, your ultimate companion for exploring new destinations! Whether you're a foodie seeking culinary delights or an adventurer in search of hidden gems, UpstreamTravel is designed to make your journey unforgettable. Let us be your guide, helping you discover the best places to eat and the most exciting attractions to explore in every corner of the world.
                </article>
            </div>

            <div>
                {/* Rotating Photos */}
                {/* <Photos /> */}
            </div>

        </div>
    )
}
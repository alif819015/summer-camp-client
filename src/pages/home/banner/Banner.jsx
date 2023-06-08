import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ban1 from '../../../assets/banner/football.jpg';
import ban2 from '../../../assets/banner/basket.jpg';
import ban3 from '../../../assets/banner/crecate.jpg';

const Banner = () => {
    
    return (
        <Carousel>
                <div>
                    <img src={ban1} />
                </div>
                <div>
                    <img src={ban2} />
                </div>
                <div>
                    <img src={ban3} />
                </div>
            </Carousel>
    );
};

export default Banner;
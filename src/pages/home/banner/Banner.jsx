import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ban1 from '../../../assets/banner/football.jpg';
import ban2 from '../../../assets/banner/basket.jpg';
import ban3 from '../../../assets/banner/crecate.jpg';
import Cover from "../../../shared/cover/Cover";

const Banner = () => {
    
    return (
        <Carousel>
                <div>
                    <Cover img={ban1} title='sports' subTitle='jhgfddnm'></Cover>
                </div>
                <div>
                <Cover img={ban2} title='sports' subTitle='jhgfddnm'></Cover>
                </div>
                <div>
                <Cover img={ban3} title='sports' subTitle='jhgfddnm'></Cover>
                </div>
            </Carousel>
    );
};

export default Banner;
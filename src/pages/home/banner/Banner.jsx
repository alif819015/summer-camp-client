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
                    <Cover img={ban1} title='Foot Ball' subTitle="Football, also known as soccer in some countries, is a popular sport played worldwide. It is a team sport that involves two teams, each consisting of eleven players, competing against each other to score goals by kicking a ball into the opponent's net. Football is played on a rectangular field called a pitch, with the objective of outscoring the opposing team."></Cover>
                </div>
                <div>
                <Cover img={ban2} title='Basketball' subTitle="Basketball is a popular team sport played globally, known for its fast-paced and dynamic nature. It involves two teams, each comprising five players, competing against each other to score points by shooting a ball through the opponent's hoop. Here are some abstract concepts related to basketball"></Cover>
                </div>
                <div>
                <Cover img={ban3} title='Cricket' subTitle="Cricket is a popular sport played in many countries, known for its unique combination of skill, strategy, and team dynamics. It is played between two teams, each consisting of eleven players, and involves batting, bowling, and fielding. Here are some abstract concepts related to cricket"></Cover>
                </div>
            </Carousel>
    );
};

export default Banner;
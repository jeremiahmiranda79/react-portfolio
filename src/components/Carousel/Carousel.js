import Carousel from "react-bootstrap/Carousel"
import logo from '../../assets/img/logo.png'

import './style.css'

const carouselData = [
    {
        id: 1,
        name: 'NAME1',
        description: 'I am a natural born leader!',
        designation: 'Always finding ways to connect with people in the most positive of ways.',
        image: '{}',
        picture: <img src={logo} class="d-block w-25" alt="..."/>
    },
    {
        id: 2,
        name: 'NAME2',
        description: 'I enjoy helping others!',
        designation: 'Helping other not only helps them, but also help me more by solidifying my skills.',
        picture: <img src={logo} class="d-block w-25" alt="..."/>
    },
    {
        id: 3,
        name: 'NAME3',
        description: 'I am adtaptive!',
        designation: 'I work well with others in team or client relationships.',
        picture: <img src={logo} class="d-block w-25" alt="..."/>
    },
    {
        id: 4,
        name: 'NAME4',
        description: 'I love learning!',
        designation: 'Programming is a never ending learning path, and I enjoy the past, present, and futire of technology.',
        picture: <img src={logo} class="d-block w-25" alt="..."/>
    }
]

export default function AppCarousel() {
    return (
        <section id="carousel" className="carousel-block text-center">
                <div className="title-holder">
                    <h2>Specialties</h2>
                    <div className="subtitle">Skills</div>
                </div>

                <Carousel controls={false}>
                    {
                        carouselData.map(carousels => {
                            return (
                                <Carousel.Item key={carousels.id}>
                                    {carousels.picture}
                                    <blockquote>
                                        <p>
                                            {carousels.description}
                                        </p>

                                        <p>
                                            <span className="designation">{carousels.designation}</span>
                                        </p>
                                    </blockquote>
                                </Carousel.Item>  
                            )
                        })
                    }                        
                </Carousel>
        </section>
    )
};
import Carousel from "react-bootstrap/Carousel"

import './style.css'

const carouselData = [
    {
        id: 1,
        name: 'NAME1',
        description: 'I am a natural born leader!',
        designation: 'Always finding ways to connect with people in the most positive of ways.',
        image: '{}'
    },
    {
        id: 2,
        name: 'NAME2',
        description: 'I enjoy helping others!',
        designation: 'Helping other not only helps them, but also help me more by solidifying my skills.'
    },
    {
        id: 3,
        name: 'NAME3',
        description: 'I am adtaptive!',
        designation: 'I work well with others in team or client relationships.'
    },
    {
        id: 4,
        name: 'NAME4',
        description: 'I love learning!',
        designation: 'Programming is a never ending learning path, and I enjoy the past, present, and futire of technology.'
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
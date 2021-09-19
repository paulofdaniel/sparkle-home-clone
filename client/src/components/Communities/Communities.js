import {React, useState, useEffect} from 'react'
import './Communities.scss';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import * as api from '../../api/apiService'
import CommunityCard from '../CommunityCard/CommunityCard';

export default function Communities() {

    const CustomButtonGroupAsArrows = ({ next, previous, ...rest }) => {
        
        const { carouselState: { currentSlide, totalItems, slidesToShow } } = rest;
        return (
          <div className="community-card__arrows">
            <button className={`community-card__prev ${currentSlide === 0 ? 'disable' : ''}`} onClick={previous}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 20"><path fill="none" fillRule="evenodd" stroke="#FF8040" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" d="M10 2l-8 8 8 8"></path></svg>
            </button>
            <button className={`community-card__next ${currentSlide + slidesToShow === totalItems ? 'disable' : ''}`} onClick={next}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 20"><path fill="none" fillRule="evenodd" stroke="#FF8040" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" d="M2 2l8 8-8 8"></path></svg>
            </button>
          </div>
        );
    };

    const [usersList, setUsersList] = useState([]);

    const getUsers = async () =>{
        const users = await api.getUsers();
        setUsersList(users);
    }

    useEffect(() => {
        getUsers();
    },[])

    const responsive = {
        largeDesktop:{
            breakpoint: { max: 3000, min: 1200 },
            items: 4
        },
        desktop: {
          breakpoint: { max: 1199, min: 768 },
          items: 5
        },
        tablet: {
            breakpoint: { max: 767, min: 568 },
            items: 4
          },
        mobile: {
          breakpoint: { max: 567, min: 0 },
          items: 3
        }
    };

    return (
        <section className="communities">
            <div className="container-lg">
                <div className="row">
                    <div className="col-12">
                        <h2>Comunidades</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 position-relative">
                        <Carousel
                        arrows={false} 
                        renderButtonGroupOutside={true}
                        customButtonGroup={<CustomButtonGroupAsArrows />}
                        responsive={responsive}
                        renderArrowsWhenDisabled={true}
                        partialVisible={true}>
                            
                            {usersList.map(user => {
                                return <CommunityCard key={user.id} user={user}></CommunityCard>
                            })}

                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

import React from 'react';
import './NewPosts.scss';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


import PostCard from '../PostCard/PostCard';

import Dropdown from '../Dropdown/Dropdown'

export default function NewPosts() {
    return (
        <section className="new-posts">
            
            <div className="container-lg">
                <div className="row">
                    <div className="col-12">
                        <h2>Novas Publicações</h2>
                    </div>
                </div>
            </div>
            
            <div className="new-posts__wrapper">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12 new-posts__masonry">
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{540: 2, 768: 3, 992: 3, 1200: 4}}
                        >
                            <Masonry>
                                <PostCard></PostCard>
                                <PostCard></PostCard>
                                <PostCard></PostCard>
                                <PostCard></PostCard>
                                <PostCard></PostCard>
                                <PostCard></PostCard>
                                <PostCard></PostCard>
                                <PostCard></PostCard>
                                <PostCard></PostCard>
                                <PostCard></PostCard>
                                <PostCard></PostCard>
                                <PostCard></PostCard>
                            </Masonry>
                            
                        </ResponsiveMasonry>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

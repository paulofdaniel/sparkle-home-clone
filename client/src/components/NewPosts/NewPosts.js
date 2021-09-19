import {React, useState, useEffect} from 'react'
import './NewPosts.scss';

import * as api from '../../api/apiService'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import PostCard from '../PostCard/PostCard';


export default function NewPosts() {

    const [postsList, setPostsList] = useState([]);

    const getPosts = async () =>{
        const posts = await api.getAllPosts();
        setPostsList(posts);
    }

    useEffect(() => {
        getPosts();
    },[])


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
                                {postsList.map(post => {
                                    return <PostCard key={post.id} post={post}></PostCard>
                                })}                                
                            </Masonry>
                            
                        </ResponsiveMasonry>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

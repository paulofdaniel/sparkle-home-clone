import {React, useState, useEffect} from 'react'
import './CommunityCard.scss';

import * as api from '../../api/apiService'

export default function CommunityCard(props) {

    const {id, name, user, image, newPosts} = props.user;

    const [lastPosts, setLastPosts] = useState([]);

    const getLastPosts = async (userId) =>{
        const posts = await api.getLastPosts(userId);
        var arrayLastPosts = posts.slice(0,3);
        setLastPosts(arrayLastPosts);
    }

    useEffect(() => {
        getLastPosts(id);
    },[id])

    return (
        <div className="community-card">
            <div className="community-card__content">
                <div className="community-card__last-posts">
                    {lastPosts.map(post => {
                        return (
                            <div key={post.id}>
                                <img loading="lazy" alt={post.description} src={post.image}/>
                            </div>
                        )
                    })}
                </div>
                <div className="community-card__info">
                    <img loading="lazy" alt={name} src={image}></img>
                    <span className="community-card__name">{name}</span>
                    <span className="community-card__description">comunidade pública de @{user}</span>
                    <span className="community-card__new-publications"><strong>{newPosts}</strong></span>
                    <span className="community-card__description">novas publicações</span>
                </div>
            </div>
        </div>
    )
}

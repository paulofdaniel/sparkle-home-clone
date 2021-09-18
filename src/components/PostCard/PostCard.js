import {React, useState, useEffect} from 'react'
import './PostCard.scss';

const postData = {
    posts:[
        {
            user: "jovemnerd",
            userPic: "https://placeimg.com/50/50/nature",
            postImage: "https://placeimg.com/800/450/nature",
            text: "Mais que investir, nós vamos acreditar na ideia de startups que estão revolucionando o universo do empreendedorismo, da tecnologia e da educação. Estamos falando do #HotmartChallenge! E todo mundo está convidado para aprender e acompanhar essa jornada em 8 episódios, a par..."
        },
        {
            user: "paulofdaniel",
            userPic: "https://placeimg.com/50/50/animals",
            postImage: "https://placeimg.com/500/300/nature",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            user: "didibraguinha",
            userPic: "https://placeimg.com/50/50/architect",
            postImage: "https://placeimg.com/400/400/animals",
            text: "Nenhuma descrição interessante"
        },
    ]
}

export default function PostCard() {

    const [selectedPost, setSelectedPost] = useState(0);

    
    useEffect(() => {
        setSelectedPost(postData.posts[Math.floor(Math.random() * (3 - 0) + 0)]);
    }, [])

    return (

        
        <div className="post-card">
            <a href="#" class="post-card__image">

                <img src={selectedPost.postImage}/>

                <div className="post-card__details">
                    <div className="post-card__user-photo">
                        <img src={selectedPost.userPic}/>
                    </div>
                    <a href="#" className="post-card__user-name">
                        @{selectedPost.user}
                    </a>
                    <div className="post-card__comments">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#FFFFFF" fill-rule="evenodd" clip-rule="evenodd" d="M8.39059 23C8.49374 23 8.60116 22.97 8.69566 22.8969L14.0625 18.875H20.25C21.7668 18.875 23 17.6418 23 16.125V3.75001C23 2.23321 21.7668 1 20.25 1H3.74996C2.23317 1 0.999954 2.23321 0.999954 3.75001V16.125C0.999954 17.6418 2.23317 18.875 3.74996 18.875H7.87497V22.4844C7.87497 22.7895 8.12418 23 8.39059 23ZM9.93748 19.3906V16.8125H3.74997C3.37185 16.8125 3.06247 16.5031 3.06247 16.125V3.74997C3.06247 3.37185 3.37185 3.06247 3.74997 3.06247H20.25C20.6281 3.06247 20.9375 3.37185 20.9375 3.74997V16.125C20.9375 16.5031 20.6281 16.8125 20.25 16.8125H13.375L12.825 17.225L9.93748 19.3906Z"></path></svg>
                        <span>10</span>
                    </div>
                    <div className="post-card__extra-info">
                        1:00
                    </div>
                </div>
            </a>
            <a className="post-card__text" href="#">
                {selectedPost.text}
            </a>
            <a className="post-card__user-link" href="#">
                em Canal do Paulo
            </a>
        </div>
        
    )
}

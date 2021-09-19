import {React, useState, useEffect} from 'react'
import './PostCard.scss';

export default function PostCard(props) {

    const {user, image, description, video} = props.post;

    return (
        <div className="post-card">
            <a href="http://localhost:3000" className="post-card__image">
                <img loading="lazy" alt={description} src={image}/>

                <div className="post-card__details">
                    <div className="post-card__user-photo">
                        <img loading="lazy" alt={user.name} src={user.image}/>
                        <div class="post-card__verified">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" preserveAspectRatio="xMinYMin meet"><g fill="none" fillRule="evenodd"><path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"></path><path fill="#2D9DE7" d="M16 26.24c-1.706 0-2.07 2.108-3.412 1.71-1.341-.397-.519-2.37-1.954-3.3-1.435-.932-2.87.643-3.786-.423-.916-1.067.833-2.277.124-3.843-.708-1.566-2.76-1.025-2.959-2.422-.199-1.397 1.92-1.46 2.163-3.165.243-1.704-1.773-2.368-1.192-3.652.581-1.283 2.398-.18 3.515-1.482 1.118-1.301-.222-2.96.954-3.723 1.176-.763 2.114 1.157 3.75.671C14.842 6.126 14.603 4 16 4c1.398 0 1.16 2.126 2.796 2.611 1.637.486 2.575-1.434 3.751-.67 1.176.762-.164 2.42.954 3.722 1.117 1.301 2.934.199 3.515 1.482.58 1.284-1.435 1.948-1.192 3.652.242 1.704 2.362 1.768 2.163 3.165-.2 1.397-2.25.856-2.96 2.422-.708 1.566 1.04 2.776.125 3.843-.915 1.066-2.351-.509-3.786.422s-.613 2.904-1.954 3.301c-1.342.398-1.706-1.71-3.412-1.71z"></path><path fill="#FFF" d="M20.638 12.21c-.469-.34-1.143-.258-1.503.184l-.547.669-.841 1.028-3.265 3.991-1.577-1.83a1.12 1.12 0 0 0-1.507-.15.965.965 0 0 0-.16 1.416l2.432 2.824c.204.236.507.373.83.374h.017a1.09 1.09 0 0 0 .836-.394l3.669-4.485.948-1.158.864-1.059a.966.966 0 0 0-.196-1.41"></path></g></svg>
                        </div>
                    </div>
                    <span href="http://localhost:3000" className="post-card__user-name">
                        @{user.user}
                    </span>
                    <div className="post-card__comments">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#FFFFFF" fillRule="evenodd" clipRule="evenodd" d="M8.39059 23C8.49374 23 8.60116 22.97 8.69566 22.8969L14.0625 18.875H20.25C21.7668 18.875 23 17.6418 23 16.125V3.75001C23 2.23321 21.7668 1 20.25 1H3.74996C2.23317 1 0.999954 2.23321 0.999954 3.75001V16.125C0.999954 17.6418 2.23317 18.875 3.74996 18.875H7.87497V22.4844C7.87497 22.7895 8.12418 23 8.39059 23ZM9.93748 19.3906V16.8125H3.74997C3.37185 16.8125 3.06247 16.5031 3.06247 16.125V3.74997C3.06247 3.37185 3.37185 3.06247 3.74997 3.06247H20.25C20.6281 3.06247 20.9375 3.37185 20.9375 3.74997V16.125C20.9375 16.5031 20.6281 16.8125 20.25 16.8125H13.375L12.825 17.225L9.93748 19.3906Z"></path></svg>
                        <span>10</span>
                    </div>

                    {video && 
                        <div className="post-card__extra-info">
                            1:00
                        </div>
                    }
                    
                </div>
            </a>
            <a className="post-card__text" href="http://localhost:3000">
                {description}
            </a>
            <a className="post-card__user-link" href="http://localhost:3000">
                em {user.name}
            </a>
        </div>
    )
}

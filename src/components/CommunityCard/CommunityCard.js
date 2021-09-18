import React from 'react'
import './CommunityCard.scss';

export default function CommunityCard() {
    return (
        <div className="community-card">
            <div className="community-card__content">
                <div className="community-card__last-posts">
                    <img alt="" src="https://placeimg.com/80/80/animals"/>
                    <img alt="" src="https://placeimg.com/80/80/nature"/>
                    <img alt="" src="https://placeimg.com/80/80/people"/>
                </div>
                <div className="community-card__info">
                    <img alt="" src="https://placeimg.com/80/80/tech"></img>
                    <span className="community-card__name">Comunidade Hotmart</span>
                    <span className="community-card__description">comunidade pública de @Hotmart</span>
                    <span className="community-card__new-publications"><strong>6</strong></span>
                    <span className="community-card__description">novas publicações</span>
                </div>
            </div>
        </div>
    )
}

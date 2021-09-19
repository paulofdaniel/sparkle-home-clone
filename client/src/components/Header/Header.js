import React from 'react'
import logo from '../../images/logo-h.svg'
import './Header.scss';

import Dropdown from '../Dropdown/Dropdown'

export default function Header() {

    return (
        <header className="header">
            <div className="container-lg">
                <div className="row">
                    <nav className="col-12 header-nav">
                        <a href="http://localhost:3000">
                            <h1><img className="header-nav__logo" src={logo} alt="Hotmart Sparkle"/></h1>
                        </a>
                        <ul className="header-nav__live-button">
                            <li>
                                <a href="http://localhost:3000">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" fillRule="evenodd" d="M19.059 18.998c.141 0 .332-.083.426-.186C21.11 17.07 22 14.85 22 12.5c0-2.35-.889-4.57-2.515-6.314C19.39 6.083 19.2 6 19.059 6c-.126 0-.301.068-.392.153l-.776.74c-.208.198-.232.52-.038.73 1.063 1.147 1.925 3.332 1.925 4.877s-.862 3.73-1.925 4.876c-.194.21-.17.533.038.731l.776.739c.09.084.266.152.392.152zM4.94 19c.126 0 .301-.068.392-.153l.776-.738c.208-.198.232-.52.038-.73-1.063-1.145-1.925-3.326-1.925-4.869v-.018c0-1.543.862-3.724 1.925-4.868.194-.21.17-.533-.038-.731l-.776-.739c-.09-.084-.266-.152-.392-.152-.141 0-.332.083-.426.186C2.89 7.93 2 10.15 2 12.5c0 2.35.889 4.57 2.515 6.314.094.103.285.186.426.186zM7.7 16.374c.126 0 .304-.07.395-.155l.79-.752c.09-.084.164-.25.164-.371 0-.098-.051-.24-.113-.317-.455-.551-.824-1.572-.824-2.279 0-.707.37-1.728.824-2.279.062-.077.112-.219.112-.317 0-.12-.073-.287-.163-.37l-.79-.753c-.091-.085-.269-.155-.395-.155-.148 0-.344.09-.438.2-.758.88-1.373 2.525-1.373 3.674s.615 2.795 1.373 3.674c.094.11.29.2.438.2zm8.601 0c.148 0 .344-.089.438-.199.758-.88 1.373-2.525 1.373-3.674s-.615-2.795-1.373-3.674c-.094-.11-.29-.2-.438-.2-.127 0-.304.07-.395.155l-.79.753c-.09.083-.164.25-.164.37 0 .098.051.24.113.317.455.551.824 1.572.824 2.279 0 .707-.37 1.728-.824 2.279-.062.077-.113.219-.113.317 0 .12.074.287.164.37l.79.753c.091.085.268.155.395.155zM12 14.397c1.073 0 1.944-.85 1.944-1.896 0-1.046-.87-1.896-1.944-1.896-1.073 0-1.944.85-1.944 1.896 0 1.046.87 1.896 1.944 1.896z"></path></svg>
                                    <span>Sparkle Live</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="header-nav__buttons">
                            <li className="order-3 order-md-1">
                                <a href="http://localhost:3000" className="header-nav__publish-button">
                                    <span>+</span>
                                </a>
                            </li>
                            <li className="order-1 order-md-2">
                                <a href="http://localhost:3000" className="header-nav__generic-button header-nav__generic-button--active">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none"><rect fill="white" fillOpacity="0.01"></rect><path d="M4 22.4595V13.4628C4 12.8222 4.25456 12.2079 4.70776 11.7548L11.5869 4.87835C12.7585 3.70722 14.6581 3.70722 15.8297 4.87835L22.7089 11.7548C23.1621 12.2078 23.4167 12.8222 23.4167 13.4628V22.4595C23.4167 23.7934 22.3349 24.875 21 24.875H6.41667C5.08179 24.875 4 23.7934 4 22.4595Z"></path></svg>
                                </a>
                            </li>
                            <li className="order-2 order-md-3">
                                <a href="http://localhost:3000" className="header-nav__generic-button">
                                    <svg viewBox="0 0 28 28" fill="none"><rect fill="white" fillOpacity="0.01"></rect><circle cx="13.2709" cy="13.2709" r="8.97917" stroke="#353A40"></circle><path d="M19.8333 19.8333L24.9374 24.9374" stroke="#353A40" strokeLinecap="round"></path></svg>
                                </a>
                            </li>
                            <li className="order-4 order-md-4">
                                <Dropdown>
                                    <Dropdown.Button stylename="header-nav__generic-button">
                                        <svg viewBox="0 0 28 28" fill="none"><rect fill="white" fillOpacity="0.01"></rect><path d="M11.0857 21.5833C11.2801 22.361 11.669 24.4999 14.0024 24.4999C16.3357 24.4999 16.919 21.5833 16.919 21.5833" stroke="#353A40" strokeLinecap="round"></path><path d="M6.62691 10.9667C6.62691 7.14372 9.90265 4 14 4C18.0973 4 21.3731 7.14372 21.3731 10.9667V17.1889C21.3731 18.1407 21.8458 19.0275 22.633 19.5874L23.6828 20.3341C23.9922 20.5542 24.0554 20.874 23.9584 21.15C23.8601 21.4296 23.5936 21.6667 23.1853 21.6667H4.81473C4.40636 21.6667 4.13987 21.4296 4.04159 21.15C3.9446 20.874 4.00782 20.5542 4.31723 20.3341L5.36697 19.5874C6.15418 19.0275 6.62691 18.1407 6.62691 17.1889V10.9667Z" stroke="#353A40"></path></svg>
                                    </Dropdown.Button>
                                    <Dropdown.Body>
                                        <div className="notifications-dropdown-content">
                                            <span>
                                                Explore um novo jeito de ver só o que você mais curte!
                                            </span>
                                            <span>
                                                Baixe nosso App
                                            </span>
                                            <ul>
                                                <li>
                                                    <a href="http://localhost:3000">
                                                        <span>Baixar para iOS</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19"><path fill="#FF8040" fillRule="nonzero" d="M13.377 10.04c0 .081-.149 2.596 2.623 3.899-.519 1.56-2.295 5.03-4.361 5.06-1.195 0-1.896-.76-3.248-.76-1.394 0-2.15.735-3.222.76-2.049.064-4.013-3.754-4.557-5.31C.204 12.503 0 11.354 0 10.243c0-3.762 2.52-5.612 4.893-5.65 1.147 0 2.61.836 3.247.836.604 0 2.253-.997 3.762-.879 1.594.124 2.802.751 3.6 1.892-1.428.866-2.133 2.04-2.125 3.597zm-2.406-6.965c-.833.972-1.845 1.54-2.954 1.455-.094-1.17.344-2.21 1.088-3.05C9.781.696 10.967.06 11.991 0c.035.45.14 1.701-1.02 3.075z"></path></svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://localhost:3000">
                                                        <span>Baixar para Android</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19"><path fill="#FF8040" fillRule="nonzero" d="M2.4 7.322v4.913c0 .653-.504 1.175-1.146 1.175C.617 13.41 0 12.884 0 12.235V7.322c0-.641.617-1.167 1.254-1.167.63 0 1.146.526 1.146 1.167zm.45 6.66v-7.61h10.304v7.61c0 .696-.55 1.256-1.225 1.256h-.842v2.593c0 1.56-2.312 1.557-2.312 0v-2.593h-1.55v2.593c0 1.552-2.3 1.565-2.3 0l-.012-2.593h-.83c-.683 0-1.233-.56-1.233-1.255zM13.183 5.96H2.804c0-1.816 1.067-3.394 2.65-4.218L4.658.245c-.116-.208.18-.34.28-.161l.808 1.51a5.537 5.537 0 0 1 4.512 0l.805-1.506c.104-.183.395-.047.279.161l-.796 1.493c1.57.824 2.637 2.402 2.637 4.218zM6.071 3.605a.442.442 0 0 0-.438-.445.436.436 0 0 0-.425.445.44.44 0 0 0 .425.446.442.442 0 0 0 .438-.446zm4.725 0a.44.44 0 0 0-.425-.445.441.441 0 0 0-.438.445c0 .242.192.446.438.446a.44.44 0 0 0 .425-.446zm3.95 2.55c.637 0 1.254.513 1.254 1.167v4.913c0 .649-.613 1.175-1.254 1.175-.63 0-1.146-.522-1.146-1.175V7.322c0-.654.517-1.167 1.146-1.167z"></path></svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Dropdown.Body>
                                </Dropdown>
                            </li>
                            <li className="order-5 order-md-5">
                                <Dropdown>
                                    <Dropdown.Button stylename="header-nav__user">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" viewBox="0 0 28 25"><path fill="#FFFFFF" fillRule="nonzero" d="M19.6 18c4.637 0 8.4 3.763 8.4 8.4V29a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-2.6C0 21.763 3.763 18 8.4 18c1.8 0 2.656 1 5.6 1 2.944 0 3.806-1 5.6-1zM26 29v-2.6c0-3.531-2.869-6.4-6.4-6.4-1.225 0-2.45 1-5.6 1-3.156 0-4.375-1-5.6-1A6.404 6.404 0 0 0 2 26.4V29c0 .55.45 1 1 1h22c.55 0 1-.45 1-1zM14 16a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8zm0-14a6.01 6.01 0 0 0-6 6c0 3.306 2.694 6 6 6s6-2.694 6-6-2.694-6-6-6z"></path></svg>
                                    </Dropdown.Button>
                                    <Dropdown.Body>
                                        <div className="user-dropdown-content">
                                            <span className="user-dropdown-content__user">@usuariologado</span>
                                            <div className="user-dropdown-content__language">
                                                <div>PT<span>BR</span></div>
                                                <div>US<span>EN</span></div>
                                                <div>ES<span>ES</span></div>
                                            </div>
                                            <ul className="user-dropdown-content__list">
                                                <li><a href="http://localhost:3000">Meu perfil</a></li>
                                                <li><a href="http://localhost:3000">Criar assinatura</a></li>
                                                <li><a href="http://localhost:3000">Produtos</a></li>
                                                <li><a href="http://localhost:3000">Sobre o Sparkle</a></li>
                                                <li><a href="http://localhost:3000">Sair</a></li>
                                            </ul>
                                        </div>
                                    </Dropdown.Body>
                                </Dropdown>
                            </li>
                        </ul>
                    </nav>
                </div>
                
            </div>
        </header>
    )
}

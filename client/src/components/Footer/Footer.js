import React from 'react'
import './Footer.scss';

import Dropdown from '../Dropdown/Dropdown'

export default function Footer() {
    return (
        <section className="footer">
            
            <div className="container-md">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <h2>Baixe nosso app</h2>
                        <ul className="footer__apps">
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
                    <div className="col-12 col-lg-4">
                        <h2>Suporte</h2>
                        <ul className="footer__links">
                            <li><a href="http://localhost:3000">Central de Ajuda</a></li>
                            <li><a href="http://localhost:3000">Termos de Uso</a></li>
                            <li><a href="http://localhost:3000">Política de Privacidade</a></li>
                            <li><a href="http://localhost:3000">Política de Cookies</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-4">
                        <h2>Sparkle</h2>
                        <ul className="footer__links">
                            <li><a href="http://localhost:3000">Conteúdos em alta</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4 order-2 order-lg-1">
                        <span className="footer__message">Feito com 🧡 por Paulo Daniel</span>
                        <ul className="footer__social">
                            <li>
                                <a href="http://localhost:3000">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 41 41"><g fill="none" fillRule="evenodd"><path stroke="#353A40" strokeLinejoin="round" d="M0 19.444C0 8.706 8.693 0 19.417 0c10.724 0 19.417 8.706 19.417 19.444 0 10.74-8.693 19.445-19.417 19.445C8.693 38.889 0 30.183 0 19.444z" transform="translate(1 1)"></path><path fill="#353A40" d="M20.622 28.889V18.888h2.757l.365-3.447h-3.122l.004-1.725c0-.899.085-1.38 1.375-1.38h1.724V8.889h-2.758c-3.312 0-4.478 1.672-4.478 4.483v2.07h-2.065v3.446h2.065v10h4.133z" transform="translate(1 1)"></path></g></svg>
                                </a>
                            </li>
                            <li>
                                <a href="http://localhost:3000">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 41 41"><g fill="none" fillRule="evenodd"><path stroke="#353A40" strokeLinejoin="round" d="M0 19.444C0 8.706 8.693 0 19.417 0c10.724 0 19.417 8.706 19.417 19.444 0 10.74-8.693 19.445-19.417 19.445C8.693 38.889 0 30.183 0 19.444z" transform="translate(1 1)"></path><path fill="#353A40" d="M18.385 10v.003h1.032c3.072 0 3.436.01 4.649.066 1.121.051 1.73.24 2.136.397.537.209.92.458 1.322.862.403.403.652.787.86 1.324.158.406.346 1.016.397 2.139.051 1.13.065 1.525.067 4.055v1.197c-.002 2.53-.016 2.925-.067 4.056-.051 1.123-.239 1.733-.396 2.138-.209.538-.458.92-.861 1.324a3.557 3.557 0 01-1.322.861c-.405.159-1.015.346-2.136.397-1.087.05-1.493.065-3.779.067h-1.74c-2.286-.002-2.691-.017-3.779-.067-1.121-.052-1.73-.24-2.136-.397a3.563 3.563 0 01-1.323-.862 3.571 3.571 0 01-.86-1.324c-.158-.405-.346-1.015-.397-2.138-.048-1.047-.062-1.463-.065-3.528v-2.256c.003-2.065.017-2.479.065-3.526.051-1.123.239-1.733.396-2.139a3.57 3.57 0 01.861-1.325 3.57 3.57 0 011.323-.862c.406-.158 1.015-.346 2.136-.397 1.062-.048 1.473-.063 3.617-.065zm1.032 3.542a5.9 5.9 0 00-5.894 5.903c0 3.26 2.639 5.902 5.894 5.902a5.898 5.898 0 005.894-5.902 5.899 5.899 0 00-5.894-5.903zm0 2.36a3.54 3.54 0 013.537 3.542 3.54 3.54 0 01-3.537 3.542 3.54 3.54 0 01-3.537-3.542 3.539 3.539 0 013.537-3.541zm5.888-4.018a1.36 1.36 0 000 2.72 1.36 1.36 0 000-2.72z" transform="translate(1 1)"></path></g></svg>
                                </a>
                            </li>
                            <li>
                                <a href="http://localhost:3000">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 42 42"><g fill="none" fillRule="evenodd"><path stroke="#353A40" strokeLinejoin="round" d="M0 20C0 8.954 8.942 0 19.972 0c11.03 0 19.971 8.954 19.971 20s-8.941 20-19.971 20S0 31.046 0 20z" transform="translate(1 1)"></path><path fill="#353A40" d="M20.254 16.36l.041.673-.681-.082c-2.481-.316-4.648-1.387-6.488-3.186l-.9-.892-.231.659c-.49 1.469-.177 3.02.845 4.064.545.577.422.66-.518.316-.327-.11-.613-.192-.64-.151-.096.096.231 1.345.49 1.84.354.686 1.077 1.36 1.867 1.757l.668.316-.79.014c-.764 0-.79.014-.71.302.273.892 1.35 1.84 2.55 2.252l.845.288-.736.44a7.685 7.685 0 01-3.653 1.016c-.613.013-1.118.068-1.118.11 0 .137 1.663.906 2.63 1.208 2.904.892 6.352.508 8.941-1.016 1.84-1.085 3.68-3.24 4.539-5.328.463-1.112.927-3.144.927-4.12 0-.63.04-.713.804-1.468.45-.44.872-.92.954-1.058.136-.26.122-.26-.573-.027-1.158.412-1.322.357-.75-.261.423-.44.928-1.236.928-1.47 0-.04-.205.028-.437.152-.245.137-.79.343-1.199.467l-.736.233-.668-.453c-.368-.247-.886-.522-1.158-.604-.695-.192-1.758-.165-2.385.055-1.704.618-2.78 2.21-2.658 3.954z" transform="translate(1 1)"></path></g></svg>
                                </a>
                            </li>
                            <li>
                                <a href="http://localhost:3000">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 42 42"><g fill="none" fillRule="evenodd"><path stroke="#353A40" strokeLinejoin="round" d="M0 20C0 8.954 8.942 0 19.972 0c11.03 0 19.971 8.954 19.971 20s-8.941 20-19.971 20S0 31.046 0 20z" transform="translate(1 1)"></path><path fill="#353A40" d="M20.212 12.223c1.237.005 6.891.05 8.43.464a2.781 2.781 0 011.961 1.964c.42 1.57.46 4.688.464 5.258v.182c-.004.57-.043 3.687-.464 5.258a2.781 2.781 0 01-1.962 1.964c-1.576.424-7.477.461-8.513.464h-.312c-1.037-.003-6.937-.04-8.514-.464A2.781 2.781 0 019.34 25.35c-.406-1.517-.456-4.474-.463-5.19v-.318c.007-.716.057-3.673.463-5.19a2.781 2.781 0 011.962-1.964c1.538-.413 7.192-.459 8.43-.464zm-2.09 4.508v6.763l5.548-3.381-5.548-3.382z" transform="translate(1 1)"></path></g></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-4 offset-0 offset-lg-4 order-1 order-lg-2">
                        <div className="footer__language">

                            <Dropdown>
                                <Dropdown.Button>
                                    <span>Idioma</span>
                                    <span>BR</span>
                                    <span>Português | Português</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 448 512" role="img" aria-hidden="true" focusable="false"><path fill="#353A40" d="M441.9 250.1l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L250 385.4V44c0-6.6-5.4-12-12-12h-28c-6.6 0-12 5.4-12 12v341.4L42.9 230.3c-4.7-4.7-12.3-4.7-17 0L6.1 250.1c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path></svg>
                                </Dropdown.Button>
                                <Dropdown.Body>
                                    <ul className="footer__language-list">
                                        <li>
                                            <span>BR</span>
                                            <span>Português | Português</span>
                                        </li>
                                        <li>
                                            <span>US</span>
                                            <span>Inglês | English</span>
                                        </li>
                                        <li>
                                            <span>ES</span>
                                            <span>Espanhol | Español</span>
                                        </li>
                                    </ul>
                                </Dropdown.Body>
                            </Dropdown>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <hr className="footer__separator"></hr>
                        <span className="footer__message">
                            Apenas um teste. Obrigado por ver! — 2021 - Nenhum direito reservado XD.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

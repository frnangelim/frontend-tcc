import React from 'react';
import {FiMapPin} from "react-icons/fi";
import {Content, Grid} from './styles';
import MainPhoto from "../../assets/images/a4banner.jpeg";
import Logo from "../../assets/images/a4.jpeg";
import Instagram from "../../assets/icons/btnround.insta.png";
import Facebook from "../../assets/icons/btnround.facebook.png";
import Whatsapp from "../../assets/icons/btround.whatsapp.png";
import Website from "../../assets/icons/btround.site.png";
import FeedBlock from "../../components/Feed/Block";

function CompanyDetails() {
    return (
        <>f
            <div>
                <div>
                    <img alt="Foto principal" src={MainPhoto} style={{
                        width: "100%",
                        height: "60vh",
                        objectFit: "cover"
                    }}/>
                    <a href={'/evento/slug'} style={{
                        position: 'absolute',
                        top: 70,
                        right: 20,
                        color: 'white',
                        background: '#DD9847',
                        padding: 12,
                        borderRadius: 50,
                        fontWeight: 'bold'
                    }}>Compartilhar</a>
                </div>

                <div style={{display: 'flex', justifyContent: 'center', marginTop: -140}}>
                    <div>
                        <img src={Logo} alt={"Logo"} style={{height: 250, width: 250, borderRadius: 250 / 2}}/>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1 style={{textAlign: 'center'}}>Associação dos Amigos dos Animais Abandonados</h1>
                </div>
            </div>
            <Content>
                <div className={'location'}>
                    <FiMapPin/>
                    <span style={{color: '#DD9847'}}>Av. Dr. Elpídio de Almeida, 215 - Catolé, Campina Grande - PB, 58410-215</span>
                </div>
                <div className={'description'}>
                    <span>
                        Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
                        Sapien in monti palavris qui num significa nadis i pareci latim. Mé faiz elementum girarzis, nisi eros vermeio.
                        Paisis, filhis, espiritis santis.

                        Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Atirei o pau no gatis, per gatis num morreus.
                        Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Aenean aliquam molestie leo, vitae iaculis nisl.

                        Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Suco de cevadiss deixa as pessoas mais interessantis.
                        Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Delegadis gente finis, bibendum egestas augue arcu ut est.
                    </span>
                </div>

                <div className={'socials'}>
                    <img src={Instagram} alt={"Instagram"}/>
                    <img src={Facebook} alt={"Facebook"}/>
                    <img src={Website} alt={"Website"}/>
                    <img src={Whatsapp} alt={"Whatsapp"}/>
                </div>

                <div className={'events'}>
                    <h2 style={{textAlign: 'center'}}>Próximos eventos</h2>
                    <Grid>
                        <FeedBlock/>
                        <FeedBlock/>
                        <FeedBlock/>
                        <FeedBlock/>
                        <FeedBlock/>
                    </Grid>
                </div>
            </Content>
        </>
    );
}

export default CompanyDetails;

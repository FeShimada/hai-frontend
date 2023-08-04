import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

const FooterContainer = styled.footer`
  background-color: #17171A; /* Alterando a cor do background */
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(26, 26, 29, 0.3);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const LogoImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const Heading = styled.h3`
  font-size: 24px;
  color: #FFF;
  margin: 0;
`;

const Description = styled.p`
  color: #FFF;
  font-size: 16px;
  margin-top: 20px;
`;

const Link = styled.a`
  color: #FFF;
  font-size: 18px;
  text-decoration: none;
`;

const SocialIconLink = styled.a`
  color: #FFF;
  text-decoration: none;
  font-size: 24px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
          <LogoImage src={logo} alt="Logo da empresa" />
          <Heading>HAI EVENTOS</Heading>
        </div>
        <Description>Slogan ou descrição curta sobre a empresa e seus produtos alimentícios.</Description>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
          <Link href="#">Home</Link>
          <Link href="#">Produtos</Link>
          <Link href="#">Sobre Nós</Link>
          <Link href="#">Contato</Link>
          <Link href="/admin">Administrativo</Link>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "30px" }}>
          <SocialIconLink href="#"><i className="fab fa-facebook-f"></i></SocialIconLink>
          <SocialIconLink href="#"><i className="fab fa-instagram"></i></SocialIconLink>
          <SocialIconLink href="#"><i className="fab fa-twitter"></i></SocialIconLink>
        </div>
        <Description>© 2023 HAI. Todos os direitos reservados.</Description>
      </Container>
    </FooterContainer>
  );
}

export default Footer;

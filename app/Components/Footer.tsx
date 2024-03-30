'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import logo from '/public/logo.png';

import { AiFillGithub, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';

const Footer = () => {
  return (
    <FooterStyled>
      <nav>
        <div className="logo-icon">
          <div className="logo">
            <Image src={logo} width={36} alt="logo" />
            <h2>Logo</h2>
          </div>
          <div className="input">
            <input type="text" placeholder="Subscribe here..." />
            <button>&#8594;</button>
          </div>
          <p>Create, Sell And Collect Truly Rare Digital Artworks. Powered By Blockchain Technology.</p>
          <div>
            <AiFillGithub />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <BsDiscord />
            <AiFillLinkedin />
          </div>
        </div>
      </nav>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer``;

export default Footer;

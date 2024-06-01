'use client';

import { useRef } from 'react';
import Header from '@/app/Components/Header/Header';
import styled from 'styled-components';
import SectionLayout from '@/app/Components/SectionLayout';
import Card from '@/app/Components/Card';
import { cards } from './utils/cards';
import FullPage from '@/app/Components/FullPage';
import TextSection from '@/app/TextSection';
import Footer from '@/app/Components/Footer';
import ZoomSection from '@/app/Components/ZoomSection';
import HorizontalWrapper from '@/app/Components/HorizontalWrapper/HorizontalWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
export default function Home() {
  const video = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: video,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6, 0.8, 0.9], [1, 0.8, 0.8, 0]);

  return (
    <>
      <Header />
      <MainStyled>
        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={-1400}>
            <div className="cards">
              {cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card?.title}
                    description={card?.description}
                    image={card?.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>
        <FullPage />
        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={1400}>
            <div className="cards" style={{ right: 0 }}>
              {cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card?.title}
                    description={card?.description}
                    image={card?.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>
        <SectionLayout>
          <TextSection />
        </SectionLayout>
        <SectionLayout>
          <motion.div
            className="video"
            ref={video}
            style={{
              opacity: opacity,
              scale: scale,
            }}
          >
            <iframe
              width="1280"
              height="704"
              src="https://www.youtube.com/embed/4PALQUzjzls"
              title="Смешные жирные животные-анимационный короткометражный фильм | анимационные мультфильмы"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </motion.div>
        </SectionLayout>
        <SectionLayout>
          <ZoomSection></ZoomSection>
        </SectionLayout>
        <SectionLayout>
          <TextSection />
        </SectionLayout>
        <Footer />
      </MainStyled>
    </>
  );
}

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;

  .cards {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
  }

  .video {
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;
    iframe {
      border: none;
      width: 100%;
      height: 52rem;
    }
  }
`;

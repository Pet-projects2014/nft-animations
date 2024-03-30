'use client';

import Header from '@/app/Components/Header/Header';
import styled from 'styled-components';
import SectionLayout from '@/app/Components/SectionLayout';
import Card from '@/app/Components/Card';
import { cards } from './utils/cards';
import Fullpage from '@/app/Components/Fullpage';
import TextSection from '@/app/TextSection';
import Footer from '@/app/Components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionLayout>
          <div className="cards">
            {cards.map((card, index) => {
              return <Card key={index} title={card?.title} description={card?.description} image={card?.image} />;
            })}
          </div>
        </SectionLayout>
        <Fullpage />
        <SectionLayout>
          <div className="cards">
            {cards.map((card, index) => {
              return <Card key={index} title={card?.title} description={card?.description} image={card?.image} />;
            })}
          </div>
        </SectionLayout>
        <SectionLayout>
          <TextSection />
        </SectionLayout>
        <SectionLayout>
          <div className="video">
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
          </div>
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

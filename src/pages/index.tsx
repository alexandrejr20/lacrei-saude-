import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Illustration from '../components/Illustration';
import Link from 'next/link';
import styled from 'styled-components';


const Container = styled.main`max-width: 1100px; margin: 0 auto; padding: 24px;`;


export default function Home() {
return (
  <>
    <Head>
    <link rel="icon" href="images.jpg" />
    <title>Lacrei Saúde — Cuidado que acolhe</title>
    </Head>
    <Header />
    <Container aria-labelledby="hero-title">
    <section aria-labelledby="hero-title">
    <h1 id="hero-title">Cuidados acessíveis e acolhedores para todas as pessoas</h1>
    <p>Na Lacrei Saúde, garantimos que cada pessoa se sinta segura ao buscar atendimento.</p>
    <div style={{ marginTop: 32 }}>
    <Link
      href="/agendar"
      passHref
      role="button"
      aria-label="Agendar consulta"
      style={{ padding: '10px 16px', background: '#26c059', color: '#fff', borderRadius: 30 }}>
    Agendar consulta
    </Link>
    </div>
    </section>
    <section aria-labelledby="hero-illus" style={{ marginTop: 300 }}>
    <Illustration />
    </section>
    </Container>
    <Footer />
  </>
);
}
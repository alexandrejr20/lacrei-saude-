import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import styled from 'styled-components';


const Main = styled.main`max-width: 800px; margin: 24px auto; padding: 16px;`;


export default function Agendar() {
return (
<>
<Head>
<title>Agendar — Lacrei Saúde</title>
</Head>
<Header />
<Main>
<section aria-labelledby="agendar-title">
<h1 id="agendar-title">Agendar consulta</h1>
<p>Formulário rápido e seguro — informações tratadas com confidencialidade.</p>
</section>
<BookingForm />
</Main>
<Footer />
</>
);
}
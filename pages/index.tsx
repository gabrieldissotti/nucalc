import { GetStaticProps } from "next";

import { Container, Card, H1, Small, P, Strong, Wrap } from '../styles/home';
import Button from '../components/Button';
import Input from '../components/Input';
import { useCallback, useState } from "react";

export default function Home({ cdi_daily }) {
  const [selectedButton, setSelectedButton] = useState();

  const handleSelect = useCallback((itemId) => {
    setSelectedButton(itemId)
  }, [])


  return (
    <Container>
      <Card>
        <H1>Calculadora de rendimento no nubank com resgate planejado</H1>
        <Small>Não oficial, desenvolvido por <a>Gabriel Dissotti</a></Small>

        <P>Qual valor você pretende investir?</P>
        <Input />

        <P>Quando você quer ter o dinheiro disponível?</P>
        <Wrap>
          <Button handleSelect={() => handleSelect('11/12/2020')} isSelected={selectedButton === '11/12/2020'}>11/12/2020</Button>
          <Button handleSelect={() => handleSelect('12/12/2020')} isSelected={selectedButton === '12/12/2020'}>12/12/2020</Button>
          <Button handleSelect={() => handleSelect('13/12/2020')} isSelected={selectedButton === '13/12/2020'}>13/12/2020</Button>
          <Button handleSelect={() => handleSelect('14/12/2020')} isSelected={selectedButton === '14/12/2020'}>14/12/2020</Button>
        </Wrap>

        <P>Seu rendimento será de:</P>
        <Strong>R$ 1200,35</Strong>
      </Card>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // const response = await fetch(`https://api.hgbrasil.com/finance/taxes?key=${process.env.API_KEY}`);
  // const data = await response.json();

  return {
    props: {
      // cdi_daily: data?.results[0]?.cdi_daily
      cdi_daily: 1.9
    },
    revalidate: 10
  }
}
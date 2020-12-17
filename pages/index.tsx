import { GetStaticProps } from "next";
import { addMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import currency from 'currency.js';

import { Container, Card, H1, Small, P, Strong, Wrap } from '../styles/home';
import Button from '../components/Button';
import Input from '../components/Input';
import { useCallback, useEffect, useMemo, useState } from "react";
import { linkToProfile } from "../config";

export default function Home({ cdi_daily }) {
  const [selectedOption, setSelectedOption] = useState();
  const [amount, setAmount] = useState(0);
  const [income, setIncome] = useState(0);
  const [incomePercent, setIncomePercent] = useState('0');
  const [additionalIncomePercent, setAdditionalIncomePercent] = useState('0');
  const today = useMemo<Date>(() => new Date(), []);

  const options = useMemo(() => ([{
      id: 1,
      months_to_debit: 1,
      date: addMonths(today, 1),
      additional_income_percent: '100%',
      income_percent: cdi_daily
    },{
      id: 2,
      date: addMonths(today, 3),
      months_to_debit: 3,
      additional_income_percent: '102%',
      income_percent: currency(1.02).multiply(cdi_daily).value
    },{
      id: 3,
      months_to_debit: 6,
      date: addMonths(today, 6),
      additional_income_percent: '103%',
      income_percent: currency(1.03).multiply(cdi_daily).value
    },{
      id: 4,
      months_to_debit: 12,
      date: addMonths(today, 12),
      additional_income_percent: '106%',
      income_percent: currency(1.06).multiply(cdi_daily).value
    },{
      id: 5,
      months_to_debit: 24,
      date: addMonths(today, 24),
      additional_income_percent: '112%',
      income_percent: currency(1.12).multiply(cdi_daily).value
    },
  ]), []);

  const handleSelect = useCallback((itemId) => {
    setSelectedOption(itemId)
  }, [selectedOption, ])

  useEffect(() => {
    if (!selectedOption) {
      return;
    }

    const option = options.find(option => option.id === selectedOption)

    setIncomePercent(option.income_percent)
    setAdditionalIncomePercent(option.additional_income_percent)
    
    const incomePerMonth = amount * (option.income_percent/12);

    const totalIncome = incomePerMonth * option.months_to_debit;

    setIncome(totalIncome)
  }, [selectedOption, amount])

  return (
    <Container>
      <Card>
        <H1>Calculadora de rendimento no nubank com resgate planejado</H1>
        <Small>Não oficial, desenvolvido por <a href={linkToProfile}>Gabriel Dissotti</a></Small>

        <P>Qual valor você pretende investir?</P>
        <Input onChange={(value: number) => setAmount(value)}/>

        <P>Quando você quer ter o dinheiro disponível?</P>
        <Wrap>
          {
            options.map(option => (
              <Button
                key={option.id}
                handleSelect={() => handleSelect(option.id)}
                isSelected={selectedOption === option.id}>{
                  format(option.date, 'dd/MM/yyyy', {
                    locale: ptBR
                  })
                }
              </Button>
            ))
          }
        </Wrap>

        <P>Se investir hoje, seu rendimento será de:</P>
        <Strong>{currency(income).format({ symbol: 'R$ ', separator: '.', decimal: ',' })}</Strong>
        <Small> com {incomePercent}% ao ano ({additionalIncomePercent} do CDI) </Small>
      </Card>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // const response = await fetch(`https://api.hgbrasil.com/finance/taxes?key=${process.env.API_KEY}`);
  // const data = await response.json();

  return {
    props: {
      // cdi_daily: currency(data?.results[0]?.cdi_daily).value
      cdi_daily: currency(1).add('.90').value
    },
    revalidate: 10
  }
}
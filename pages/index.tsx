import { GetStaticProps } from "next";
import { addMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import currency from 'currency.js';

import Button from '../components/Button';
import Input from '../components/Input';
import { useCallback, useEffect, useMemo, useState } from "react";
import { linkToProfile } from "../config";

const UPDATE_CDI_VALUE_EACH_HOUR = 3600;

export default function Home({ cdi_daily }) {
  const [selectedOption, setSelectedOption] = useState();
  const [amount, setAmount] = useState(0);
  const [income, setIncome] = useState(0);
  const [incomePercent, setIncomePercent] = useState('0');
  const [moreThan, setMoreThan] = useState(0);
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
    
    const incomePerMonth = currency(option.income_percent, {
      precision: 8
    }).divide(12).divide(100).multiply(amount).value

    const incomeWithoutPlan = currency(cdi_daily, {
      precision: 8
    }).divide(12).divide(100).multiply(amount).value

    const totalIncome = Number(currency(incomePerMonth).multiply(option.months_to_debit));
    const totalIncomeWithoutPlan = Number(currency(totalIncome).subtract(currency(incomeWithoutPlan).multiply(option.months_to_debit)));

    setIncome(totalIncome)
    setMoreThan(totalIncomeWithoutPlan)
  }, [selectedOption, amount])

  return (
    <div className="container">
      <div className="card">
        <h1>Calculadora de rendimento no nubank com resgate planejado</h1>
        <small>Não oficial, desenvolvido por <a href={linkToProfile}>Gabriel Dissotti</a></small>

        <p>Qual valor você pretende investir?</p>
        <Input onChange={(value: number) => setAmount(value)}/>

        <p>Quando você quer ter o dinheiro disponível?</p>
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

        <p>Se investir hoje, seu rendimento será de:</p>
        <strong>{currency(income).format({ symbol: 'R$ ', separator: '.', decimal: ',' })}</strong>
        <small> com {incomePercent}% ao ano ({additionalIncomePercent} do CDI) </small>
        <br />
        <small> {currency(moreThan).format({ symbol: 'R$ ', separator: '.', decimal: ',' })} a mais que o resgate a qualquer momento</small>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`https://api.hgbrasil.com/finance/taxes?key=${process.env.API_KEY}`);
  const data = await response.json();

  console.log('executed getStaticProps', data)

  return {
    props: {
      cdi_daily: currency(data?.results[0]?.cdi_daily).value
    },
    revalidate: UPDATE_CDI_VALUE_EACH_HOUR
  }
}
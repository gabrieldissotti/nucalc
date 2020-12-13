import { GetStaticProps } from "next";

export default function Home({ cdi_daily }) {
  return (
    <div>
      Percentual do CDI: { cdi_daily }
    </div>
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
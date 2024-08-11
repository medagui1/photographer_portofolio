import React from 'react'
import PortfolioCard from '../components/PortfolioCard'
import { portfolio_data } from '../constants/portfolio-data'

const Portfolio = () => {
  return (
    <section className="section portfolio pb-[100px] " id="portfolio" aria-labelledby='portfolio-label'>
        <div className="container">
            <div className="portfolio-list">
                <div className="wrapper">
                    <h2 className="h2 section-title mb-[60px] " id='portfolio-label' data-reveal>
                        My Recent Work.
                    </h2>
                    {portfolio_data.slice(0,2).map((item, index) => (
                        <PortfolioCard key={`=${index}_${item.content}`} item={item} />
                    ))}
                </div>

                <div className="wrapper">
                    {portfolio_data.slice(2,).map((item, index) => (
                        <PortfolioCard key={`=${index}_${item.content}`} item={item} />
                    ))}
                </div>
            </div>

            <img src="icons/portfolio-shape.svg" width={286} height={232} loading='lazy' alt="" className="shape" />
        </div>
    </section>
  )
}

export default Portfolio
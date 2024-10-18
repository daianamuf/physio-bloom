import { useState } from "react";
import useElementIntersectionObserver from "../useElementIntersectionObserver";
import { Helmet } from "react-helmet-async";

const pricesIndividual = [
  {
    id: 1,
    number: "01",
    type: "ședință privată",
    price: "90",
  },
  {
    id: 2,
    number: "02",
    type: "abonament 4 ședințe",
    price: "340",
  },
  {
    id: 3,
    number: "03",
    type: "abonament 8 ședințe",
    price: "660",
  },
];

const pricesDuo = [
  {
    id: 1,
    number: "01",
    type: "ședință duo",
    price: "70",
  },
  {
    id: 2,
    number: "02",
    type: "abonament 4 ședințe",
    price: "250",
  },
  {
    id: 3,
    number: "03",
    type: "abonament 8 ședințe",
    price: "480",
  },
];

function Prices() {
  const [individual, setIndividual] = useState(true);
  const [duo, setDuo] = useState(false);
  const canonicalUrl = "https://physiobloom.ro/tarife";

  const { elementRef, isVisible } = useElementIntersectionObserver({
    root: null,
    treshold: 0.2,
  });

  return (
    <>
      <Helmet>
        <title>
          PhysioBloom - Tarife pentru Recuperare Medicală și Pilates în Cluj
        </title>
        <meta
          name="description"
          content="Descoperă tarifele PhysioBloom pentru servicii de recuperare medicală și pilates în Cluj-Napoca. Oferim pilates pre și post-natal, pilates clinic și Peak Pilates la prețuri accesibile."
        />
        <meta
          name="keywords"
          content="PhysioBloom, tarife recuperare medicală, pilates pre și post-natal, pilates clinic, Peak Pilates, Cluj"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <section className="prices">
        <div className="prices__hero"></div>
        <div
          className={`prices__info ${isVisible ? "slideInFromBottom" : ""}`}
          ref={elementRef}
        >
          <div className="prices__btns">
            <button
              className={`prices__btn ${individual ? "selected" : ""}`}
              onClick={() => {
                setIndividual(true);
                setDuo(false);
              }}
            >
              Ședință privată
            </button>

            <button
              className={`prices__btn ${duo ? "selected" : ""}`}
              onClick={() => {
                setDuo(true);
                setIndividual(false);
              }}
            >
              Ședință duo
            </button>
          </div>

          {individual &&
            pricesIndividual.map((el) => (
              <div key={el.id} className="prices__data">
                <div className="prices__data--section">
                  <h3 className="prices__data--heading">{el.type}</h3>
                  <p className="prices__data--number">{el.number}</p>
                </div>
                <p className="prices__data--price">{el.price} LEI</p>
              </div>
            ))}

          {duo &&
            pricesDuo.map((el) => (
              <div key={el.id} className="prices__data">
                <div className="prices__data--section">
                  <h3 className="prices__data--heading">{el.type}</h3>
                  <p className="prices__data--number">{el.number}</p>
                </div>
                <p className="prices__data--price">{el.price} LEI</p>
              </div>
            ))}

          <div className="prices__details">
            <p>1 ședință = 50 minute</p>
            <p>Abonamentele au valabilitate 4, respectiv 6 săptămâni.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Prices;

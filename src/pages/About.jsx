import { Link } from "react-router-dom";
import useElementIntersectionObserver from "../useElementIntersectionObserver";
import Image from "../components/Image";

const info = [
  {
    id: 1,
    number: "01",
    image: "/assets/images/img1.jpeg",
    title: "about me",
    text: "Numele meu este Bianca. Am studiat la Facultatea de Medicina și Farmacie ”Iuliu Hațieganu” , specializarea Balneofiziokinetoterapie și recuperare medicală, de asemenea sunt certificată internațional în Peak Pilates, pilates clinic, pilates pre și post-natal. Îmi place ideea de a avea puterea să împărtășesc metode diferite de recuperare medicală (și anume prin aparatura Peak Pilate) și de a construi un grup de clienți fericiți și sănătoși.",
  },
  {
    id: 2,
    number: "02",
    image: "/assets/images/img3.jpeg",
    title: "JOSEPH PILATES",
    text: "“Câteva mișcări bine concepute, corect efectuate într-o secvență echilibrată, sunt echivalentul a multor ore de exercitii de gimnastică executate haotic sau exercitii de răsucire executate din obligație.” - JOSEPH HUBERTUS PILATES",
  },
  {
    id: 3,
    number: "03",
    image: "/assets/images/img6.jpeg",
    title: "despre pilates",
    text: "Pilates este conceput pentru a întinde, întări și echilibra corpul. Prin executarea unor exerciții și modele de respirație specifice, Pilates s-a dovedit a fi de foarte important pentru comunitate. Este un adjuvant important pentru antrenamentele sportive profesionale și pentru refacerea fizică de orice fel. Adoptat pe scară largă de oameni cu experiență, exercițiile, limbajul și aspectul Pilates apar în cabinete de kinetoterapie și în centre de recuperare medicală.",
  },
  {
    id: 4,
    number: "04",
    image: "/assets/images/img7.jpeg",
    title: "aparate utilizate",
    text: "Aparatele au fost concepute pentru a ajuta la accelerarea procesului de întindere, întărire, aliniere a corpului și creșterea rezistenței miezului (core), prin intermediul exercițiilor fizice executate la sol. Salteaua, reformerul, high/low combo chair, ladder barrel și spine corrector sunt echipamentele pe care le veți folosi la Physio Bloom Studio.",
  },
];

function About() {
  const { elementRef, isVisible } = useElementIntersectionObserver({
    root: null,
    treshold: 0.2,
    rootMargin: "400px",
  });

  return (
    <section className="about">
      <div className="about__hero"></div>

      <div
        ref={elementRef}
        className={`about__section ${isVisible ? "slideInFromBottom" : ""}`}
      >
        {info.map((el, index) => (
          <div
            className={`about__info ${index % 2 === 0 ? "odd" : "even"}`}
            data-index={index}
            key={el.id}
          >
            <div className="about__data">
              <p className="about__data--number">{el.number}</p>
              <h3 className="about__data--heading">{el.title}</h3>
              <p className="about__data--text">{el.text}</p>
            </div>
            <Image className="about__img" src={el.image} alt="" />
          </div>
        ))}

        <Link to={"/blog"} className="link__btn">
          <span>Descoperă mai mult</span>
        </Link>
      </div>
    </section>
  );
}

export default About;

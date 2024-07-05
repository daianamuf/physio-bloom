import useElementIntersectionObserver from "../useElementIntersectionObserver";
import Image from "./Image";

function Plan() {
  const { elementRef, isVisible } = useElementIntersectionObserver({
    root: null,
    treshold: 0.05,
  });
  const steps = [
    {
      id: 1,
      number: "01",
      img: "/assets/images/step1.svg",
      heading: "VISIT THE STUDIO",
      text: "Fă-ți o programare gratuită la studio pentru a ne cunoaște și pentru a vedea dacă ți se potrivește.",
    },
    {
      id: 2,
      number: "02",
      img: "/assets/images/step2.svg",
      heading: "MAKING A PLAN",
    },
    {
      id: 3,
      number: "03",
      img: "/assets/images/step3.svg",
      heading: "DESIGNING IT",
      text: "Ședințele vor fi personalizate în funcție de problemele fizice pe care le aveți. Un concept fundamental de reținut este acela de a permite corpului să se adapteze treptat.",
    },
    {
      id: 4,
      number: "04",
      img: "/assets/images/step4.svg",
      heading: "FINAL TOUCHES",
      text: "Rezultatele nu vor înceta să apară, atât în timpul ședințelor cât și în viața de zi cu zi.",
    },
  ];
  return (
    <section
      className={`plan ${isVisible ? "slideInFromBottom" : ""}`}
      ref={elementRef}
    >
      {steps.map((step, index) => (
        <div
          key={step.id}
          data-index={index}
          className={`plan__step ${index % 2 === 0 ? "odd" : "even"}`}
        >
          <div className="plan__step--section">
            <Image className="plan__step--img" src={step.img} alt="" />
            <h3 className="plan__step--heading">{step.heading}</h3>
            <p className="plan__step--number">{step.number}</p>
          </div>
          <p className="plan__step--text">{step.text}</p>
        </div>
      ))}
    </section>
  );
}

export default Plan;

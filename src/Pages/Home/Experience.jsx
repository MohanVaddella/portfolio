import data from "../../data/index.json";

export default function Experience() {
  return (
    <section className="experience--section" id="experience">
      
        <div className="portfolio--container">
          <p className="section--title experience--section--title">Experience</p>
        </div>
        
      <div className="portfolio--section--container">
        {data?.experience?.map((item, index) => (
          <div key={index} className="experience--section--card">
            <div className="experience--section--img">
              <img src={item.src} alt="Placholder" />
            </div>
            <div className="experience--section--card--content">
              <div>
                <h3 className="experience--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

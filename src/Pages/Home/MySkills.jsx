import React from "react";
import data from "../../data/index.json";
export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h4 className="skills--section--title">{item.title}</h4>
              
              <p className="skills--section--description">
                {item.description.split(' ').map((skill, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <br />}
                    {skill}
                  </React.Fragment>
                ))}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

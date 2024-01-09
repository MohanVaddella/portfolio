export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
            <p className="hero--section--title">Hey, I'm Mohan</p>
            
            <span className="hero--section-description">
  I am an enthusiastic techie specializing in <b>Cloud Computing</b> and <b>Web Development</b>, demonstrating proficiency in designing and implementing innovative solutions.
</span>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}

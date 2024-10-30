export default function About() {
    return (
      <section>
        <div className="about-section">
          <h1 className="about-title">
            ABOUT <span className="highlight">US</span>
          </h1>
          <div className="about-grid">
            <div className="flex justify-center">
              <img
                src="/broast.jpg"
                alt="Crispy Broast"
                className="about-image"
              />
            </div>
  
            <div className="about-content">
              <h2>
                What Makes <span className="highlight">Our Food Special?</span>
              </h2>
              <p>
                Welcome to our restaurant! We pride ourselves on offering a unique dining experience with dishes made from the freshest ingredients. Our chefs work tirelessly to bring authentic flavors to every plate, ensuring that each bite is a delightful experience. <br />
                Whether you're enjoying a classic pizza or one of our specialty dishes, we guarantee you'll leave satisfied and eager to return. Join us for a meal that will tantalize your taste buds and warm your heart.
              </p>
              <button className="learn-more-button">Learn More</button>
            </div>
          </div>
          <div className="about-padding-bottom"></div>
        </div>
      </section>
    );
  }
  
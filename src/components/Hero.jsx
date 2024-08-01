
const Hero = () => {
  return (
    <main className="hero">
       <div className="hero-content">
           <h1>YOUR FEET DESERVE THE BEST</h1>
           <p>
                Your feet deserve the best and you have come to the best place for shoes of any type.Choose your favorite type of shoes and rock yourself with them
            </p>

            <div className="hero-btns">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>

            <div className="shopping">
                <p>Also Available On</p>

                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                </div>
            </div>
       </div>
       <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-image" />
      </div>
    </main>
  )
}

export default Hero

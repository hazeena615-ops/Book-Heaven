import React from 'react'
import './Feedstyle.css'

const Review = () => {
  return (
    <>
  <div id="makeitfull">
    <a href="#review_section">
    </a>
  </div>
  <div className="review">
    <div className="diffSection" id="review_section">
      <center>
        <p
          style={{
            fontSize: 40,
            padding: 100,
            paddingBottom: 40,
            color: "rgb(165, 42, 42)"
          }}
        >
          What the Readers Tell about Us?
        </p>
      </center>
    </div>
    <div className="rev-container">
      <div className="marquee">
        <div className="rev-cards">
          <div className="rev-card">
            <div className="identity">
              <img src="/img1.png" />
              <p>Sophie Daniel</p>
              
              <div className="rating">
                <img src="/star.png" />
                <img src="/star.png" />
                <img src="/star.png" />
                <img src="/star.png" />
                <img src="/star.png" />
              </div>
            </div>
            <div className="rev-cont">
              <p id="title">Review:</p>
              <p id="content">
                I did Java Fundamenetal course with Rishab Sir. It was a great
                experience. The brain teasers and assignments, actually the
                whole lot of content was really good. Some problems were
                challenging yet interesting. Was explained very well where ever
                I stuck...
              </p>
            </div>
          </div>
          <div className="rev-card">
            <div className="identity">
              <img src="/img2.png" />
              <p>Clayton Clair</p>
              
              <div className="rating">
                <img src="/star.png" />
                <img src="/star.png" />
                <img src="/star.png" />
                <img src="/star.png" />
                <img src="/star.png" />
              </div>
            </div>
            <div className="rev-cont">
              <p id="title">Review:</p>
              <p id="content">
                When I was watching "Dear Zindagi", I could relate Sharukh Khan
                to Arnav Bhaiya. The way Sharukh Khan was giving life lessons to
                Alia Bhatt, in the same way Arnav Bhaiya will give coding life
                lessons which will guide you throughout your code life...
              </p>
            </div>
          </div>
          <div className="rev-card">
            <div className="identity">
              <img src="/img3.png" />
              <p>Devyn Sethi</p>
              
              <div className="rating">
                <img src="/star.png" />
                <img src="/star.png" />
                <img src="/star.png" />
                <img src="/star.png" />
                <img src="/star.png" />
              </div>
            </div>
            <div className="rev-cont">
              <p id="title">Review:</p>
              <p id="content">
                LearnEd was an amazing experience for me. I belong to
                electronics department and had a little experience in coding but
                I think it has helped me think things through in a much more
                analytical manner. Coding is important no matter which branch
                you are in. It gives you a better understanding about how to
                approach a problem...
              </p>
            </div>
          </div>
          <div className="rev-card">
            <div className="identity">
              <img src="/img4.png" />
              <p>Rylee Phillips</p>
              
              <div className="rating">
                <img src="/star.png" />
                <img src="/star.png" />
                <img src="/star.png" />
                <img src="/star.png" />
                <img src="/star.png" />
              </div>
            </div>
            <div className="rev-cont">
              <p id="title">Review:</p>
              <p id="content">
                This was my first complete course at coding blocks. I attended
                the Python course in Winter 2020 and loved it which made me join
                the full course. Shubham bhaiya and Ayush Bhaiya(TA) have good
                knowledge about the field and were very helpful in making us
                understand the concepts. I would certainly recommend this to
                anyone...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Review

import Image from "next/image";

export default function IntroVideo() {
  return (
    <div className="intro-video">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <!-- Intro Video Box Start --> */}
            <div className="intro-video-box">
              <div className="video-image">
                <Image
                  src="/images/video-bg.jpg"
                  alt="video img"
                  width={1300}
                  height={500}
                />
              </div>

              <div className="video-play-button">
                <a
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  className="popup-video"
                >
                  <img src="images/play.svg" alt="" />
                </a>
              </div>
            </div>
            {/* <!-- Intro Video Box End --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

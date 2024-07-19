import "./style/Slides.css";
import imgFirst from "../../assets/1.png";
import imgSecond from "../../assets/2.png";
import imgThird from "../../assets/3.png";
import imgFourth from "../../assets/4.png";
import { useEffect } from "react";

export default function Slides() {

  useEffect(() => {
    let count = 1;
    document.getElementById("radio1").checked = true;

    setInterval( () => {
      nextImg();
    }, 2000)

    const nextImg = () => {
      count++;
      if (count > 4) {
        count = 1;
      }

      document.getElementById("radio"+count).checked = true;
    };
  }, []);

  return (
    <>
      <div className="slider">
        <div className="slides">
          {/* Início radio button */}
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          {/* Fim radio button. */}
          {/*'Início imagens do slide */}
          <div className="slide first">
            <img src={imgFirst} />
          </div>
          <div className="slide">
            <img src={imgSecond} />
          </div>
          <div className="slide">
            <img src={imgThird} />
          </div>
          <div className="slide">
            <img src={imgFourth} />
          </div>
          {/* Fim imagens do slide. */}

          {/* Início navigation auto */}
          <div className="auto-navigation">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>

        <div className="manual-navigation">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </div>
    </>
  );
}

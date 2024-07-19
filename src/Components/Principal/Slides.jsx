import style from './style/Slides.module.css'
import imgFirst from '../../assets/1.png'
import imgSecond from '../../assets/2.png'
import imgThird from '../../assets/3.png'
import imgFourth from '../../assets/4.png'

export default function Slides() {
  return (
    <>
      <div className={style.slider}>

        <div className={style.slides}>
          {/* Início radio button */}
          <input type="radio" name='radio-btn' id={style.radio_1}/>
          <input type="radio" name='radio-btn' id={style.radio_2}/>
          <input type="radio" name='radio-btn' id={style.radio_3}/>
          <input type="radio" name='radio-btn' id={style.radio_4}/>
          {/* Fim radio button. */}

          {/* Imagens do slide */}
          <div className={style.slide_first}>
            <img src={imgFirst} />
          </div>
          <div className={style.slide}>
            <img src={imgSecond} />
          </div>
          <div className={style.slide}>
            <img src={imgThird} />
          </div>
          <div className={style.slide}>
            <img src={imgFourth} />
          </div>
        </div>

      </div>
    </>
  );
}

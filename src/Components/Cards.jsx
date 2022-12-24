import React from 'react'
import '../CSS/Cards.css'
const Cards = ({img, game, desc, isRev}) => {
  return (
    <div className={`${isRev ? "rev" : "card "}`}>
      <div className={`${isRev?"rev__img__container":"card__img__container"}`}>
        <img src={img} alt="" />
        <div className={`${isRev?"rev__grad":"card__grad"}`}></div>
      </div>
      <div className={`${isRev ? "rev__cont" : "card__cont"}`}>
        <h1 className={`${isRev?"rev__game":"card__game"}`}>{game}</h1>
        <p className={`${isRev?"rev__para":"card__para"}`}>
          Lorem ipsum dolor sit amet ut vio donec vel duo tincidunt usu iusto consequat vitae assentior eleifend facilisis justo rhoncus duo justo leo amet his vis cetero voluptua repudiandae tincidunt dicunt mei partiendo abhorreant aliquam cursus definiebas vel. Lorem ipsum dolor sit amet ut voluptua odio donec vel duo tincidunt usu iusto consequat vitaifend facilisis justo rhoncus duo justo leo amet his vis cetero voluptua repudiandae tincidunt dicunt mei partiendo abhorreant aliquam cursus definiebas vel.
        </p>
        <button className="btn">Know More</button>
      </div>
    </div>
  )
}

export default Cards
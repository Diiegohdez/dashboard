import React from 'react'
import "./featuredInfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"

export default function FeaturedInf() {
  return (
    <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Ingreso</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ 55,122</span>
            <span className="featuredMoneyRate"> 
            -12.2 <ArrowDownward className="featuredIcon Money"/>
            </span>
          </div>
          <span className="featureSub">Comparar con el mes pasado</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Ventas</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ 15,122</span>
            <span className="featuredMoneyRate"> 
            -2.2 <ArrowDownward className="featuredIcon Money"/>
            </span>
          </div>
          <span className="featureSub">Comparar con el mes pasado</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Costo</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ 5,122</span>
            <span className="featuredMoneyRate"> 
            +2.98 <ArrowUpward className="featuredIcon"/>
            </span>
          </div>
          <span className="featureSub">Comparar con el mes pasado</span>
        </div>
    </div>
  )
}

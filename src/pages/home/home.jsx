import React from 'react'
import Chart from '../../Components/Chart/Chart';
import FeaturedInf from "../../Components/featuresInfo/FeaturedInf";
import WidgetLg from '../../Components/WidgetLg/WidgetLg';
import WidgetSm from '../../Components/widgets/WidgetSm';
import { userData } from '../../misDatos';
import "./home.css"

export default function Home () {
  return (
    <div className="home">
        <FeaturedInf/>
        <Chart data={userData} title="Análisis de Ventas" grid dataKey="Active user"/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  );
}

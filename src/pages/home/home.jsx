import React from 'react'
import Chart from '../../Components/Chart/Chart';
import FeaturedInf from "../../Components/featuresInfo/FeaturedInf";
import "./home.css"

export default function Home () {
  return (
    <div className="home">
        <FeaturedInf/>
        <Chart/>
    </div>
  );
}

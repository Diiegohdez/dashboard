import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart() {
    const data = [
        {
          name: 'Ene',
          "Active user": 4000,
          
        },
        {
            name: 'Febr',
            "Active user": 4000,
            
        },
        {
            name: 'Marz',
            "Active user": 3000,
            
        },
        {
            name: 'Abri',
            "Active user": 5000,
            
        },
        {
            name: 'May',
            "Active user": 4000,
            
        },
        {
            name: 'Jun',
            "Active user": 4000,
            
        },
        {
            name: 'Jul',
            "Active user": 3000,
            
        },
        {
            name: 'Agos',
            "Active user": 2000,
            
        },
        {
            name: 'Septi',
            "Active user": 4000,
            
        },
        {
            name: 'Octum',
            "Active user": 3000,
            
        },
        {
            name: 'Novi',
            "Active user": 2000,
            
        },
        {
            name: 'Dic',
            "Active user": 4000,
            
        },
        
      ];

  return (
    <div className="chart">
        <h3 className="chartTitle">Análisis de Ventas</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"/>
            <Line type="monotone" dataKey="Active user" stroke="#5550bd"/>
            <Tooltip/>
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
            
        </LineChart>

        </ResponsiveContainer>
    </div>
  )
}

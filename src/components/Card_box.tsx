import React from 'react';
import { Card } from 'antd';

import {card$} from '../mst/stores/Cardbox.store'

const Card_box = ({cards}:{cards:Array<string>}) =>{

    return(
    <div className='grid-3'>
       
        {card$.cards.map((card: any) => (
            <div className="site-card-border-less-wrapper ">
            <Card title={card.name} bordered={false} style={{ width: 300 }} >
            <p> {card.university} </p>
            <p> {card.age}</p>
            <p> {card.text}</p>
        </Card>
         </div>
        ))}
        
    </div>
        
    )
}

export default  Card_box;
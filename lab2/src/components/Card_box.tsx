import { Card } from 'antd';

const Card_box = () =>{



    return(
    <div className="site-card-border-less-wrapper">
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        </Card>
    </div>
        
    )
}

export default  Card_box;
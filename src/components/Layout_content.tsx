import React, {useState} from 'react';
import Card_box from './Card_box';
import { Layout, Menu,  } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import {card$} from '../mst/stores/Cardbox.store'




const Layout_content = ({setCards, cards}:{setCards:any, cards:Array<string> }) =>{
    
    const [inputName, setInputName] = useState("");
    const [inputUniversity, setInputUniversity] = useState("");
    const [inputAge, setInputAge] = useState("");
    const [inputText, setInputText] = useState("");
 
    const submitHandler = (e:React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>):void =>{
      e.preventDefault();
      card$.addCard(inputName,inputUniversity,inputAge,inputText )
      
      setInputName("");
      setInputUniversity("");
      setInputAge("");
      setInputText("");
      
  };

    return(
        <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        
      </Menu>
    </Header>

    <Content style={{ padding: '0 50px' }}>

      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
        
          >
           <SubMenu key="sub1" icon={<UserOutlined />} title="Add new card:">
             <div className="card_input"><input className='input_field' value={inputName} onChange={(e)=> {setInputName(e.target.value);}} placeholder="Nume/prenume"  type="text" /></div>
             <div className="card_input"><input className='input_field' value={inputUniversity} onChange={(e)=> {setInputUniversity(e.target.value);}} placeholder="Universitate"  type="text" /></div>
             <div className="card_input"><input className='input_field' value={inputAge} onChange={(e)=> {setInputAge(e.target.value);}} placeholder="Varsta"  type="text" /></div>
             <div className="card_input"><input className='input_field' value={inputText} onChange={(e)=> {setInputText(e.target.value);}} placeholder="Text"  type="text" /></div>
             <div className="card_input"> <button onClick={submitHandler} className="button-3" type="submit" >Add</button></div>
            
            </SubMenu>
           
            
        
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
    
         <Card_box
         cards = {cards}
         />

        </Content>
      </Layout>
    </Content>
   
  </Layout>

    )
}



export default Layout_content;


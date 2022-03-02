import Card_box from './Card_box';
import { Layout, Menu,  } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;





const Layout_content = () =>{
  

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
           

          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          
         
         <Card_box/>
        
        
        
        </Content>
      </Layout>
    </Content>
   
  </Layout>

    )
}

export default Layout_content;
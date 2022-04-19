import React from 'react';
import { Breadcrumb, Layout, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { Routes, Route } from 'react-router-dom'

import { ROUTES } from '../Routes/Routes'
import Card_content from './Card_content'
import { StudenOverview } from './StudenOverview'


const { Footer } = Layout


const homeStudent = [
    {
      firstName: "Marin",
      secondName:"Pesterean",
      gender:"male",
      age:21,
      univerity: "UTM",
      speciality:"CR",
    },
    {
      firstName: "Marin",
      secondName:"Pesterean",
      gender:"male",
      age:21,
      univerity: "UTM",
      speciality:"CR",
    },
    {
      firstName: "Marin",
      secondName:"Pesterean",
      gender:"male",
      age:21,
      univerity: "UTM",
      speciality:"CR",
    }
  
  ]

export const ContentLayout = () => {


    return (
        <>
            <Content style={ { padding: '0 50px' } }>
                <Breadcrumb style={ { margin: '16px 0' } }>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className='site-layout-content'>

                    <Routes>
                        <Route path={ ROUTES[0].path } />
                        <Route path={ ROUTES[1].path } element={ <Card_content /> } />
                        <Route path={ ROUTES[2].path } element={ <StudenOverview students = {homeStudent} /> } />
                    </Routes>
                </div>
            </Content>
            <Footer style={ { textAlign: 'center' } }>Ant Design ©2018 Created by Ant UED</Footer>
        </>

    )
}
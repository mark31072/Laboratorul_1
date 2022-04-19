
import React, { useEffect, useState } from 'react';
import './App.css';
import { HeaderLayout } from './components/HeaderLayout';
import {ContentLayout} from './components/Content_layout'
import { Layout } from 'antd';
import { card$ } from './mst/stores/Cardbox.store';



function App() {
 

  return (
    <div className="App">
      <Layout className='layout'>
      <HeaderLayout/>
      <ContentLayout/>
      </Layout>
    </div>
  );
}

export default App;

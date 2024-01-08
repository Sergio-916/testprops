import { useState } from 'react'
import { faker } from '@faker-js/faker';
import { FixedSizeList } from "react-window";

import './App.css'
import Component2 from './components/Component2'
import Component1 from './components/Component1'

import TestClick from './components/TexsClick/TestClick';
import { Example } from './components/Chapter7/Chapter7';
import RickAndMorthy from './components/RickAndMorthy/RickAndMorthy';

import GitHubUser from './components/GitHubUser/GitHubUser';
import List from './components/List/List';



function App() {

  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img
        src={bigList[index].avatar}
        alt={bigList[index].name}
        width={50}
      />
      <p>
        {bigList[index].name} — {bigList[index].email}
      </p>
    </div>
  )

  const bigList = [...Array(5000)].map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar()
  }));

  const renderItem = item => (
    <div style={{ display: 'flex' }}>
      <img src={item.avatar} alt={item.name} width={50} />
      <p>
        {item.name} - {item.email}
      </p>
    </div>
  )

  const tahoe_peaks = [
    { name: "Freel Peak", elevation: 10891 },
    { name: "Monument Peak", elevation: 10067 },
    { name: "Pyramid Peak", elevation: 9983 },
    { name: "Mt. Tallac", elevation: 9735 }
  ]

  return (
    // <List data={bigList}
    //   renderEmpty={<p>This list is empty</p>}
    //   renderItem={renderItem}
    // />
    // <FixedSizeList
    //   height={window.innerHeight}
    //   width={window.innerWidth}
    //   itemCount={bigList.length}
    //   itemSize={50}
    // >
    //   {renderRow}
    // </FixedSizeList >

    <GitHubUser login={'Sergio-916'}/>
  )
}


export default App

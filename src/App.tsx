import React from 'react';
import './App.css';
import Card from './Card';
import Column from './Column';
import { AppContainer } from './styles';
function App() {
  return (
    <AppContainer>
      <Column text="Anim in duis ">
      <Card text="Nisi minim nisi anim voluptate ut elit ut eiusmod adipisicing excepteur incididunt."></Card>
      </Column>

      <Column text="Anim in duis ">
      <Card text="Nisi minim nisi anim voluptate ut elit ut eiusmod adipisicing excepteur incididunt."></Card>
      </Column>

      <Column text="Anim in duis ">
      <Card text="Nisi minim nisi anim voluptate ut elit ut eiusmod adipisicing excepteur incididunt."></Card>
      </Column>
    </AppContainer>
  );
}

export default App;

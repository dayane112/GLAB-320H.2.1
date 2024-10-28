import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css'


function App() {


  return (
    <>
      <Header color="#812736"/>
      <Content color="#c24e61" text="This is my first React Application!" />
      <Content color="#ed6178" practice="Wish me luck..." />
      <Content color="#ff647e" text="I think I've got it!" />
      <Footer color="#ff647e" end="Created by Diane!" />
      {/* <Footer color="#ff647e" text="Diane!" /> */}
    </>
  )
}

export default App

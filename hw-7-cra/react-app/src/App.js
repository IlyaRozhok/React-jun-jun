import Card from "./components/Card/Card";

const data = {
    title: 'hi',
    text: 'how are you?'
};

function App() {
  return (
    <div className="App">
      <Card title={data.title}/>
        <hr/>
      <Card text={data.text}/>
        <hr/>
      <Card title={data.title} text={data.text}/>
    </div>
  );
}

export default App;

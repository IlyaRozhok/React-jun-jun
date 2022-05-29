import Definitions from "./components/Definitions/Definitions";

const definitions = [
    {dt: 'one', dd: 'two', id: 1},
    {dt: 'another term', dd: 'another description', id: 2},
];


function App() {
    return (
        <div className="App">
            <Definitions data={definitions}/>
        </div>
    )
}

export default App;

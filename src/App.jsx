import './App.css';
import Card from './Card';
import data from './data';

function App() {
  return (
    <div className="app-container">
      <h1>Community Board: Developer Resources</h1>
      <div className="card-grid">
        {data.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default App;

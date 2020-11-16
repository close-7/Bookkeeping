import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PriceList from './components/PriceList'
import ViewTab from './components/ViewTab'
import { LIST_VIEW } from './utility'
// mock数据
const items = [
  {
    "id":1,
    "title":"去云南旅游1",
    "price":200,
    "date":"2018-01-10",
    "category":{
      "id":1,
      "name":"旅行1",
      "type":"outcome"
    }
  },
  {
    "id": 2,
    "title": "去云南旅游2",
    "price": 300,
    "date": "2018-01-11",
    "category": {
      "id": 1,
      "name": "旅行2",
      "type": "income"
    }
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <PriceList 
        items={items}
        onModifyItem={(item)=>{alert(item.id)}}
        onDeleteItem={(item) => { alert(item.id) }}
      />
      <ViewTab 
        activeTab={ LIST_VIEW }
        onTabChange={(view) => { alert(view) }}
      />
    </div>
  );
}

export default App;

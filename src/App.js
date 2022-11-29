import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
function App() {
  const [tableData,setTableData] = useState([])
  const [loading,setLoading] = useState(true);
  useEffect(() => {

    const fetchData = async() => {
      const data = await fetch("tableData.json");
      const json = await data.json();
      setTableData(json);
      setLoading(false);
    }
    fetchData()
    .catch(console.error) 

  }, []);
  console.log(tableData);
  if(loading){return <div>Loading....</div>}
  
  const colNames=["Name","City","Email","Joining Date","Role"]
  return (
    <div>
      <Table tableData={tableData} colNames={colNames}></Table>
    </div>
  );
}

export default App;

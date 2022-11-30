import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
function App() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("tableData.json");
      const json = await data.json();
      setTableData(json);
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, []);
  // console.log(tableData);
  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      {/* Part 01 */}
      <Table
        tableData={tableData}
        sort={["name","city","email","joining date","role"]}
        colNames={[
          {
            heading: "Name",
            value: "person.name",
          },
          {
            heading: "City",
            value: "city",
          },
          {
            heading: "Email",
            value: "email",
          },
          {
            heading: "Joining Date",
            value: "joiningDate",
          },
          {
            heading: "Role",
            value: "role",
          },
        ]}
      ></Table>

      {/* Part 02 */}

      <Table
        tableData={tableData}
        sort={["name"]}
        colNames={[
          {
            heading: "Name",
            value: "person.name",
          },
          {
            heading: "Email",
            value: "email",
          },
          {
            heading: "Role",
            value: "role",
          },
        ]}
      ></Table>

      <Table
        tableData={tableData}
        sort={["joining date","role"]}
        colNames={[
          {
            heading: "Email",
            value: "email",
          },
          {
            heading: "Joining Date",
            value: "joiningDate",
          },
          {
            heading: "Role",
            value: "role",
          },
        ]}
      ></Table>

      <Table
        tableData={tableData}
        sort={["city","role"]}
        
        colNames={[
          {
            heading: "Name",
            value: "person.name",
          },
          {
            heading: "City",
            value: "city",
          },
          {
            heading: "Joining Date",
            value: "joiningDate",
          },
          {
            heading: "Role",
            value: "role",
          },
        ]}
      ></Table>
    </div>
  );
}

export default App;

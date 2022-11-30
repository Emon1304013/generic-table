import React, { useState } from "react";
import "./Table.css";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";

const Table2 = ({ tableData, colNames,sort,loading }) => {

    const [sortedList,setSortedList] = useState(tableData)
    const [sortCol,setSortCol] = useState();
    const [sortAsc,setSortAsc] = useState(true);

    const handleSortByColumn = colName => {
        let tempSortedList = [...tableData];
        let newSortedDir = !sortAsc;

        if(colName !== sortCol){
            newSortedDir = true;
            setSortCol(colName);
        }

        if(newSortedDir){
            tempSortedList.sort((a,b)=>{
                if(a[colName] < b[colName]){
                    return -1;
                }
                if(a[colName] > b[colName]){
                    return 1
                }
                else{
                    return 0
                }
            })
        }
        else{
            tempSortedList.sort((a,b)=>{
                if(a[colName] < b[colName]){
                    return 1;
                }
                if(a[colName] > b[colName]){
                    return -1
                }
                else{
                    return 0
                }
            })
        }
        setSortAsc(newSortedDir)
        setSortedList(tempSortedList)
    }

  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            {colNames.map((item, index) => (
              <TableHeading key={index} item={item} handleSortByColumn={handleSortByColumn} sort={sort} loading={loading}></TableHeading>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedList?.map((item, index) => (
            <TableRow key={index} item={item} column={colNames} sortedList={sortedList}></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;

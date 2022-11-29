import React, { useEffect, useState } from "react";
import "./Table.css";
import arrow from "../assets/ArrowsDownUp.png";
import TableRow from "./TableRow";
import logo from '../assets/unsplash_rDEOVtE7vOs.png'

const Table = ({ tableData, colNames }) => {

    const [sortedList,setSortedList] = useState(tableData)
    const [sortCol,setSortCol] = useState();
    const [sortAsc,setSortAsc] = useState(true);
    console.log(sortedList);

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



  // .map(data => console.log(data))
  return (
    <div>
      {tableData?.length > 0 && (
        <table id="customers">
          <thead>
            <tr>
              {colNames.map((headerItem, index) => (
                <td key={index}>
                  <div>
                    <span>{headerItem}</span> <img onClick={()=> handleSortByColumn(headerItem.toLowerCase())} src={arrow} alt="" />
                  </div>
                </td>
              ))}
            </tr>
          </thead>

          <tbody>
            {Object.values(sortedList).map((obj, index) => (
              <tr key={index}>
                {Object.values(obj).map((value, index2) => (
                  <td key={index2}>
                    {typeof value === "object"
                      ? <span className="name">
                        {
                            Object.values(value)
                            .reverse()
                            .map((v, i) => 
                            <span key={i}>
                              {v.includes(".jpg")? <img src={logo} alt=""></img> : v}
                          </span>)
                        }
                      </span>
                      : value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;

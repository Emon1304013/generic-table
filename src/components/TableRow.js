import logo from "../assets/unsplash_rDEOVtE7vOs.png";
const TableRow = ({ item, column }) => (
  <tr>
    {column.map((colItem, index) => {
      if (colItem.value.includes(".")) {

        const itemSplit = colItem.value.split(".");
        return (
          <td key={index}>
            <div>
              <img src={logo} alt="" />
              {item[itemSplit[0]][itemSplit[1]]}
            </div>
          </td>
        );
      }

      return (
        <td key={index}>{item[`${colItem.value}`].includes('.com') ? <a>{item[`${colItem.value}`]}</a>:<>{item[`${colItem.value}`]}</>}</td>
        
      )
    })}
  </tr>
);
export default TableRow;

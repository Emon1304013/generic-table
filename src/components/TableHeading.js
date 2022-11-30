import arrow from "../assets/ArrowsDownUp.png";
const TableHeading = ({ item, handleSortByColumn, sort, loading }) => {
  
    
  return (
    <th>
      <div>
        {sort.includes(item.heading.toLowerCase()) ? (
          <>
            <>
              <span>{item.heading}</span>
              <img
                onClick={() => handleSortByColumn(item.heading.toLowerCase())}
                src={arrow}
                alt=""
              />
            </>
          </>
        ) : (
          <><span>{item.heading}</span></>
        )}
      </div>
    </th>
  );
};

export default TableHeading;

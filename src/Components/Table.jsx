import TableCard from "./TableCard";

function Table({ data = [] }) {
  console.log(data);
  return (
    <table className="min-w-full divide-y divide-white-200 mt-10 bg-white text-black border-2">
      <thead >
        <tr>
          <th className="p-2">Name</th>
          <th className="p-2">Description</th>
          <th className="p-2">Instructor</th>
          <th className="p-2">Instrument</th>
          <th className="p-2">Day Of Week</th>
          <th className="p-2">No Of Students</th>
          <th className="p-2">Price</th>
          <th className="p-2">Status</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => {
          return (
            <TableCard
              key={item.id}
              Name={item.Name}
              Description={item.Discription}
              Instructor={item.Instructor}
              Instrument={item.Instrument}
              Day_of_the_Week={item.Day_of_the_Week}
              No_of_Students={item.No_of_Students}
              Price={item.Price}
              Status={item.Status}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;

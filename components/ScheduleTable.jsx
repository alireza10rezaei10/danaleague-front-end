const ScheduleTable = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-white p-4">
      <table className="min-w-full table-auto text-gray-700">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-right">زمان</th>
            <th className="py-2 px-4 text-right">رویداد</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-200`}
            >
              <td className="py-2 px-4">{item.TIME}</td>
              <td className="py-2 px-4">{item.EVENT}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;

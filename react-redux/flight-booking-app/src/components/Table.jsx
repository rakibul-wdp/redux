import TableHead from "./TableHead";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <table className="booking-table">
      <TableHead />
      <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
        {/* <!-- Row 1 --> */}
        <TableRow />

        {/* <!-- Row 2 --> */}
        <TableRow />

        {/* <!-- Row 3 --> */}
        <TableRow />
      </tbody>
    </table>
  );
};

export default Table;

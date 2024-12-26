function Table() {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="px-2 py-4 text-center">Image</th>
          <th className="px-2 py-4 text-center">Name</th>
          <th className="px-2 py-4 text-center">Price</th>
          <th className="px-2 py-4 text-center">Qty</th>
          <th className="px-2 py-4 text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-4">
            <div className="flex items-center justify-center">
              <img
                src="/assets/images/ak1bg.png"
                alt="image"
                className="w-28 mobile:w-16"
              />
            </div>
          </td>
          <td className="px-2 py-4 text-center">Glock</td>
          <td className="px-2 py-4 text-center">$500</td>
          <td className="px-2 py-4 text-center">2</td>
          <td className="px-2 py-4 text-center">Delete</td>
        </tr>
        <tr>
          <td className="py-4">
            <div className="flex items-center justify-center">
              <img
                src="/assets/images/ak1bg.png"
                alt="image"
                className="w-28 mobile:w-16"
              />
            </div>
          </td>{" "}
          <td className="px-2 py-4 text-center">Glock</td>
          <td className="px-2 py-4 text-center">$500</td>
          <td className="px-2 py-4 text-center">2</td>
          <td className="px-2 py-4 text-center">Delete</td>
        </tr>{" "}
      </tbody>
    </table>
  );
}

export default Table;

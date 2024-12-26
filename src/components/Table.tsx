import { useCart } from "../context/CartContext";
import { RiDeleteBin3Line } from "react-icons/ri";

function Table() {
  const { cartItems, deleteCartItem } = useCart();

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="px-2 py-4 text-center">Image</th>
          <th className="px-2 py-4 text-center">Name</th>
          <th className="px-2 py-4 text-center">Price</th>
          <th className="px-2 py-4 text-center">
            <RiDeleteBin3Line />
          </th>
        </tr>
      </thead>
      <tbody>
        {cartItems.length > 0 ? (
          cartItems.map(
            (item: {
              id: string;
              image: string;
              name: string;
              price: number;
            }) => (
              <tr key={item.id}>
                <td className="py-4">
                  <div className="flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 mobile:w-16"
                    />
                  </div>
                </td>
                <td className="px-2 py-4 text-center">{item.name}</td>
                <td className="px-2 py-4 text-center">${item.price}</td>
                <td
                  className="px-2 py-4 text-center"
                  onClick={() => deleteCartItem(item.id)}
                >
                  <RiDeleteBin3Line />
                </td>
              </tr>
            )
          )
        ) : (
          <tr>
            <td colSpan={5} className="text-center py-4">
              Your cart is empty
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;

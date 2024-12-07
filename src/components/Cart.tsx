import { ShoppingCart, X } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { clearCart, removeFromCart, toggleCart, updateQuantity } from '../store/slices/cartSlice';
import { formatPrice } from '../utils/formatPrice';

export const Cart = () => {
  const dispatch = useAppDispatch();
  const { items, isOpen } = useAppSelector((state) => state.cart);

  const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2"
        onClick={() => dispatch(toggleCart())}
      >
        <ShoppingCart className="h-6 w-6" />
        <span className="text-sm">
          {items.length} {items.length === 1 ? 'item' : 'items'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-8 w-96 bg-white shadow-lg rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Cart</h3>
            <button onClick={() => dispatch(toggleCart())}>
              <X className="h-5 w-5" />
            </button>
          </div>

          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: parseInt(e.target.value),
                            })
                          )
                        }
                        className="w-16 p-1 border rounded"
                      />
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-red-500"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">{formatPrice(total)}</span>
                </div>
                <button
                  onClick={() => dispatch(clearCart())}
                  className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
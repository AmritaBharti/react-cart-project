import React from "react";
import CartItem from './CartItems';

const Cart = (props) => {
    const { products } = props
    return (
        <div className="cart">
            {products.map((product) => {
                return (
                    <CartItem
                        product={product}
                        key={product.id}
                        onIncreaseQuantity={props.onIncreaseQuantity} //just giving reference to the function
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteProduct={props.onDeleteProduct}
                    />
                )
            })}
        </div>
    );
}

export default Cart;

// render() {
//     const arr = [1, 2, 3, 4, 5, 6, 7];
//     return (
//         <div className="cart">
//             {arr.map((item) => {
//                 return item + 5
//             })

//             }
//         </div>

//     );

// }
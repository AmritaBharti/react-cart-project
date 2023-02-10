import React from "react";
import CartItem from './CartItems';

class Cart extends React.Component {
    constructor() {
        super(); // to call constructor of the parent class because here we have inherited the React.Compoenet
        this.state = {
            products:[
                {
                    id : 1,
                    price: 9999,
                    title: 'Phone',
                    qty: 1,
                    img: ''
                },
                {
                    id : 2,
                    price: 110000,
                    title: 'Laptop',
                    qty: 1,
                    img: ''
                },
                {
                    id : 3,
                    price: 4999,
                    title: 'Watch',
                    qty: 1,
                    img: ''
                }
            ]
        }
        
    }

    render() {
        const {products} = this.state
        return (
            <div className="cart">
               {products.map( (product)=>{
                return <CartItem product={product} key={product.id}/>
               } )} 
            </div>

        );

    }

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
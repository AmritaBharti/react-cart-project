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

    handleIncreaseQuantity = (product) => {
        console.log('please increase the quantity of the product', product);
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products:products
        })

    }

    handleDecreaseQuantity = (product) => {
        console.log('please decrease the quantity of the product', product);
        const {products} = this.state;
        const index = products.indexOf(product);

        if( products[index].qty == 0){
            return ;
        }

        products[index].qty -= 1;

        this.setState({
            products:products
        })
    }

    render() {
        const {products} = this.state
        return (
            <div className="cart">
               {products.map( (product)=>{
                return (
                    <CartItem 
                    product={product}
                     key={product.id}
                     onIncreaseQuantity ={this.handleIncreaseQuantity} //just giving reference to the function
                     onDecreaseQuantity = {this.handleDecreaseQuantity}
                     />
                )     
               })} 
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
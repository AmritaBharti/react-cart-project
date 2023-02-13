
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar'


class App extends React.Component {
  constructor() {
    super(); // to call constructor of the parent class because here we have inherited the React.Compoenet
    this.state = {
      products: [
        {
          id: 1,
          price: 9999,
          title: 'Phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1306&q=80'
        },
        {
          id: 2,
          price: 110000,
          title: 'Laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80'
        },
        {
          id: 3,
          price: 4999,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        }
      ]
    }

  }

  handleIncreaseQuantity = (product) => {
    console.log('please increase the quantity of the product', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products: products
    })

  }

  handleDecreaseQuantity = (product) => {
    console.log('please decrease the quantity of the product', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty == 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products: products
    })
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id != id)
    this.setState({
      products: items
    })
  }
  
  getCartCount =()=>{
    const {products}  = this.state;

    let count = 0;

    products.forEach((product) => { count += product.qty})

    return count;
  }

  getCartTotal = () =>{
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product)=> {
      cartTotal = cartTotal + product.qty * product.price
    })
    return cartTotal;
  }

  render() {
    const{products}=this.state
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity} //just giving reference to the function
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ {padding:10 , fontSize:20} }>TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;


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
          img: ''
        },
        {
          id: 2,
          price: 110000,
          title: 'Laptop',
          qty: 1,
          img: ''
        },
        {
          id: 3,
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
      </div>
    );
  }
}

export default App;

import React from "react";

//class component -> we are inheriting using extends keywords from the class called component inside the react package
const CartItem = (props) => {
    // // we will define here state to this component -> it is just way to store local data for the component -> it is just plain js object
    // //by defining constructore we can add state to the component
    // constructor() {
    //     super(); // to call constructor of the parent class because here we have inherited the React.Compoenet
    //     this.state = {
    //         price: 999,
    //         title: 'Phone',
    //         qty: 1,
    //         img: ''
    //     }
    //     //this.increaseQunatity = this.increaseQunatity.bind(this);
    // }

    // increaseQunatity=()=>{
    //    console.log('this.state',this.state) // when we attach event listener we are passing a reference to our increaseQunatity function and when it internally calls it the value of this get lost -> we can solve this by binding -> binding .bind()
    //     // another way is we can bind this in constructor function
    //     //or we can use arrow function it will automatically bind the value of this
        
    //     //this.state.qty +=1; // it will incr object qty but it will not shown in ui -> to show in ui -> we have to incr qty in state not only on object and re-render it
    //     //by using set state function two way to do it

    //     // //set state form 1 -> we will give an object
    //     // this.setState(  // this set state function call will triger re-render of the component with update value 
    //     //     {
    //     //         qty:this.state.qty + 1  // shallow merging -> it will not tough other property
    //     //     },() =>{} call function as second argument
    //     // ) ; //it is getting inherited from component class in react
        
    //     //// set state form 2 -> we will pass call back function -> we can use when we reruire previous state too
    //     this.setState((prevState)=>{
    //         return {
    //             qty :prevState.qty + 1
    //         }
    //     });  //it is getting inherited from component class in react
    // }

    // decreaseQunatity=()=>{
    //     const {qty}= this.state
    //     if(qty == 0){
    //         return;
    //      }
    //     this.setState((prevState)=>{
    //             return {
    //                 qty : prevState.qty - 1
    //             }

    //     });  
    // }

    //for a class component to be a react component we need to give render method and that render method will return JSX which will describe the ui for the component
 
        const { price, title, qty } = props.product; // distructure the object
        const {product, onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = props;
        return (

            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />

                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
                            onClick={()=> onIncreaseQuantity(product)}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                            onClick={()=> onDecreaseQuantity(product)}
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://as2.ftcdn.net/v2/jpg/00/98/26/11/1000_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
                            onClick={()=>onDeleteProduct(product.id) }
                        />
                    </div>

                </div>

            </div>
        );
    

}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'

    }
}

export default CartItem;
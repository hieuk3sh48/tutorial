import React,{Component} from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component{
    constructor(props){
        super(props);
        this.state={
            cartItems:[]
        }

    }
    setCart(product){
        console.log(product);
        this.setState({
            cartItems:this.state.cartItems.concat(product)
        })
    }
    render(){
        return(
            <CartContext.Provider
                value={{
                    cartItems:this.state.cartItems,
                    setCart:this.setCart.bind(this)
                }}
            >
                {this.props.children}
            </CartContext.Provider>
        )
    }
}
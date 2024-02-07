import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import './CartView.scss'

const CartView = () => {

    const { cart, total, removeItem, totalQuantity } = useCart()

    if (totalQuantity === 0){
        return(
            <div className="noProducts">
                <h1 className="noProducts__tittle">No hay productos en el carrito</h1>
                <Link className="noProducts__link" to='/'>Ver productos</Link>
            </div>
        )
    }

    return (
        <div className="cartProducts">
            <h1 className="cartProducts__tittle">CART</h1>
            <section className="cartProducts__cardContainer" >
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id} className="cartProducts__card">
                            <h3 className="cartProducts__cardTittle">{prod.name}</h3>
                            <h4>Cantidad: {prod.quantity}</h4>
                            <h4>Precio por unidad: ${prod.price}</h4>
                            <h4>Subtotal: ${prod.quantity * prod.price}</h4>
                            <button onClick={() => removeItem(prod.id)}>Remover</button>
                        </div>
                    )
                })
            }
            </section>
            <section>
                <h1 className="cartProducts__total">Total: ${total}</h1>
            </section>
            <section >
                <Link className="cartProducts__checkout" to='/checkout' >Checkout</Link>
            </section>
        </div>
    )
}

export default CartView
import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

	function removeFromCart(name) {
		updateCart(cart.filter(plant => plant.name !== name))
	}

	return (
		<div className='lmj-cart-container'>
			{isOpen ? (
				<div className='lmj-cart lmj-cart-opened'>
					<button
						className='lmj-cart-toggle-button'
						onClick={() => setIsOpen(false)}
					>
						Fermer
					</button>
					{cart.length > 0 ? (
						<div>
							<h2>Panier</h2>
							<ul>
								{cart.map(({ name, price, amount }, index) => (
									<div key={`${name}-${index}`}>
										{name} {price}€ x {amount}
										<button className="lmj-cart-removeBtn" onClick={() => removeFromCart(name)}>Retirer</button>
									</div>
								))}
							</ul>
							<h3>Total :{total}€</h3>
							<button onClick={() => updateCart([])}>Vider le panier</button>
						</div>
					) : (
						<div>Votre panier est vide</div>
					)}
				</div>
			) : (
				<div className='lmj-cart lmj-cart-closed'>
					<button
						className='lmj-cart-toggle-button'
						onClick={() => setIsOpen(true)}
					>
						Ouvrir le Panier
					</button>
				</div>
			)}
		</div>
	)
}

export default Cart

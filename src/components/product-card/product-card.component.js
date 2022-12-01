import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './product-card.styles.scss'
import Button from '../button/button.component';
import { UserContext } from '../../contexts/user.context';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product})=>{
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    const {currentUser} = useContext(UserContext)
    const navigate = useNavigate()
   
    const onNavigateHandler = () => {
        navigate("/sign-in-page")
       };

    const addProductToCart =()=> addItemToCart(product);
return(
    <div className='product-card-container'>
    <img src={imageUrl} alt={`${name}`}/>
    <div className='footer'>
     <span className='name'>{name}</span>
     <span className='price'>₹{price}</span>
    </div>
    {currentUser?
 <Button buttonType='inverted' onClick = {addProductToCart}>Add to card</Button>:
 <Button buttonType='inverted' onClick = {onNavigateHandler}>Add to card</Button>}
    </div>
)
}

export default ProductCard;
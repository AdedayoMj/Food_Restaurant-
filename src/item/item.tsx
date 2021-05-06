import Button from "@material-ui/core/Button"
//types
import { CartItemType } from '../type'

//styles
import {Wrapper} from "./item.styles"

type Props={
    item:CartItemType,
    handleAddToCart:(clickedItem:CartItemType)=>void;
}

const Item:React.FC<Props>=({item,handleAddToCart})=>(
    <Wrapper>
        <img src={item.image} alt={item.title}/>
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>€{item.price}</h3>
        </div>

        <Button onClick={()=>handleAddToCart(item)}>Add to Cart</Button>
    </Wrapper>
)

export default Item;
//style
import { Wrapper } from './item.style';
import Button from '@material-ui/core/Button';
//types
import { CartItemType } from '../App';

type Props = {
    item: CartItemType;
    handleAndToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAndToCart }) => {
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${ item.price }</h3>
        </div>
        <Button onClick={()=> handleAndToCart(item)}>
            Add to Cart
        </Button>
    </Wrapper>
}

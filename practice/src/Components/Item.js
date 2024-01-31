import { useState } from 'react';
import './Item.css';

function Item(props) {
    const [name, setName] = useState(props.name);

    function clickHandler() {
        setName("Pizza");
        console.log('clicked');
    }

    return (
        <div>
            <p className='item'>{name}</p>
            <button onClick={clickHandler}>Add To Cart</button>
        </div>
    );
}

export default Item;

import CartItem from "../CartItem/CartItem";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React, { useState } from "react";
import { Form } from "../Form/Form";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
//types
import { CartItemType } from "../type";

//styles
import { Wrapper } from "./Cart.styles";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  handleReset: () => void;
};

const Cart: React.FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
  handleReset,
}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [transactionComplete, setTransactionComplete] = useState(false);
  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };
  const changeState = () => {
    setTransactionComplete(true);
  };

  if (transactionComplete) {
    return (
      <Wrapper>
        {" "}
        <div className="change">
          <div><CheckCircleIcon color="primary" style={{fontSize:60}}/></div>
          <div>Thank you, we will contact you to confirm your reservation</div>
        </div>
      </Wrapper>
    );
  }

  if (isModalVisible) {
    return (
      <Wrapper>
        <div onClick={toggleModal}>
          <ArrowBackIcon color="primary" />
          <h2>Total: €{calculateTotal(cartItems).toFixed(2)}</h2>
        </div>
        <div>
          <Form
            totalMoney={calculateTotal(cartItems).toFixed(2)}
            cartItems={cartItems}
            handleReset={handleReset}
            changeState={changeState}
          />
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>No items in Cart.</p>
          <p>Add to cart to reserve order.</p>{" "}
        </div>
      ) : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: €{calculateTotal(cartItems).toFixed(2)}</h2>
      <div className="checkout">
        {cartItems.length === 0 ? null : (
          <Button
            size="large"
            disableElevation
            variant="contained"
            color="secondary"
            onClick={toggleModal}
          >
            Checkout To Reserve
          </Button>
        )}
      </div>
    </Wrapper>
  );
};

export default Cart;

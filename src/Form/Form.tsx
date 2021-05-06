import React from "react";
import { RegisterForm } from "../Form/RegisterForm";
//styles
import { Wrapper } from "./Form.styles";
//types
import { CartItemType } from "../type";
import emailjs from "emailjs-com";

type Props = {
  totalMoney: string;
  cartItems: CartItemType[];
  handleReset: () => void;
  changeState: () => void;
};

export const Form: React.FC<Props> = ({
  totalMoney,
  cartItems,
  handleReset,
  changeState,
}) => {
  //  const  sendFeedback =(templateId, variables)=> {
  //   window.emailjs.send(
  //     'gmail', templateId,
  //     variables
  //     ).then(res => {
  //       console.log('Email successfully sent!')
  //     })
  //     // Handle errors here however you like, or use a React error boundary
  //     .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  //   }
  return (
    <Wrapper>
      <div>
        <p>Add your contact details</p>
      </div>
      <RegisterForm
        onSubmit={async ({ email, name, phoneNumber }) => {
          const reserveData = cartItems?.map((item) => {
            const listData = {
              title: item.title,
              amount: item.amount,
              price: item.price,
            };
            const arrayMessage = JSON.stringify(listData, null, "...");

            return arrayMessage;
          });

          const newData = {
            reserveData,
            phoneNumber: phoneNumber,
            totalMoney: totalMoney,
          };
          const message_html = JSON.stringify(newData, null, "...");

          await emailjs
            .send(
              "gmail",
              "template_AyrkteIw",
              {
                message_html: message_html,
                from_name: name,
                reply_to: email,
              },
              "user_463EFIKesNAfVPVbvE68o"
            )
            .then(
              (result) => {
                console.log(result.text);
                emailjs.send(
                  "gmail",
                  "template_8qvi2ln",
                  {
                    to_name: name,
                    reply_from:email,
                    reply_to: "noreply@kramitastbytes.com",
                  },
                  "user_463EFIKesNAfVPVbvE68o"
                );
              },
              (error) => {
                console.log(error.text);
              }
            );
          changeState();
          handleReset();
        }}
      />
    </Wrapper>
  );
};

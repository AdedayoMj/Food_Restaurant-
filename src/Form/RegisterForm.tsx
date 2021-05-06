import React, { useState } from "react";
import { MyField } from "./Field";
import { Formik, Form, Field } from "formik";
import Button from "@material-ui/core/Button";
import Recaptcha from "react-recaptcha";
//stytles
import { FormWrapper } from "./Register.styles";

interface Values {
  name: string;
  email: string;
  phoneNumber: string;
}
interface Props {
  onSubmit: (values: Values) => void;
}


export const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  const [isVerified, setIsVerified] = useState(false);
 const  recaptureLoaded=()=>{
    console.log('recaptcha is loaded')
}

  return (
    <FormWrapper>
      <Formik
        initialValues={{
          name: "",
        email: "",
          phoneNumber: "",
        }}
        onSubmit={(values) => {
          if (
            values.email.length > 0 &&
            values.name.length > 0 &&
         
            values.phoneNumber.length > 0
          ) {
            if (isVerified) {
              onSubmit(values);
              
            } else {
              alert("Please verify that you are human");
            }
          } else {
            alert("Field must not be empty");
          }
        }}
      >
        {({ values }) => (
          <Form>
            <div>
              <Field
                name="name"
                placeholder="Name"
                component={MyField}
              />
            </div>
            

            <div>
              <Field name="email" placeholder="Email" component={MyField} />
            </div>

            <div>
              <Field
                name="phoneNumber"
                placeholder="Phone number"
                component={MyField}
              />
            </div>
            <Recaptcha
              sitekey="6LcqU8caAAAAAHnx69OnCW6o4wELbX5pwYQEGyIC"
              render="explicit"
              onloadCallback={recaptureLoaded}
              verifyCallback={(response)=>{
                if(response){
                    setIsVerified(true);
                }
              }}
            />
            <div className="checkout">
              <Button
                size="large"
                disableElevation
                variant="contained"
                color="primary"
                type="submit"
              >
                Send
              </Button>
            </div>
           
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};

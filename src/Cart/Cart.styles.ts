import styled from "styled-components";
import { device } from "../Util/Resizing";

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;

  @media ${(device.mobileL, device.mobileM, device.mobileS)} {
    max-width: 340px;
  }

  @media ${(device.desktop, device.laptop, device.tablet)} {
    min-width: 500px;
  }

  .checkout {
    padding-top: 40px;
    justify-items: center;
    align-items: center;
    justify-content: space-between;
   
  }
  
  .change {
    padding-top: 40px;
    justify-items: center;
    align-items: center;
    justify-content: center;
  }
`;

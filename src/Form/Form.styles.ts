import styled from "styled-components";
import { device } from "../Util/Resizing";


export const Wrapper = styled.div`
@media ${(device.mobileL, device.mobileM, device.mobileS)} {
    min-width: 340px;
  }

  @media ${(device.desktop, device.laptop, device.tablet)} {
    min-width: 500px;
  }
`

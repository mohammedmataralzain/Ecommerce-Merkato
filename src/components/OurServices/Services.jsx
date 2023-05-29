import { Wrapper } from "./Services.styles"
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

function Services() {
  return (
    <Wrapper>
        <div className="container">
            <div className="grid grid-three-column">
                <div className="service-1">
                    <div>
                        <TbTruckDelivery className="icon"/>
                        <h3>Super fast and free delivery</h3>
                    </div>
                </div>

                <div className="service-2">
                    <div className="service-column-2">
                        <div>
                            <MdSecurity className="icon"/>
                            <h3>Non-contact Shipping</h3>
                        </div>
                    </div>
                    <div className="service-column-2">
                        <div>
                            <GiReceiveMoney className="icon"/>
                            <h3>oney-back Guaranteed</h3>
                        </div>
                    </div>
                </div>

                <div className="service-3">
                    <div>
                        <RiSecurePaymentLine className="icon"/>
                        <h3>Super Secure Payment System</h3>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Services
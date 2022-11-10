import React from "react";
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox } from "cdbreact";
const Footer = () => {
  return (
    <div>
      <CDBFooter className="shadow">
        <CDBBox
          display="flex"
          justifyContent="between"
          alignItems="center"
          className="mx-auto py-4 flex-wrap"
          style={{ width: "80%" }}
        >
          <CDBBox display="flex" alignItems="center">
            <img
              className="img-fluid rounded-circle me-3"
              style={{ height: "50px" }}
              src="https://png.pngitem.com/pimgs/s/316-3165497_plumbing-png-transparent-png.png"
              alt=""
            />
            <small className="ml-2">
              &copy; Mr. Plumber 2022. All rights reserved.
            </small>
          </CDBBox>
          <CDBBox display="flex">
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="github" />
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBFooter>
    </div>
  );
};

export default Footer;

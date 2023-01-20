import React from "react";
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from "cdbreact";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <CDBFooter className="shadow">
        <CDBBox
          justifyContent="between"
          alignItems="center"
          className="mx-auto py-4 flex-wrap"
          style={{ width: "80%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a
                href="/"
                className="d-flex align-items-center p-0 text-dark text-decoration-none"
              >
                <img
                  className="img-fluid rounded-circle me-3"
                  style={{ height: "50px" }}
                  src="https://png.pngitem.com/pimgs/s/316-3165497_plumbing-png-transparent-png.png"
                  alt=""
                />
                <span className="ml-3 h5 font-weight-bold">Mr. Plumber</span>
              </a>
              <p className="my-3" style={{ width: "250px" }}>
                We are creating High Quality Resources and tools to Aid
                developers during the developement of their projects
              </p>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Devwares
              </p>
              <CDBBox
                flex="column"
                display="flex"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <a>Resources</a>
                <a >About Us</a>
                <a >Contact</a>
                <a >Blog</a>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Help
              </p>
              <CDBBox
                display="flex"
                flex="column"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <a >Support</a>
                <a >Sign Up</a>
                <a >Sign In</a>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Products
              </p>
              <CDBBox
                display="flex"
                flex="column"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <a >Windframe</a>
                <a >Loop</a>
                <a >Contrast</a>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <CDBBox
            display="flex"
            justifyContent="center"
            style={{ width: "100%" }}
            className="mx-auto mt-4"
          >
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
          <small className="text-center mt-5">
            &copy; Devwares, {year} All rights reserved.
          </small>
        </CDBBox>
      </CDBFooter>
    </div>
  );
};

export default Footer;

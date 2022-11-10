import React from "react";
import { useTitle } from "../../Hooks/UseTitle/UseTitle";
import Accordion from "react-bootstrap/Accordion";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div style={{ minHeight: "59vh" }} className="container my-5">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Difference between SQL and NoSQL</Accordion.Header>
          <Accordion.Body>
            The full form of SQL and NoSQL are respectively Structure Query
            Language and No Structured Query Language. These are types of
            database. SQL follow tabular format whereas NoSQL follow collection
            format. These differences are from structural viewpoint. NoSQL is
            used to maintain huge volumes of data, real time live streaming,
            microservices etc. SQL is relational and NoSQL is non relational,
            SQL has a predefined schemas but NoSQL is dynamic.SQL is vertically
            scalable but NoSQL is horizontally scalable. MySQL follow SQL and
            MongoDB follow NoSQL.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What is JWT, and how does it work?
          </Accordion.Header>
          <Accordion.Body>
            JWT stands for JSON Web Token. Where JSON is JavaScript Object
            Notation. It is an open standard to share security information
            between two parties client and server side. JWT contains encoded
            JSON objects, including a set of claims. It is signed by a
            cryptographic algorithm and can not alter after signed. JWT is a
            string have three parts separated by dots. (1) Header (2) Payload
            and (3) Signature. While a user is going to logging or signing in it
            take the user info like email, name etc (public info). Then in the
            server side it makes a token by signing with long cryptographic
            code. Then send the code to the user and stored it in the
            localStorage or http only cockie. Then it verify the user info with
            stored info for authorization purpose.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What is the difference between javascript and NodeJS?
          </Accordion.Header>
          <Accordion.Body>
            JavaScript is a scripting language whereas NodeJS is the runtime of
            JavaScript. NodeJs allows JS to run outside of the browser means
            server-side. NodeJS is vastly used in web development. JS is ans
            update version of ECMA script. It is a high level programming
            language that use OOP concept but based on prototypical inheritance.
            Javascript is used in frontend development. Nodejs is used in
            server-side/back-end development. TypedJS is a javascript framework
            and express is a Nodejs module that is imported from npm or Node
            Package Manager.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How does NodeJS handle multiple requests at the same time?
          </Accordion.Header>
          <Accordion.Body>
            NodeJS is a JavaScript runtime that allow Js to run on server side.
            Node follow single threaded mechanism. Now the question how it
            handles multiple user at a time? <br /> Imagine a shop with only a
            shopkeeper. NodeJS is the same as the shopkeeper. But the difference
            is shopkeeper have to done one after another and Node operates it at
            a time by event loop. Basically NodeJs is built with the concept of
            event driven architecture. While a user post a request node make an
            event for that user that means one user one event. Node just receive
            the request and hand over to event. This is how NodeJs handle
            multiple requests at the same time.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;

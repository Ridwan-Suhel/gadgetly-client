import React from "react";

const Blogs = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* single q & a  */}
          <div className="single-qna border rounded p-4">
            <h3>
              <li>Difference between javascript and nodejs</li>
              <p className="lead mt-3">
                Javascript is a Scripting language. Javascript is a high-level
                programming language that uses the concept of Oops but it is
                based on prototype inheritance. Javascript is a programming
                language that is used for writing scripts on the website. we can
                run javascript only in browser.
              </p>
              <p className="lead mt-3">
                Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
                engine. So we can say NodeJS is a Javascript runtime
                environment. where It is mostly used on the server-side. It is
                used in server-side development.
              </p>
            </h3>
          </div>

          {/* single q & a  */}
          <div className="single-qna border rounded p-4 mt-4">
            <h3>
              <li>
                When should you use nodejs and when should you use mongodb?
              </li>
              <p className="lead mt-3">
                MonogDB is a database system which gives us a chance to
                efficiently store documents in a database and to perform
                operations like data updates, or to search documents by some
                criterias. MongoDB offers an API library that runs within a
                Nodejs application to give you programmatic access to MongoDB so
                you can create databases and then add, query, update or delete
                data from the MongoDB database.
              </p>
              <p className="lead mt-3">
                NodeJS is a Javascript runtime environment. where It is mostly
                used on the server-side. It is used in server-side development.
              </p>
            </h3>
          </div>
          {/* single q & a  */}
          <div className="single-qna border rounded p-4 mt-4">
            <h3>
              <li>What is the purpose of jwt and how does it work?</li>
              <p className="lead mt-3">
                JWT, or JSON Web Token, is an open standard used to share
                security information between two parties. JWT allows us to
                decode, verify and generate JWT.a client and a server. Each JWT
                contains encoded JSON objects, including a set of claims. Token
                is a string of data that represents something else, such as an
                identity. In the case of authentication, a non-JWT based token
                is a string of characters that allow the receiver to validate
                the sender’s identity
              </p>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

import React from 'react';

const Blog = () => {
  return (
    <div>
      <h2 className='text-5xl font-bold text-center mb-8'>Welcome to Blogs</h2>

      <h3 className='text-2xl font-semibold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
      <p className='text-xl mt-4'>Access tokens and refresh tokens are frequently used in authentication and authorisation systems.
        A temporary token called an access token is used to access resources that are protected. Sending authenticated requests to a resource server is a popular usage for it. Access tokens are frequently given a restricted scope that outlines the resources they can be applied to. A refresh token is a token with a long lifespan that may be applied to get more access tokens. Normally, protected resources cannot be accessed directly using refresh tokens. Instead, when the previous access token expires, they are utilized to get new ones. Access tokens frequently have a smaller audience than refresh tokens.
        Typically, the client side is where these two tokens are kept. But the programmer chooses the specific location where they are maintained.In some cases, the local storage or session storage of the browser may be used to store access tokens and refresh tokens. In other cases, they could be preserved as a file on the user's device or in a database. Access tokens and refresh tokens must be kept in a safe location. If they are not adequately safeguarded, an attacker might exploit them to access restricted resources on behalf of the user. Therefore, we may take the following actions to safeguard our data and to preserve them:
        Before storing them, access tokens and refresh tokens are encrypted using a method to prevent unauthorized usage.
        Keep these tokens in a safe place.
        When they are no longer required, invalidate them.Typically, the client side is where these two tokens are kept. But the programmer chooses the specific location where they are maintained.In some cases, the local storage or session storage of the browser may be used to store access tokens and refresh tokens. In other cases, they could be preserved as a file on the user's device or in a database. Access tokens and refresh tokens must be kept in a safe location. If they are not adequately safeguarded, an attacker might exploit them to access restricted resources on behalf of the user.

      </p>

      <h3 className='text-2xl font-semibold mt-6'> Compare SQL and NoSQL databases?</h3>
      <p className='text-xl mt-4'>Relational databases, usually referred to as SQL databases, are built on a structured method of data storing. They arrange the information into rows and columns-structured tables using predetermined schemas. In order to guarantee data consistency and integrity, the schema specifies the fields, data types, and relationships between tables. For data querying and manipulation, SQL databases make use of the SQL language, which provides strong capabilities for intricate operations like joins, aggregations, and transactions. Assuring atomicity, consistency, isolation, and durability, they uphold the ACID characteristics. The ability to update hardware resources with SQL databases is vertically scalable, however scaling across numerous servers might be difficult.
        Contrarily, NoSQL databases are non-relational databases created for scalability and flexibility. They can handle key-value pairs, documents, graphs, or column families, among other types of data structures. NoSQL databases offer a more flexible method of data storage that can accommodate changing data architectures. They thrive at scaling and can manage heavy traffic loads and big volumes of data. Through distributed designs and horizontal scaling, NoSQL databases are scalable. Depending on the chosen data type, different NoSQL databases have different query languages, some of which enable SQL-like interfaces. They provide flexible schemas that let fields be added or changed without regard to predetermined structures. Availability and partition tolerance are frequently given higher priority in NoSQL databases than strict consistency, resulting in eventual consistency where changes spread and synchronize over time.
        In conclusion, SQL databases are appropriate for applications with complicated connections and transactions because they provide organized data storage, rigid schemas, ACID compliance, and robust query capabilities. NoSQL databases are the best choice for applications demanding extreme scalability and agility because they offer flexible schema design, high scalability, and effective handling of unstructured or fast changing data. The exact application requirements, data models, and scalability constraints all influence the decision between SQL and NoSQL.


      </p>

      <h3 className='text-2xl font-semibold mt-6'>What is express js? What is Nest JS?</h3>
      <p className='text-xl mt-4'>A well-known and widely used Node.js web application framework is Express.js. The process for creating web applications and APIs is direct and easy. Express.js facilitates the administration of HTTP requests, middleware implementation, routing, and response processing. By providing a flexible and lightweight framework, it enables developers to effectively construct server-side programs and APIs.
        On the other side, NestJS is a Node.js-based web application framework based on TypeScript. It aims to organize, scale, and maintainably improve server-side application development. Angular was the inspiration for NestJS, which organizes and builds applications using decorators, modules, and dependency injection. It has features like routing, middleware, dependency injection, and a sizable ecosystem of modules to facilitate development. Several transports, including HTTP and WebSockets, are supported by NestJS, which also abides by architectural patterns like MVC (Model-View-Controller) and SOLID principles.
        NestJS is a more opinionated and structured framework with additional features and patterns, whereas Express.js is simpler and more adaptable. The specific needs and preferences of the project dictate which of the two is chosen.
      </p>

      <h3 className='text-2xl font-semibold mt-6'>What is MongoDB aggregate and how does it work?</h3>
      <p className='text-xl mt-4'>Within the MongoDB database, complex data aggregation operations are carried out using the aggregate function. You can analyze and assess data by putting it through a number of stages on a set of papers. The aggregation pipeline is broken down into steps, each of which gives the documents a particular service. Examples of these stages include filtering, grouping, sorting, converting, and calculating.
        Pipeline: Make an array of stages that match the planned operation flow.
        Specify Stages: The pipeline's steps each outline an action that has to be taken with the documents. Documents are filtered using $match, groups are grouped and summarized using $group, documents are sorted using $sort, and data is reshaped using $project.
        Apply Operators: Within each step, you may use operators like $sum, $avg, $count, $push, $addToSet, and more to compute and alter the data.
        Implement the Aggregation: The aggregate function in MongoDB processes the documents through each stage of the pipeline by receiving the pipeline array.
        To get results: The last stage of the pipeline produces the whole output. The outcomes are retrievable or can be saved in a new collection for further use in analysis.
        By employing the aggregation architecture, we can effectively carry out sophisticated data analytic operations directly within MongoDB, minimizing the need for extra client-side data processing. It enables you to handle massive amounts of data, aggregate outcomes, and derive insightful knowledge from your MongoDB collections.




      </p>

    </div>
  );
};

export default Blog;

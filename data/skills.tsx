import type { StaticImageData } from "next/image";
import aws_logo from "public/assets/tech/amazon-web-services-aws-logo.png";
import css_logo from "public/assets/tech/css-logo.png";
import firebase_logo from "public/assets/tech/firebase-logo.png";
import js_framework_logo from "public/assets/tech/javascript-logo.png";
import mongo_logo from "public/assets/tech/mongo-db-logo.png";
import moralis_logo from "public/assets/tech/moralis-logo.png";
import mysql_logo from "public/assets/tech/mysql-logo.png";
import nextjs_framework_logo from "public/assets/tech/nextjs-logo.png";
import nodejs_logo from "public/assets/tech/nodejs-logo.png";
import planet_scale_logo from "public/assets/tech/planet-scale-logo.jpeg";
import postgresql_logo from "public/assets/tech/postgresql-logo.png";
import python_logo from "public/assets/tech/python-logo.png";
import rails_logo from "public/assets/tech/rails-logo.png";
import react_logo from "public/assets/tech/react-logo.png";
import redis_logo from "public/assets/tech/redis-logo.png";
import redux_logo from "public/assets/tech/redux-logo.png";
import ruby_logo from "public/assets/tech/ruby-logo.png";
import sinatra_logo from "public/assets/tech/sinatra-framework-image.png";
import sqlite_logo from "public/assets/tech/sqlite-logo.png";
import styled_components_logo from "public/assets/tech/styled-components-logo.png";
import svelte_logo from "public/assets/tech/svelte-logo.png";
import tailwind_logo from "public/assets/tech/tailwind-logo.png";
import zustand_logo from "public/assets/tech/zustand-logo.png";

export interface ISkill {
  id: number;
  name: string;
  image: string | StaticImageData;
  description: string;
  type: string;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
}

export interface ISkillGroup {
  [x: string]: ISkill[] | number;
}

export default [
  {
    "Programming-Languages": [
      {
        id: 1,
        name: "Javascript",
        image: js_framework_logo,
        type: "Language",
        description:
          "JavaScript is a high-level, interpreted scripting language that is primarily used for enhancing web page interactivity and providing online programs, including video games. It is a key component of the World Wide Web, alongside HTML and CSS, and enables dynamic content on websites. With the introduction of Node.js, JavaScript has also been used for server-side programming, extending its reach beyond the client-side. Today, many modern web applications rely on JavaScript frameworks and libraries like React, Angular, and Vue.js to facilitate building complex user interfaces. Despite its name, it is unrelated to the Java programming language.",
      },
      {
        id: 2,
        name: "Python",
        image: python_logo,
        type: "Language",
        description:
          "Python is a high-level, interpreted programming language that is widely used for general-purpose programming. It is known for its clear and readable syntax, which emphasizes readability and reduces the cost of program maintenance. Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming. It also comes with a large standard library that includes areas like internet protocols, string operations, web services tools, and operating system interfaces. Python is commonly used in data analysis, machine learning, artificial intelligence, web development, and scripting.",
      },
      {
        id: 3,
        name: "Ruby",
        image: ruby_logo,
        type: "Language",
        description:
          "Ruby is a high-level, interpreted, object-oriented programming language developed by Yukihiro Matsumoto in the mid-1990s. It is designed with a focus on simplicity, productivity, and enabling enjoyable programming, guided by the principle of least surprise, where the language should behave in such a way as to minimize confusion for experienced users. Ruby is often used for web development, and it's known for its popular framework, Ruby on Rails, which promotes the use of web standards and agile development principles. The language supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Despite being interpreted, Ruby can be made quite performant, and it is known for its elegant, readable syntax.",
      },
    ],
  },
  {
    "Libraries-Frameworks": [
      {
        id: 1,
        name: "React",
        image: react_logo,
        type: "Framework",
        description: `React is an open-source JavaScript library by Facebook for building interactive user interfaces. It emphasizes reusability with components, which are modular UI building blocks. React follows a unidirectional data flow and uses a virtual DOM to improve performance. It has a rich ecosystem with libraries like Redux and React Router, and it can be used to build mobile applications with React Native.`,
      },
      {
        id: 2,
        name: "NextJS",
        image: nextjs_framework_logo,
        type: "Framework",
        description: `Next.js is a popular React framework that enables developers to build server-side rendered (SSR) and statically generated (SSG) applications. It provides a streamlined and opinionated approach to building React applications with built-in routing and server-side rendering capabilities. Next.js allows developers to create dynamic and SEO-friendly web pages, with the ability to pre-render pages at build time or fetch data on the server. It offers features like code splitting, automatic routing, and API routes, making it easy to build performant and scalable web applications. Next.js also provides excellent support for CSS-in-JS solutions and integrates seamlessly with popular libraries and tools in the React ecosystem.`,
      },
      {
        id: 3,
        name: "Redux",
        image: redux_logo,
        type: "Library",
        description: `Redux is a JavaScript library for managing the state of an application. It provides a predictable and centralized approach to state management, commonly used with frameworks like React. Redux follows a unidirectional data flow pattern, where actions are dispatched to modify the state, and reducers handle these actions to produce a new state. By using Redux, developers can have a single source of truth for their application's state, making it easier to debug, test, and maintain the codebase. It offers a scalable solution for managing complex state logic and enables better separation of concerns in applications.`,
      },
      {
        id: 4,
        name: "React Native",
        image: react_logo,
        type: "Framework",
        description: `React Native is an open-source framework for building cross-platform mobile applications using JavaScript and React. It utilizes native components and APIs to provide a native-like user experience on both iOS and Android platforms. With a declarative programming model, developers can write code once and reuse it across platforms, saving time and effort. React Native also offers hot-reloading, allowing real-time changes without recompiling the entire application, making development efficient. Leveraging existing JavaScript skills, developers can create powerful and performant mobile apps with React Native `,
      },
      {
        id: 5,
        name: "Zustand",
        image: zustand_logo,
        type: "Library",
        description: `Zustand is a small, lightweight state management library for JavaScript applications, particularly popular in React applications. It provides a simple and intuitive API for managing state in a predictable manner. Zustand follows a similar concept to Redux but with a more streamlined and minimalistic approach. It leverages React's built-in Context API and hooks to manage and share state across components efficiently. With Zustand, developers can create stores that hold the application state and define actions to update that state. The library emphasizes simplicity, performance, and ease of use, making it a suitable choice for smaller to medium-sized projects or when a lighter state management solution is desired.`,
        width: 125,
      },
      {
        id: 6,
        name: "NodeJS",
        image: nodejs_logo,
        type: "Framework",
        description: `Node.js is an open-source JavaScript runtime built on Chrome's V8 engine. It enables developers to run JavaScript outside the browser, making it ideal for server-side applications. Node.js uses an event-driven, non-blocking I/O model for scalability and efficiency, making it popular for real-time apps, APIs, and more. Its vast ecosystem of packages via npm allows easy functionality integration. Node.js is widely used for web servers, command-line tools, desktop apps, and IoT devices, offering simplicity and seamless full-stack development with JavaScript.`,
      },
      {
        id: 7,
        name: "Svelte",
        image: svelte_logo,
        type: "Framework",
        description: `Svelte.js is a component-based JavaScript framework that allows developers to build efficient, high-performance web applications. Unlike traditional frameworks that run in the browser, Svelte shifts the heavy lifting of the application from runtime to build time. It compiles the components into highly optimized JavaScript code, resulting in smaller bundle sizes and faster loading times. Svelte uses a reactive approach, where changes in state automatically update the DOM without the need for a virtual DOM. This approach enables developers to write expressive and declarative code while achieving excellent performance. With its simplicity, performance, and small footprint, Svelte is a compelling choice for building modern web applications.`,
      },
      {
        id: 8,
        name: "Svelte Kit",
        image: svelte_logo,
        type: "Framework",
        description: `Svelte Kit is a framework for building web applications using the Svelte JavaScript framework. It extends the capabilities of Svelte by providing tools and conventions for creating full-stack applications. Svelte Kit allows developers to build server-rendered applications with client-side hydration, enabling faster initial page loads and seamless transitions between pages. It includes features like routing, server-side rendering, code-splitting, and automatic API integration. Svelte Kit simplifies the development process by offering a cohesive and opinionated framework that seamlessly integrates front-end and back-end development, making it easier to build efficient and performant web applications.`,
      },
      {
        id: 9,
        name: "Rails",
        image: rails_logo,
        type: "Framework",
        description: `Ruby on Rails, often known as Rails, is a popular web application framework written in the Ruby language. Its key philosophy is "convention over configuration," which means it provides sensible defaults to let developers focus more on application logic rather than setup. It follows the Model-View-Controller (MVC) pattern, incorporates the Don't Repeat Yourself (DRY) principle, and facilitates rapid development and prototyping. Rails provides a robust routing system, promotes test-driven development, and supports RESTful application design. A supportive community and a vast library of Ruby gems further extend its functionality. I enjoyed using this framework despite it being highly opinionated. It was a stepping stone afterall.`,
      },
      {
        id: 10,
        name: "Sinatra",
        image: sinatra_logo,
        type: "Framework",
        description:
          "Sinatra is a lightweight and highly flexible framework for Ruby. It's not as hefty as Rails, so it doesn't follow the MVC (Model-View-Controller) pattern like Rails does. Sinatra is designed for simplicity and speed, and it's an excellent tool for quickly creating simple web applications or APIs. During my time at Flatiron Coding Bootcamp I started out with this framework, eventually working my way up to Ruby on Rails",
      },
    ],
  },
  {
    "Databases-DBMS": [
      {
        id: 1,
        name: "PlanetScale",
        image: planet_scale_logo,
        type: "Database",
        description:
          "PlanetScale is a database platform built on the open-source database Vitess. It's designed to handle the scaling issues in relational databases. PlanetScale is based on the principles of the relational database MySQL and is used to create databases that can scale across multiple regions without compromising on strong consistency and high availability. One of the main features of PlanetScale is its ability to create non-blocking schema changes. This is beneficial in a production environment as it minimizes downtime.",
      },
      {
        id: 2,
        name: "Firebase",
        image: firebase_logo,
        type: "Database / Cloud Platform",
        description: `Firebase, owned by Google, is a platform that provides various tools and infrastructure needed to build apps. It provides services like analytics, databases, messaging, and crash reporting so developers can move quickly and focus on their users. Firebase offers two cloud-based, client-accessible database options that support real-time data syncing:
        
        Cloud Firestore: A flexible, scalable NoSQL cloud database for mobile, web, and server development. It keeps your data in sync across client apps through real-time listeners and offers offline support for mobile and web.

        Realtime Database: Firebase's original database, Realtime Database, is a NoSQL cloud database where data is stored as JSON and synchronized in real-time to every connected client.
        `,
      },
      {
        id: 3,
        name: "Amazon Web Services (AWS)",
        image: aws_logo,
        type: "Database / Cloud Platform",
        description: `AWS is Amazon's cloud platform, offering over 200 fully-featured services from data centers globally. It provides a broad set of products and services you can use as building blocks to run sophisticated and scalable applications. Some of its well-known services include:

        Amazon S3 (Simple Storage Service): An object storage service offering industry-leading scalability, data availability, security, and performance.

        Amazon EC2 (Elastic Compute Cloud): Provides scalable computing capacity in the Amazon Web Services (AWS) cloud.

        Amazon RDS (Relational Database Service): Makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while managing time-consuming database administration tasks.

        Amazon DynamoDB: A key-value and document database that delivers single-digit millisecond performance at any scale.
        `,
      },
      {
        id: 4,
        name: "Moralis",
        image: moralis_logo,
        type: "Database / Cloud Platform",
        description: `Moralis is a fully managed backend infrastructure platform specifically designed for building web3 applications, simplifying the process of creating blockchain-based applications (dApps). It was developed to help streamline and automate backend development for Ethereum and other blockchains.

        Key features of Moralis include:

        Automated Blockchain Data: Moralis provides real-time live queries and historical transaction queries for user accounts. Once a user is logged in, you have a real-time updated profile of their on-chain activity.

        User Management: Moralis handles all aspects of user management for your web3 application, including authentication, session management, and user metadata.

        IPFS Support: Moralis includes out-of-the-box support for the InterPlanetary File System (IPFS), which allows developers to create fully decentralized applications.

        Smart Contract Syncing: Moralis can automatically pull and sync data from smart contracts on the Ethereum network.

        Speedy Nodes: Moralis provides scalable and fast infrastructure for interacting with Ethereum, Binance Smart Chain, and other blockchains.

        Web3 API: Moralis has a robust Web3 API that can help streamline development. This includes endpoints for token balances, NFT metadata, and transactions.

        Cross-chain Compatibility: Moralis supports multiple blockchains, including Ethereum, Binance Smart Chain, Polygon, and more.
    `,
      },
      {
        id: 5,
        name: "MongoDB",
        image: mongo_logo,
        type: "NoSQL-DBMS",
        description:
          "An open-source NoSQL database with a flexible document-oriented schema. It's often used for large-scale data storage for modern web applications.",
      },
      {
        id: 6,
        name: "MySQL",
        image: mysql_logo,
        type: "RDBMS",
        description:
          "An open-source relational database management system (RDBMS) owned by Oracle. Used in many high-profile, large-scale websites, including Facebook, Twitter, and YouTube.",
      },
      {
        id: 7,
        name: "PostgreSQL",
        image: postgresql_logo,
        type: "RDBMS",
        description:
          "An advanced, open-source relational database. It is fully ACID compliant, has full support for foreign keys, joins, views, triggers, and stored procedures.",
      },
      {
        id: 8,
        name: "SQLite",
        image: sqlite_logo,
        type: "RDBMS",
        description:
          "A C library that provides a lightweight disk-based database. It allows accessing the database using a nonstandard variant of the SQL query language. Often used in mobile applications for storing data locally.",
      },
      {
        id: 9,
        name: "Redis",
        image: redis_logo,
        type: "NoSQL-DBMS",
        description:
          "An open-source, in-memory data structure store, used as a database, cache, and message broker. It supports various data structures such as strings, hashes, lists, sets, etc.",
      },
    ],
  },
  {
    Styling: [
      {
        id: 1,
        name: "Tailwind",
        image: tailwind_logo,
        type: "Style Sheet Language",
        description:
          "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. Rather than having pre-designed components, like Bootstrap or Material UI, Tailwind allows developers to design their UI by composing utility classes directly in their markup. This approach makes it highly customizable and allows for a much quicker development process once you get the hang of it. You can think of it as a 'low-level' CSS framework.",
      },
      {
        id: 2,
        name: "Styled Components",
        image: styled_components_logo,
        type: "Style Sheet Language",
        description:
          "Styled-components is a library for React and React Native that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS. This enables you to manage your CSS code in JavaScript files, providing scoping and theming capabilities and allowing you to leverage the full power of JavaScript within your styles. It's a different way of thinking about styling that ties the styles directly to your components.",
      },
      {
        id: 3,
        name: "CSS",
        image: css_logo,
        type: "Style Sheet Language",
        description:
          "CSS is a style sheet language used for describing the look and formatting of a document written in HTML or XML. It is one of the cornerstone technologies of the web and is used to stylize elements including layout, colors, and fonts. Its primary benefit is the ability to style and layout multiple pages at once.",
      },
    ],
  },
] as ISkillGroup[];

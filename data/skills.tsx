import type { StaticImageData } from "next/image";
import rails_framework_logo from "public/assets/tech/ruby-logo.png";
import react_framework_logo from "public/assets/tech/react-logo.png";
import sinatra_framework_logo from "public/assets/tech/sinatra-framework-image.png";

export interface ISkill {
  id: number;
  name: string;
  image: string | StaticImageData;
  description: string;
  type: string;
}

export default [
  {
    id: 1,
    name: "Sinatra",
    image: sinatra_framework_logo,
    type: "Framework",
    description:
      "Sinatra is a lightweight and highly flexible framework for Ruby. It's not as hefty as Rails, so it doesn't follow the MVC (Model-View-Controller) pattern like Rails does. Sinatra is designed for simplicity and speed, and it's an excellent tool for quickly creating simple web applications or APIs. During my time at Flatiron Coding Bootcamp I started out with this framework, eventually working my way up to Ruby on Rails",
  },
  {
    id: 2,
    name: "Rails",
    image: rails_framework_logo,
    type: "Framework",
    description: `Ruby on Rails, often known as Rails, is a popular web application framework written in the Ruby language. Its key philosophy is "convention over configuration," which means it provides sensible defaults to let developers focus more on application logic rather than setup. It follows the Model-View-Controller (MVC) pattern, incorporates the Don't Repeat Yourself (DRY) principle, and facilitates rapid development and prototyping. Rails provides a robust routing system, promotes test-driven development, and supports RESTful application design. A supportive community and a vast library of Ruby gems further extend its functionality. I enjoyed using this framework despite it being highly opinionated. It was a stepping stone afterall.`,
  },
  {
    id: 3,
    name: "React",
    image: react_framework_logo,
    type: "Framework",
    description: `React is an open-source JavaScript library created by Facebook for building complex, interactive user interfaces in web applications. It's known for its efficiency, flexibility, and its principle of reusability with the introduction of components. Components are the building blocks of a React application's UI. They can be defined as classes or functions, and they maintain their own state and render UI based on that state.

    React follows a unidirectional data flow, making it easier to track changes in the application and debug it. It also uses a virtual DOM to improve application performance. This is because the virtual DOM can limit the number of direct manipulations of the HTML DOM, which is a slow operation in any browser.

    React also has a vibrant ecosystem. Libraries such as Redux and React Router are commonly used in combination with React to build scalable, complex applications. Moreover, React can also be used to build mobile applications through the React Native platform.`,
  },
] as ISkill[];

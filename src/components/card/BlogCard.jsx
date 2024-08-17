import { Link } from "react-router-dom";
import ButtonToggler from "../helper/ButtonToggler";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { MdInsertComment } from "react-icons/md";
import { IoMdShare } from "react-icons/io";

const textWrapper = (text) => {
  if (text.length > 200) {
    const textChunk = text.slice(200);
    return textChunk + "   ...";
  } else {
    return text;
  }
};

const BlogCard = ({ blog }) => {
  return (
    <div className="px-6 pt-6 rounded-md border-1 bg-gray-950 flex flex-col justify-between">
      <div className="h-[350px] overflow-hidden rounded-t-md">
        <img src={blog.image} alt={blog.title} className="h-full w-full" />
      </div>
      <div className="my-5">
        {/* card details  */}
        <div className="text-white">
          <h1 className="font-semibold text-2xl italic">{blog.title}</h1>
          <p className="font-roboto mt-4">
            {textWrapper(blog.introduction)}{" "}
            <span className="italic hover:underline hover:text-orange-600 text-orange-300">
              <Link to={"#"}>see more</Link>
            </span>{" "}
          </p>
        </div>
        {/* card footer  */}
        <div className="border-t-1 mt-6 py-2">
          <div className="grid grid-cols-3  justify-center items-center justify-items-center text-xl mt-3">
            <div className=" w-28  py-1 hover:bg-white/10 rounded-md ">
              <ButtonToggler
                className={"mx-auto"}
                icon1={<AiOutlineLike className="text-center mx-auto" />}
                icon2={<AiFillLike className="text-center mx-auto" />}
                intCount={Math.random().toFixed()}
              />
            </div>
            <div className=" w-28 text-center py-1 hover:bg-white/10 rounded-md ">
              {<MdInsertComment className="text-center mx-auto" />}
            </div>
            <div className=" w-28 text-center py-1 hover:bg-white/10 rounded-md ">
              {<IoMdShare className="text-center mx-auto" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

// {
//     "title": "Efficient Ways to Write React Code: Best Practices for Developers",
//     "image": "https://images.prismic.io/turing/652ec132fbd9a45bcec81908_10_Best_Practices_for_Writing_Clean_React_Code_1_11zon_b8bfb9f45e.webp?auto=format%2Ccompress&fit=max&w=1920",
//     "introduction": "In the world of web development, React has become a go-to library for building user interfaces. However, with great power comes the responsibility to write clean, efficient, and maintainable code. Whether you're a seasoned developer or just starting out, following best practices can significantly improve your code quality and project success. Here are some key strategies to help you write more efficient React code.",
//     "sections": [
//         {
//             "title": "Keep Components Small and Focused",
//             "content": [
//                 {
//                     "subsection": "Single Responsibility Principle",
//                     "description": "Each component should ideally do one thing and do it well. This makes your code easier to understand, test, and reuse. A good rule of thumb is that if your component is growing too large, it might be time to break it down into smaller components."
//                 },
//                 {
//                     "subsection": "Functional Components Over Class Components",
//                     "description": "With the introduction of hooks in React 16.8, functional components have become more powerful. They are easier to read and understand, reduce boilerplate code, and are generally more efficient than class components."
//                 }
//             ]
//         },
//         {
//             "title": "Use React Hooks Wisely",
//             "content": [
//                 {
//                     "subsection": "Avoid Overuse of useEffect",
//                     "description": "While useEffect is a powerful hook, it can lead to unnecessary renders or side effects if not used carefully. Always ensure that dependencies are correctly listed and consider if the side effect is truly necessary or if it can be handled differently."
//                 },
//                 {
//                     "subsection": "Custom Hooks",
//                     "description": "When you find yourself repeating logic across components, it's a good idea to abstract that logic into a custom hook. This not only promotes code reuse but also keeps your components clean and focused on rendering UI."
//                 }
//             ]
//         },
//         {
//             "title": "Optimize Performance",
//             "content": [
//                 {
//                     "subsection": "Memoization",
//                     "description": "React provides hooks like useMemo and useCallback to memoize expensive calculations and functions. This can prevent unnecessary re-renders and optimize performance, especially in larger applications."
//                 },
//                 {
//                     "subsection": "Lazy Loading and Code Splitting",
//                     "description": "Use React's React.lazy and Suspense to load components lazily. This can drastically reduce the initial load time of your application by splitting your code into smaller bundles."
//                 },
//                 {
//                     "subsection": "Use React.PureComponent or React.memo",
//                     "description": "These help in preventing unnecessary renders by doing a shallow comparison of props and state. Use them when you are sure your component does not need to update every time its parent re-renders."
//                 }
//             ]
//         },
//         {
//             "title": "Write Clean and Readable Code",
//             "content": [
//                 {
//                     "subsection": "Consistent Naming Conventions",
//                     "description": "Use clear and consistent naming conventions for your components, props, and functions. This makes your code easier to navigate and maintain."
//                 },
//                 {
//                     "subsection": "Prop Types and Default Props",
//                     "description": "Use PropTypes to define the types of props your components expect. This can prevent bugs and make your code more predictable. Default props ensure that your components behave correctly even when some props are not provided."
//                 },
//                 {
//                     "subsection": "Destructure Props",
//                     "description": "Destructuring props at the start of your component makes your code cleaner and avoids repeatedly accessing this.props or props."
//                 }
//             ]
//         },
//         {
//             "title": "Effective State Management",
//             "content": [
//                 {
//                     "subsection": "Local vs. Global State",
//                     "description": "Keep your local state minimal and close to where it's needed. For global state, consider using context or state management libraries like Redux, but avoid overuse. Not every piece of state needs to be global."
//                 },
//                 {
//                     "subsection": "Reducer Pattern",
//                     "description": "For complex state logic, using the useReducer hook can be more predictable and easier to manage than multiple useState calls."
//                 }
//             ]
//         },
//         {
//             "title": "Test Your Components",
//             "content": [
//                 {
//                     "subsection": "Unit Testing with Jest",
//                     "description": "Use Jest to write unit tests for your components. This ensures that your components work as expected and helps catch bugs early in the development process."
//                 },
//                 {
//                     "subsection": "Component Testing with React Testing Library",
//                     "description": "Instead of testing implementation details, React Testing Library focuses on testing the behavior of your components, making your tests more reliable and less brittle."
//                 }
//             ]
//         },
//         {
//             "title": "Use TypeScript",
//             "content": [
//                 {
//                     "subsection": "Type Safety",
//                     "description": "Using TypeScript with React can help catch errors during development rather than at runtime. TypeScript provides type safety, autocompletion, and more robust code, making your React codebase easier to scale and maintain."
//                 },
//                 {
//                     "subsection": "Interface and Type Aliases",
//                     "description": "Define clear interfaces or type aliases for your components' props and state. This practice leads to better documentation and understanding of the expected structure of your data."
//                 }
//             ]
//         }
//     ],
//     "conclusion": "Writing efficient React code is about making smart choices in how you structure, organize, and manage your components and state. By following these best practices, you can create applications that are not only fast and scalable but also maintainable and easy to work on as your project grows. Happy coding!"
// }

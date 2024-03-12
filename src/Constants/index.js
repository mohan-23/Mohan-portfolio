import web from "../Assets/web.png";
import react from "../Assets/react.png";
import backend from "../Assets/backend.png";
import html from "../Assets/html5.png";
import css from "../Assets/css3.png";
import bootstrap from "../Assets/bootstrap.png";
import javascript from "../Assets/javascript.png";
import reactjs from "../Assets/react.png";
import nodejs from "../Assets/nodejs.png";
import python from "../Assets/python.png";
import sql from "../Assets/sql.png";
import git from "../Assets/git.png";
import trends from "../Assets/trends.png";
import todo from "../Assets/todo.png";
import Food from "../Assets/food.png";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    title: "HTML 5",
    icon: html,
  },
  {
    title: "CSS 3",
    icon: css,
  },
  {
    title: "Bootstrap",
    icon: bootstrap,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "React Js",
    icon: reactjs,
  },
  {
    title: "Node Js",
    icon: nodejs,
  },
  {
    title: "Python",
    icon: python,
  },
  {
    title: "SQLite",
    icon: sql,
  },
  {
    title: "Git",
    icon: git,
  },
];

const projects = [
  {
    name: "Nxt Trends",
    description:
      "Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..",

    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
    ],
    image: trends,
    source_code_link: "https://github.com/mohan-23/mohannxttrendz-app",
    source_diploy_link: "https://mohanknxttrendz.ccbp.tech/",
  },
  {
    name: "Todo App",
    description:
      "Web application that enables users to manage their daily tasks and to manage the time efficiently and Developed persistent todo application with CRUD operations to track list of tasks.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/mohan-23/Mohan-todo-app",
    source_diploy_link: "https://todoaddtask.ccbp.tech",
  },
  {
    name: "Food Munch",
    description:
      "Developed a responsive website for Food Store where users can see a list of food items, detailed information about the food items, offers and services. And this is all about food items.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: Food,
    source_code_link: "https://github.com/mohan-23/Mohan-food-app",
    source_diploy_link: "https://foodappinfo.ccbp.tech/",
  },
];

export { services, technologies, projects };

import { getHeaderData, getPageData } from "./data.js";
import { createMyElement } from "./create_elements.js";

//data set
const headerData = getHeaderData();
const pageData = getPageData();

//variables
const nameContent = pageData.nameContent;
const trainingDays = pageData.exercises;
const rootElement = document.querySelector("#root");

//rendering
//creating Elements
const wrapper = createMyElement("div", rootElement, "wrapper");
const header = createMyElement("header", wrapper, "header");
const logo = createMyElement("a", header, "logo", "", "", "#");
const logoImg = createMyElement("img", logo, "logo", "", headerData.logo);
const headerTitle = createMyElement("h1", header, "title", headerData.slogan);
const headerTitleStatic = createMyElement("span", headerTitle, "", "online");
const headerInfo = createMyElement("p", header, "text", headerData.shortInfo);
const banner = createMyElement("img", header, "decor", "", headerData.graphics);
const headerButton = createMyElement("button", header, "button", "Get Started");
const content = createMyElement("section", rootElement, "content");

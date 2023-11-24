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
const headerTitle = createMyElement("h1", header, "title", "online");
const headerTitleStatic = createMyElement("span", headerTitle, "", headerData.slogan);
const headerInfo = createMyElement("p", header, "text", headerData.shortInfo);
const banner = createMyElement("img", header, "decor", "", headerData.graphics);
const headerButton = createMyElement("button", header, "button", "Get Started");
const content = createMyElement("article", rootElement, "content");

renderDay(content, nameContent)

function renderDay (parentElement, nameContent) {
  const titleContent = createMyElement('h2', parentElement, "title--content", nameContent)
  parentElement.appendChild(titleContent)
  const dayWrapper = createMyElement('section', parentElement, "day-wrapper")
  
  for (let i = 0; i < trainingDays.length; i++) {
    let day = trainingDays[i]
    
    // renderDay (trainingDays[i])

    const titleDay = createMyElement('h3', dayWrapper, "title--day", day.dayName)

    for (let j = 0; j < day.typesOfExercise.length; j++ ) {
      let exercise = day.typesOfExercise[j]

      // renderExercise(day.typesOfExercise[j])
      const titleExercise = createMyElement('h4', dayWrapper, "title--exercise", exercise.nameExercise )
    }

  }
}
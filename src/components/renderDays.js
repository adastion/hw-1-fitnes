import { createMyElement } from "../create_elements.js";
import { renderDay } from "../components/renderDay.js";

export function renderDays(parentElement, nameContent, trainingDays) {
  const titleContent = createMyElement("h2", parentElement, "title--content", nameContent);
  parentElement.appendChild(titleContent);
  const dayWrapper = createMyElement("section", parentElement, "day-wrapper");

  for (let i = 0; i < trainingDays.length; i++) {
    renderDay(trainingDays[i], dayWrapper);
  }
}

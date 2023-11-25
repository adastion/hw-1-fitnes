import {createMyElement} from "../create_elements.js"
import { renderExercise } from "./renderExercise.js";

export function renderDay(day, parentElement) {
  const titleDay = createMyElement("h3", parentElement, "title--day", day.dayName);

  for (let j = 0; j < day.typesOfExercise.length; j++) {
    const exercise = day.typesOfExercise[j];
    const titleExercise = createMyElement("h4", parentElement, "title--exercise", exercise.nameExercise);

    renderExercise(parentElement, exercise);
  }
}

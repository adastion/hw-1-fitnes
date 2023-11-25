import { createMyElement } from "../create_elements.js"

export function renderExercise(parentElement, exercise) {
  const approaches = exercise.approaches;
  const exerciseList = createMyElement("ol", parentElement, "approaches");
  const aproachPreviewList = createMyElement("ul", parentElement, "gallery");

  for (let i = 0; i < approaches.length; i++) {
    const approache = approaches[i];
    const exercisesItem = createMyElement(
      "li",
      exerciseList,
      "approaches__approach",
      `${approache.approachName} 
       ${approache.weight !== undefined ? "with " + approache.weight : ""} 
       ${approache.repetitions} repetitions`
    );
    const approachPreview = createMyElement("li", aproachPreviewList, "gallery__preview");
    const pictureWrapper = createMyElement("picture", approachPreview, "");
    const source = createMyElement("source", pictureWrapper);
    source.srcset = approache.image.webp;
    const image = createMyElement("img", pictureWrapper, "", approache.image.jpg);
    image.alt = "image-preview";
    image.loading = "lazy";
  }
}

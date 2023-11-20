//data set
const headerData = getHeaderData();
const pageData = getPageData();

//variables
const nameContent = pageData.nameContent;
const trainingDays = pageData.exercises;
const rootElement = document.querySelector("#root");

//rendering
//rendering page
const wrapper = createMyElement("div", rootElement, "wrapper");
const header = createMyElement("header", wrapper, "header");
const logo = createMyElement("a", header, "logo", "", "", '#');
const logoImg = createMyElement("img", logo, "logo", "", headerData.logo, "");
const headerTitle = createMyElement("h1", header, "title", headerData.slogan, "", "");
const headerTitleStatic = createMyElement("span", headerTitle, "", "online", "", "");
const headerInfo = createMyElement("p", header, "text", headerData.shortInfo, "", "");
const banner = createMyElement("img", header, "decor", "", headerData.graphics, "");
const headerButton = createMyElement("button", header, "button", "Get Started", "", "");




// creating functions
function createMyElement(teg, parentItem, addClass = "", addCntent = "", pathImage = "", pathLink = "") {
  let Element = document.createElement(teg);
    addClass !== "" ? Element.classList.add(addClass) : null;
    Element.textContent = addCntent;
    Element.src = pathImage;
    Element.href = pathLink;
    parentItem.appendChild(Element);
  return Element;
}

function getHeaderData() {
  return {
    slogan: "Fitness",
    shortInfo: "Get fit from anywhere with our online fitness programs!",
    logo: "images/logo.svg",
    graphics: "images/bg-banner.png",
  };
}

function getPageData() {
  return {
    nameContent: "exercises",
    exercises: [
      {
        dayName: "Monday",
        exercisesDay: {
          typesOfExercise: [
            {
              nameExercises: "Deadlift",
              approaches: [
                {
                  approachName: "First approach",
                  weight: "50 kg",
                  repetitions: "10",
                },
                {
                  approachName: "Second approach",
                  weight: "40 kg",
                  repetitions: "15",
                },
                {
                  approachName: "Third approach",
                  weight: "35 kg",
                  repetitions: "12",
                },
                {
                  approachName: "Fourth approach",
                  weight: "35 kg",
                  repetitions: "12",
                },
              ],
              images: [
                {
                  jpg: "images/deadlift-01.jpg",
                  webp: "images/deadlift-01.webp",
                },
                {
                  jpg: "images/deadlift-02.jpg",
                  webp: "images/deadlift-02.webp",
                },
                {
                  jpg: "images/deadlift-03.jpg",
                  webp: "images/deadlift-03.webp",
                },
                {
                  jpg: "images/deadlift-04.jpg",
                  webp: "images/deadlift-04.webp",
                },
              ],
            },
            {
              nameExercises: "Pull-ups & Chin-ups",
              approaches: [
                {
                  approachName: "First approach",
                  repetitions: "10",
                },
                {
                  approachName: "Second approach",
                  repetitions: "15",
                },
                {
                  approachName: "Third approach",
                  repetitions: "12",
                },
                {
                  approachName: "Fourth approach",
                  repetitions: "12",
                },
              ],
              images: [
                {
                  jpg: "images/pullUpsChinUps-01.jpg",
                  webp: "images/pullUpsChinUps-01.webp",
                },
                {
                  jpg: "images/pullUpsChinUps-02.jpg",
                  webp: "images/pullUpsChinUps-02.webp",
                },
                {
                  jpg: "images/pullUpsChinUps-03.jpg",
                  webp: "images/pullUpsChinUps-03.webp",
                },
                {
                  jpg: "images/pullUpsChinUps-04.jpg",
                  webp: "images/pullUpsChinUps-04.webp",
                },
              ],
            },
          ],
        },
      },
      {
        dayName: "Tuesday",
        exercisesDay: {
          typesOfExercise: [
            {
              nameExercises: "Barbell Squats",
              approaches: [
                {
                  approachName: "First approach",
                  weight: "50 kg",
                  repetitions: "10",
                },
                {
                  approachName: "Second approach",
                  weight: "40 kg",
                  repetitions: "15",
                },
                {
                  approachName: "Third approach",
                  weight: "35 kg",
                  repetitions: "12",
                },
                {
                  approachName: "Fourth approach",
                  weight: "35 kg",
                  repetitions: "12",
                },
              ],
              images: [
                {
                  jpg: "images/barbellSquats-01.jpg",
                  webp: "images/barbellSquats-04.webp",
                },
                {
                  jpg: "images/barbellSquats-02.jpg",
                  webp: "images/barbellSquats-02.webp",
                },
                {
                  jpg: "images/barbellSquats-03.jpg",
                  webp: "images/barbellSquats-03.webp",
                },
                {
                  jpg: "images/barbellSquats-04.jpg",
                  webp: "images/barbellSquats-04.webp",
                },
              ],
            },
            {
              nameExercises: "Dumbbell Lunges",
              approaches: [
                {
                  approachName: "First approach",
                  repetitions: "10",
                },
                {
                  approachName: "Second approach",
                  repetitions: "15",
                },
                {
                  approachName: "Third approach",
                  repetitions: "12",
                },
                {
                  approachName: "Fourth approach",
                  repetitions: "12",
                },
              ],
              images: [
                {
                  jpg: "images/dumbbellLunges-01.jpg",
                  webp: "images/dumbbellLunges-01.webp",
                },
                {
                  jpg: "images/dumbbellLunges-02.jpg",
                  webp: "images/dumbbellLunges-02.webp",
                },
                {
                  jpg: "images/dumbbellLunges-03.jpg",
                  webp: "images/dumbbellLunges-03.webp",
                },
                {
                  jpg: "images/dumbbellLunges-04.jpg",
                  webp: "images/dumbbellLunges-04.webp",
                },
              ],
            },
          ],
        },
      },
    ],
  };
}

// function renderDaysTraining (renderTypeExercises, renderAproaches, renderPictures) {
//   for (let day = 0; day < trainingDays.length; day++) {
//     let trainingDay = trainingDays[day];

//     document.write(`<h3 class='title--day'>${trainingDay.dayName}</h3>`);
//     document.write(`<section class='day'>`);
// //rendering type exercise
//     renderTypeExercises(trainingDay, renderAproaches, renderPictures)
//   }
// }

// function renderDay () {

// }

// function renderTypeExercises (trainingDay, renderAproaches, renderPictures) {
// for (
//   let typeExercise = 0;
//   typeExercise < trainingDay.exercisesDay.typesOfExercise.length;
//   typeExercise++
// ) {
//     let exercise = trainingDay.exercisesDay.typesOfExercise[typeExercise];
//     document.write(`<h4 class='title--exercise'>${exercise.nameExercises}</h4>`);
//     document.write(`<ol class='approaches'>`);
// //approach
//     renderAproaches(exercise)
//     document.write(`</ol>`);
//     document.write(`<ul class='gallery'>`);
// //rendering picture preview
//     renderPictures(exercise)
//       document.write(`</ul>`);
//     }
//   document.write(`</section>`);
// }

// function renderAproaches (exercise) {
// for (let i = 0; i < exercise.approaches.length; i++) {
//   let approach = exercise.approaches[i];
//   document.write(`<li class='approaches__approach'>
//                         ${approach.approachName}
//                         ${
//                           approach.weight !== undefined
//                             ? "with " + approach.weight
//                             : ""
//                         }
//                         ${approach.repetitions} repetitions
//                       </li>`);
// }
// }

// function renderPictures (exercise) {
// for (let i = 0; i < exercise.images.length; i++) {
//   let picturePreview = exercise.images[i];
//   document.write(
//                     `<li class='gallery__preview'>
//                       <picture>
//                         <source srcset=${picturePreview.webp}>
//                           <img loading='lazy' src=${picturePreview.jpg} alt='images-preview'>
//                       </picture>
//                     </li>`
//   );
// }
// }

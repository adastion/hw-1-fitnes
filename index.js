//data set
const headerData = getHeaderData();
const pageData = getPageData();

//variables
const nameContent = pageData.nameContent;
const trainingDays = pageData.exercises;
const rootElement = document.querySelector("#root");


const wrapper = createMyElement("div", document.getElementById('root'), "wrapper");
const header = createMyElement("header", wrapper, "header");
const logo = createMyElement("a", header, "logo", "", "", '#');
const logoImg = createMyElement("img", logo, "logo", "", headerData.logo);
const headerTitle = createMyElement("h1", header, "title", headerData.slogan);
const headerTitleStatic = createMyElement("span", headerTitle, "", "online");
const headerInfo = createMyElement("p", header, "text", headerData.shortInfo);
const banner = createMyElement("img", header, "decor", "", headerData.graphics);
const headerButton = createMyElement("button", header, "button", "Get Started");
const content = createMyElement("div", wrapper, "content");
const contentTitle = createMyElement("h2", content, "title--content", nameContent);

renderDaysTraining(content, trainingDays);

// creating functions
function createMyElement(tag, parentItem, addClass = "", addContent = "", pathImage = "", pathLink = "") {
  let element = document.createElement(tag);
  if (addClass !== "") {
    element.classList.add(addClass);
  }
  if (addContent !== "") {
    element.textContent = addContent;
  }
  if (pathImage !== "") {
    element.src = pathImage;
  }
  if (pathLink !== "") {
    element.href = pathLink;
  }
  parentItem.appendChild(element);
  return element;
}

function renderDaysTraining(parentItem, trainingDays) {
  for (let i = 0; i < trainingDays.length; i++) {
    const day = trainingDays[i];
    const daySection = createMyElement("section", parentItem, "day");
    renderDayTraining(daySection, day);
  }
}

function renderDayTraining(parentItem, day) {
  const dayTitle = createMyElement("h3", parentItem, "title--day", day.dayName);

  for (let i = 0; i < day.exercisesDay.typesOfExercise.length; i++) {
    const exercise = day.exercisesDay.typesOfExercise[i];
    const exerciseTitle = createMyElement("h4", parentItem, "title--exercise", exercise.nameExercises);
    const approachesList = createMyElement("ol", parentItem, "approaches");
    renderApproaches(approachesList, exercise);

    const galleryList = createMyElement("ul", parentItem, "gallery");
    renderPreview(galleryList, exercise);
    return exerciseTitle
  }
}

function renderApproaches(parentItem, exercise) {
  for (let i = 0; i < exercise.approaches.length; i++) {
    const approach = exercise.approaches[i];
    const approachItem = createMyElement("li", parentItem, "approaches__approach");
    let approachText = approach.approachName;

    if (approach.weight !== undefined) {
      approachText += ` with ${approach.weight}`;
    }

    approachText += ` ${approach.repetitions} repetitions`;
    approachItem.textContent = approachText;
  }
}

function renderPreview(parentItem, exercise) {
  for (let i = 0; i < exercise.images.length; i++) {
    const picturePreview = exercise.images[i];
    const previewItem = createMyElement("li", parentItem, "gallery__preview");
    const picture = createMyElement("picture", previewItem);
    const sourceWebp = createMyElement("source", picture);
    sourceWebp.srcset = picturePreview.webp;
    const image = createMyElement("img", picture);
    image.loading = 'lazy';
    image.src = picturePreview.jpg;
    image.alt = 'images-preview';
  }
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
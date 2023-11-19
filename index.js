//data set
const headerData = getHeaderData()
const pageData = getPageData()

//variables
const nameContent = pageData.nameContent;
const trainingDays = pageData.exercises;
const rootElement = document.querySelector('#root')

//rendering
renderPage ()


function renderPage () {
    const createWrapperElement = document.createElement('div')
  //creating Header
    const createHeaderElement = document.createElement('header')
    const createLogoElement = document.createElement('a')
    const createPictureLogoElement = document.createElement('img')
    const createTitleElement = document.createElement('h1')
    const createTitleStaticElement = document.createElement('span')
    const createInfoElement = document.createElement('p')
    const createBannerElement = document.createElement('img')
    const createBtnGetStartedElement = document.createElement('button')
      createBtnGetStartedElement.classList.add('button')
      createBannerElement.classList.add('decor')
      createBannerElement.src = headerData.graphics
      createInfoElement.classList.add('text')
      createTitleElement.textContent = headerData.slogan
      createTitleStaticElement.textContent = 'online'
      createTitleElement.appendChild(createTitleStaticElement)
      createTitleElement.classList.add('title')
      createWrapperElement.classList.add('wrapper')
      createHeaderElement.classList.add('header')
      createLogoElement.classList.add('logo')
      createLogoElement.href = '#'
      createPictureLogoElement.src = headerData.logo
      createBtnGetStartedElement.textContent = 'Get Started'
      createWrapperElement.appendChild(createHeaderElement)
      createHeaderElement.appendChild(createLogoElement)
      createLogoElement.appendChild(createPictureLogoElement)
      createHeaderElement.appendChild(createTitleElement)
      createHeaderElement.appendChild(createInfoElement)
      createHeaderElement.appendChild(createBannerElement)
      createHeaderElement.appendChild(createBtnGetStartedElement)
  //creating Content
    const createContentElement = document.createElement('div')
    const createTitleContentElement = document.createElement('h2')
    const createTitleDayElement = document.createElement('h3')
      createTitleDayElement.classList.add('title--day')
      createContentElement.classList.add('content')
      createTitleContentElement.classList.add('title--content')
      createWrapperElement.appendChild(createContentElement)
      createContentElement.appendChild(createTitleContentElement)
      createContentElement.appendChild(createTitleDayElement)
      //creating Day
    const createDayElement = document.createElement('section')
    const createTitleExerciseElement = document.createElement('h4')
    const createApproachesListElement = document.createElement('ol')
    const createApproachElement = document.createElement('li')
    const createGalleryListElement = document.createElement('ul')
    const createPictureElement = document.createElement('li')
      createDayElement.classList.add('day')
      createTitleExerciseElement.classList.add('title--exercise')
      createApproachesListElement.classList.add('approaches')
      createApproachElement.classList.add('approaches__approach')
      createPictureElement.classList.add('gallery__preview')
      createContentElement.appendChild(createDayElement)
      createContentElement.appendChild(createTitleExerciseElement)
      createContentElement.appendChild(createApproachesListElement)
      createContentElement.appendChild(createGalleryListElement)
  
  
    rootElement.appendChild(createWrapperElement)
}



























document.write(`<div class='wrapper'>`);
  document.write(`<header class='header'>`);
    document.write(`<a class='logo' href='#'>`);
      document.write(`<img src=${headerData.logo} alt='logo'/>`);
    document.write(`</a>`);
    document.write(`<h1 class='title'>online<span>${headerData.slogan}</span></h1>`);
    document.write(`<p class='text'>${headerData.shortInfo}</p>`);
    document.write(`<img class='decor'src=${headerData.graphics} alt='decor'/>`);
    document.write(`<button class='button'>Get Started</button>`);
  document.write(`</header>`);
  document.write(`<div class='content'>`);
    document.write(`<h2 class='title--content'>${nameContent}</h2>`);
//rendering day
  renderDaysTraining(
    renderTypeExercises,
    renderAproaches,
    renderPictures
  )

  document.write(`</div>`);
document.write(`</div>`);


function getHeaderData() {
  return {
    slogan: "Fitness",
    shortInfo: "Get fit from anywhere with our online fitness programs!",
    logo: "images/logo.svg",
    graphics: "images/bg-banner.png",
  };
}

function getPageData () {
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

function renderDaysTraining (renderTypeExercises, renderAproaches, renderPictures) {
    for (let day = 0; day < trainingDays.length; day++) {
      let trainingDay = trainingDays[day];

      document.write(`<h3 class='title--day'>${trainingDay.dayName}</h3>`);
      document.write(`<section class='day'>`);
//rendering type exercise
      renderTypeExercises(trainingDay, renderAproaches, renderPictures)
    }
}

function renderDay () {

}

function renderTypeExercises (trainingDay, renderAproaches, renderPictures) {
  for (
    let typeExercise = 0;
    typeExercise < trainingDay.exercisesDay.typesOfExercise.length;
    typeExercise++
  ) {
      let exercise = trainingDay.exercisesDay.typesOfExercise[typeExercise];
      document.write(`<h4 class='title--exercise'>${exercise.nameExercises}</h4>`);
      document.write(`<ol class='approaches'>`);
  //approach
      renderAproaches(exercise) 
      document.write(`</ol>`);
      document.write(`<ul class='gallery'>`);
  //rendering picture preview
      renderPictures(exercise)
        document.write(`</ul>`);
      }
    document.write(`</section>`);
  }

function renderAproaches (exercise) {
  for (let i = 0; i < exercise.approaches.length; i++) {
    let approach = exercise.approaches[i];
    document.write(`<li class='approaches__approach'>
                          ${approach.approachName} 
                          ${
                            approach.weight !== undefined
                              ? "with " + approach.weight
                              : ""
                          }
                          ${approach.repetitions} repetitions
                        </li>`);
  }
}

function renderPictures (exercise) {
  for (let i = 0; i < exercise.images.length; i++) {
    let picturePreview = exercise.images[i];
    document.write(
                      `<li class='gallery__preview'>
                        <picture>
                          <source srcset=${picturePreview.webp}>
                            <img loading='lazy' src=${picturePreview.jpg} alt='images-preview'>
                        </picture>
                      </li>`
    );
  }
}
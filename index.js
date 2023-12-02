//data set
const headerData = {
  slogan: "Fitness",
  shortInfo: "Get fit from anywhere with our online fitness programs!",
  logo: "src/assets/images/logo.svg",
  graphics: "src/assets/images/bg-banner.png",
};

const pageData = {
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
                jpg: "src/assets/images/deadlift-01.jpg",
                webp: "src/assets/images/deadlift-01.webp",
              },
              {
                jpg: "src/assets/images/deadlift-02.jpg",
                webp: "src/assets/images/deadlift-02.webp",
              },
              {
                jpg: "src/assets/images/deadlift-03.jpg",
                webp: "src/assets/images/deadlift-03.webp",
              },
              {
                jpg: "src/assets/images/deadlift-04.jpg",
                webp: "src/assets/images/deadlift-04.webp",
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
                jpg: "src/assets/images/pullUpsChinUps-01.jpg",
                webp: "src/assets/images/pullUpsChinUps-01.webp",
              },
              {
                jpg: "src/assets/images/pullUpsChinUps-02.jpg",
                webp: "src/assets/images/pullUpsChinUps-02.webp",
              },
              {
                jpg: "src/assets/images/pullUpsChinUps-03.jpg",
                webp: "src/assets/images/pullUpsChinUps-03.webp",
              },
              {
                jpg: "src/assets/images/pullUpsChinUps-04.jpg",
                webp: "src/assets/images/pullUpsChinUps-04.webp",
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
                jpg: "src/assets/images/barbellSquats-01.jpg",
                webp: "src/assets/images/barbellSquats-04.webp",
              },
              {
                jpg: "src/assets/images/barbellSquats-02.jpg",
                webp: "src/assets/images/barbellSquats-02.webp",
              },
              {
                jpg: "src/assets/images/barbellSquats-03.jpg",
                webp: "src/assets/images/barbellSquats-03.webp",
              },
              {
                jpg: "src/assets/images/barbellSquats-04.jpg",
                webp: "src/assets/images/barbellSquats-04.webp",
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
                jpg: "src/assets/images/dumbbellLunges-01.jpg",
                webp: "src/assets/images/dumbbellLunges-01.webp",
              },
              {
                jpg: "src/assets/images/dumbbellLunges-02.jpg",
                webp: "src/assets/images/dumbbellLunges-02.webp",
              },
              {
                jpg: "src/assets/images/dumbbellLunges-03.jpg",
                webp: "src/assets/images/dumbbellLunges-03.webp",
              },
              {
                jpg: "src/assets/images/dumbbellLunges-04.jpg",
                webp: "src/assets/images/dumbbellLunges-04.webp",
              },
            ],
          },
        ],
      },
    },
  ],
};

//variables


//creating objects
// let elementRoot = document.getElementById('root')
// let elementWrapper = document.createElement('div')
// let elementHeader = document.createElement('header')
// let elementPictureLogo = document.createElement('img')
// let elemetainTitle = document.createElement('h1')

//rendering
document.write(`<div class='wrapper'>`);
// rendering header
  getHeaderData(
    headerData.slogan, 
    headerData.shortInfo, 
    headerData.logo, 
    headerData.graphics
    )
// rendering content
  getPageContentData(
    pageData.nameContent, 
    pageData.exercises,
    renderDayTraining,
    renderDaysTraining,
    renderApproach,
    renderPreview,
    )
document.write(`</div>`);


// creating functions
function getHeaderData(slogan, shortInfo, pathLogo, pathBannerPicture) {
  document.write(`<header class='header'>`);
    document.write(`<a class='logo' href='#'>`);
      document.write(`<img src=${pathLogo} alt='logo'/>`);
    document.write(`</a>`);
    document.write(`<h1 class='title'>online<span>${slogan}</span></h1>`);
    document.write(`<p class='text'>${shortInfo}</p>`);
    document.write(`<img class='decor'src=${pathBannerPicture} alt='decor'/>`);
    document.write(`<button class='button'>Get Started</button>`);
  document.write(`</header>`);
}

function getPageContentData (
  nameContent, 
  trainingDays,
  renderingDay, 
  renderingDays,
  renderingApproaches,
  renderingPreview
) {
  document.write(`<div class='content'>`);
  document.write(`<h2 class='title--content'>${nameContent}</h2>`);
//rendering day
  renderingDays(
    renderingDay, 
    trainingDays,
    renderingApproaches,
    renderingPreview
)
document.write(`</div>`);
}

function renderDayTraining (days, renderingApproaches, renderingPreview) {
    document.write(`<h3 class='title--day'>${days.dayName}</h3>`);
    document.write(`<section class='day'>`);
//rendering type exercise
    for (
      let typeExercise = 0;
      typeExercise < days.exercisesDay.typesOfExercise.length;
      typeExercise++
    ) {
      let exercise = days.exercisesDay.typesOfExercise[typeExercise];

      document.write(`<h4 class='title--exercise'>${exercise.nameExercises}</h4>`);
      document.write(`<ol class='approaches'>`);
//approach
      renderingApproaches(exercise)

      
//rendering picture preview
      renderingPreview(exercise)
     
      document.write(`</ul>`);
    }
    document.write(`</section>`);
 
}

function renderDaysTraining (trainingDay, trainingDays, renderingApproaches, renderingPreview) {
  for (let day = 0; day < trainingDays.length; day++) {
    trainingDay(trainingDays[day], renderingApproaches, renderingPreview );
  }
}

function renderApproach (exercise) {
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
  document.write(`</ol>`);
  document.write(`<ul class='gallery'>`);
}

function renderPreview (exercise) {
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

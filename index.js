//data set
const headerData = {
  slogan: "Fitness",
  shortInfo: "Get fit from anywhere with our online fitness programs!",
  logo: "images/logo.svg",
  graphics: "images/bg-banner.png",
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

//variables
const nameContent = pageData.nameContent;
const trainingDays = pageData.exercises;

//rendering
document.write(`<div class='wrapper'>`);
  document.write(`<header>`);
    document.write(`<a href='#'>`);
    document.write(`<img src=${headerData.logo} alt='logo'/>`);
    document.write(`</a>`);
    document.write(`<h1>online<span>${headerData.slogan}</span></h1>`);
    document.write(`<p>${headerData.shortInfo}</p>`);
    document.write(`<img src=${headerData.graphics} alt='decor'/>`);
    document.write(`<button>Get Started</button>`);
  document.write(`</header>`);
  document.write(`<div class='content'>`);
    document.write(`<h2>${nameContent}</h2>`);
//rendering day
    for (let day = 0; day < trainingDays.length; day++) {
      let trainingDay = trainingDays[day];

      document.write(`<h3>${trainingDay.dayName}</h3>`);
      document.write(`<section class='day'>`);
//rendering type exercise
      for (
        let typeExercise = 0;
        typeExercise < trainingDay.exercisesDay.typesOfExercise.length;
        typeExercise++
      ) {
        let exercise = trainingDay.exercisesDay.typesOfExercise[typeExercise];

        document.write(`<h4>${exercise.nameExercises}</h4>`);
        document.write(`<ol>`);
//approach
        for (let i = 0; i < exercise.approaches.length; i++) {
          let approach = exercise.approaches[i];
          document.write(`<li>
                                ${approach.approachName} 
                                ${
                                  approach.weight !== undefined
                                    ? "with " + approach.weight
                                    : ""
                                }
                                ${approach.repetitions} repetitions</li>`);
        }
        document.write(`</ol>`);
        document.write(`<ul class='gallery'>`);
//rendering picture preview
        for (let i = 0; i < exercise.images.length; i++) {
          let picturePreview = exercise.images[i];
          document.write(
            `<li>
                              <picture>
                                <source srcset=${picturePreview.webp}>
                                  <img loading='lazy' src=${picturePreview.jpg} alt='images-preview'>
                              </picture>
                            </li>`
          );
        }
        document.write(`</ul>`);
      }
      document.write(`</section>`);
    }
  document.write(`</div>`);
document.write(`</div>`);

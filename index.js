const exerciseData = {
  exercises: [
    {
      dayName: "Monday",
      exercisesDay: {
        deadlift: {
          nameExercises: "Deadlift",
          approaches: [
            'First approach with 50 kg 10 repetitions',
            'Second approach with 40 kg 15 repetitions',
            'Third approach with 35 kg 12 repetitions',
            'Fourth approach with 35 kg 12 repetitions',
          ],
          images: [
            "images/deadlift-01.webp",
            "images/deadlift-02.webp",
            "images/deadlift-03.webp",
            "images/deadlift-04.webp",
          ],
        },
        pullUpsChinUps: {
          nameExercises: "Pull-ups & Chin-ups",
          approaches: [
            { repetitions: 10 },
            { repetitions: 15 },
            { repetitions: 12 },
            { repetitions: 12 },
          ],
          images: [
            "pullups_image1.jpg",
            "pullups_image2.jpg",
            "pullups_image3.jpg",
            "pullups_image4.jpg",
          ],
        },
      },
    },
    {
      dayName: "Tuesday",
      exercisesDay: {
        barbellSquats: {
          nameExercises: "Barbell Squats",
          approaches: [
            { weight: "50 kg", repetitions: 10 },
            { weight: "40 kg", repetitions: 15 },
            { weight: "35 kg", repetitions: 12 },
            { weight: "35 kg", repetitions: 12 },
          ],
          images: [
            "squats_image1.jpg",
            "squats_image2.jpg",
            "squats_image3.jpg",
            "squats_image4.jpg",
          ],
        },
        dumbbellLunges: {
          nameExercises: "Dumbbell Lunges",
          approaches: [
            { repetitions: 10 },
            { repetitions: 15 },
            { repetitions: 12 },
            { repetitions: 12 },
          ],
          images: [
            "lunges_image1.jpg",
            "lunges_image2.jpg",
            "lunges_image3.jpg",
            "lunges_image4.jpg",
          ],
        },
      },
    },
  ],
};

document.write(`<div class='wrapper'>`);
      document.write(`<h1>Online fitness</h1>`);
      document.write(`<h2>Exercises</h2>`);
      document.write(`<div class='content'>`);
           document.write(`<h3>${exerciseData.exercises[0].dayName}</h3>`);
           document.write(`<div class='day'>`);
              document.write(`<div class='day__block'>`);
                    document.write(`<h4>${exerciseData.exercises[0].exercisesDay.deadlift.nameExercises}</h4>`);
                    document.write(`<ol>`);
                      for (let i = 0; i < exerciseData.exercises[0].exercisesDay.deadlift.approaches.length; i++) {
                        let approach = exerciseData.exercises[0].exercisesDay.deadlift.approaches[i];
                        document.write(`<li>${approach}</li>`);
                      }
                      document.write(`</ol>`);
                      document.write(`<ul class='gallery'>`)
                      for (let i = 0; i < exerciseData.exercises[0].exercisesDay.deadlift.images.length; i++) {
                        let picturePreview = exerciseData.exercises[0].exercisesDay.deadlift.images[i];
                        document.write(`<li class='gallery__item'><img src=${picturePreview} alt='images-preview'></li>`)
                      }
                                             
                    document.write(`</ul>`)
              document.write(`</div'>`);
           document.write(`</div>`);
      document.write(`</div>`);
document.write(`</.div>`);

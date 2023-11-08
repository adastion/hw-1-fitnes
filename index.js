const exerciseData = {
  monday: {
    dayName: "Monday",
    exercises: {
      deadlift: {
        nameExercises: "Deadlift",
        approaches: [
          { weight: "50 kg", repetitions: 10 },
          { weight: "40 kg", repetitions: 15 },
          { weight: "35 kg", repetitions: 12 },
          { weight: "35 kg", repetitions: 12 },
        ],
        images: [
          "deadlift_image1.jpg",
          "deadlift_image2.jpg",
          "deadlift_image3.jpg",
          "deadlift_image4.jpg",
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
  tuesday: {
    dayName: "Tuesday",
    exercises: {
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
};

document.write(`<h1>Online fitness</h1>`);

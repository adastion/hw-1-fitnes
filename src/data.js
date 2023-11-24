export function getHeaderData() {
  return {
    slogan: "Fitness",
    shortInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    logo: "src/assets/images/logo.svg",
    graphics: "src/assets/images/bg-banner.png",
  };
}

export function getPageData() {
  return {
    nameContent: "exercises",
    exercises: [
      {
        dayName: "Monday",
        typesOfExercise: [
          {
            nameExercise: "Deadlift",
            approaches: [
              {
                approachName: "First approach",
                weight: "50 kg",
                repetitions: "10",
                image: {
                  jpg: "images/deadlift-01.jpg",
                  webp: "images/deadlift-01.webp",
                },
              },
              {
                approachName: "Second approach",
                weight: "40 kg",
                repetitions: "15",
                image: {
                  jpg: "images/deadlift-02.jpg",
                  webp: "images/deadlift-02.webp",
                },
              },
              {
                approachName: "Third approach",
                weight: "35 kg",
                repetitions: "12",
                image: {
                  jpg: "images/deadlift-03.jpg",
                  webp: "images/deadlift-03.webp",
                },
              },
              {
                approachName: "Fourth approach",
                weight: "35 kg",
                repetitions: "12",
                image: {
                  jpg: "images/deadlift-04.jpg",
                  webp: "images/deadlift-04.webp",
                },
              },
            ],
          },
          {
            nameExercise: "Pull-ups & Chin-ups",
            approaches: [
              {
                approachName: "First approach",
                repetitions: "10",
                image: {
                  jpg: "images/pullUpsChinUps-01.jpg",
                  webp: "images/pullUpsChinUps-01.webp",
                },
              },
              {
                approachName: "Second approach",
                repetitions: "15",
                image: {
                  jpg: "images/pullUpsChinUps-02.jpg",
                  webp: "images/pullUpsChinUps-02.webp",
                },
              },
              {
                approachName: "Third approach",
                repetitions: "12",
                image: {
                  jpg: "images/pullUpsChinUps-03.jpg",
                  webp: "images/pullUpsChinUps-03.webp",
                },
              },
              {
                approachName: "Fourth approach",
                repetitions: "12",
                image: {
                  jpg: "images/pullUpsChinUps-04.jpg",
                  webp: "images/pullUpsChinUps-04.webp",
                },
              },
            ],
          },
        ],
      },
      {
        dayName: "Tuesday",
        typesOfExercise: [
          {
            nameExercise: "Barbell Squats",
            approaches: [
              {
                approachName: "First approach",
                weight: "50 kg",
                repetitions: "10",
                image: {
                  jpg: "images/barbellSquats-01.jpg",
                  webp: "images/barbellSquats-01.webp",
                },
              },
              {
                approachName: "Second approach",
                weight: "40 kg",
                repetitions: "15",
                image: {
                  jpg: "images/barbellSquats-02.jpg",
                  webp: "images/barbellSquats-02.webp",
                },
              },
              {
                approachName: "Third approach",
                weight: "35 kg",
                repetitions: "12",
                image: {
                  jpg: "images/barbellSquats-03.jpg",
                  webp: "images/barbellSquats-03.webp",
                },
              },
              {
                approachName: "Fourth approach",
                weight: "35 kg",
                repetitions: "12",
                image: {
                  jpg: "images/barbellSquats-04.jpg",
                  webp: "images/barbellSquats-04.webp",
                },
              },
            ],
          },
          {
            nameExercise: "Dumbbell Lunges",
            approaches: [
              {
                approachName: "First approach",
                repetitions: "10",
                image: {
                  jpg: "images/dumbbellLunges-01.jpg",
                  webp: "images/dumbbellLunges-01.webp",
                },
              },
              {
                approachName: "Second approach",
                repetitions: "15",
                image: {
                  jpg: "images/dumbbellLunges-02.jpg",
                  webp: "images/dumbbellLunges-02.webp",
                },
              },
              {
                approachName: "Third approach",
                repetitions: "12",
                image: {
                  jpg: "images/dumbbellLunges-03.jpg",
                  webp: "images/dumbbellLunges-03.webp",
                },
              },
              {
                approachName: "Fourth approach",
                repetitions: "12",
                image: {
                  jpg: "images/dumbbellLunges-04.jpg",
                  webp: "images/dumbbellLunges-04.webp",
                },
              },
            ],
          },
        ],
      },
    ],
  };
}

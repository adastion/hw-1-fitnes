export function getHeaderData() {
  return {
    slogan: "Fitness",
    shortInfo: "Get fit from anywhere with our online fitness programs!",
    logo: "images/logo.svg",
    graphics: "images/bg-banner.png",
  };
}

export function getPageData() {
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
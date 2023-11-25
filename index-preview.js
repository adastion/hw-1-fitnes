function renderPage () {
    const createWrapperElement = document.createElement('div')
    createWrapperElement.classList.add('wrapper')
  //creating Header
  
  createHeader()
  
  function createHeader () {
    createTitleHeader()
    const createHeaderElement = document.createElement('header')
    const createLogoElement = document.createElement('a')
    const createPictureLogoElement = document.createElement('img')
    const createTitleStaticElement = document.createElement('span')
    const createInfoElement = document.createElement('p')
    const createBannerElement = document.createElement('img')
    const createBtnGetStartedElement = document.createElement('button')
    createBtnGetStartedElement.classList.add('button')
    createBannerElement.classList.add('decor')
    createBannerElement.src = headerData.graphics
    createInfoElement.classList.add('text')
    createTitleStaticElement.textContent = 'online'
    
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
      createTitleElement.appendChild(createTitleStaticElement)

      function createTitleHeader () {
        const createTitleElement = document.createElement('h1')
          createTitleElement.classList.add('title')
          createTitleElement.textContent = headerData.slogan
      }
  }
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
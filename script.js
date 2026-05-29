const FURNITURE_CATALOG = [
  {
    id: 1,
    title: 'Шкаф',
    price: 10000,
    img: 'https://img.icons8.com/ios/50/wardrobe--v1.png',
  },
  {
    id: 2,
    title: 'Кровать',
    price: 15000,
    img: 'https://img.icons8.com/ios/50/bed.png',
  },
  {
    id: 3,
    title: 'Диван',
    price: 23000,
    img: 'https://img.icons8.com/ios/50/sofa.png',
  },
  {
    id: 4,
    title: 'Стол',
    price: 8000,
    img: 'https://img.icons8.com/ios/50/table.png',
  },
  {
    id: 5,
    title: 'Стул',
    price: 2500,
    img: 'https://img.icons8.com/ios/50/chair.png',
  },
  {
    id: 6,
    title: 'Зеркало',
    price: 3000,
    img: 'https://img.icons8.com/ios/50/mirror.png',
  },
];

const ADDITIONAL_FURNITURE = [
  {
    id: 7,
    title: 'Полка',
    price: 1000,
    img: 'https://img.icons8.com/ios/50/grocery-shelf.png',
  },
  {
    id: 8,
    title: 'Комод',
    price: 5500,
    img: 'https://img.icons8.com/ios/50/bureau.png',
  },
  {
    id: 9,
    title: 'Ящик',
    price: 3000,
    img: 'https://img.icons8.com/ios/50/box--v1.png',
  },
];

let mockedData = [...FURNITURE_CATALOG];

let furnitureGrid = document.getElementById('furnitureGrid');
let loadMoreBtn = document.getElementById('loadMoreBtn');

function loadFurniture(products) {
  furnitureGrid.innerHTML = '';
  if (!products || products.length === 0) {
    furnitureGrid.innerHTML = '<h3>Товары не найдены</h3>';
    return;
  }
  const cardsData = products
    .map((product) => {
      return `
      <div class="furniture-card">
        <div class="furniture-img">
          <img src="${product.img}">
        </div>
        <div class="furniture-info">
          <h3 class="furniture-title">${product.title}</h3>
          <p class="furniture-price">${product.price}</p>
        </div>
      </div>
    `;
    })
    .join('');
  furnitureGrid.innerHTML = cardsData;
}

let loadMoreProducts = document.getElementById('loadMoreBtn');
let btnContainer = document.getElementById('btnContainer');

loadMoreProducts.addEventListener('click', function (e) {
  mockedData.push(...ADDITIONAL_FURNITURE);
  loadFurniture(mockedData);
  console.log(mockedData);

  btnContainer.style.display = 'none';
});

const themeToggleBtn = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('currentTheme');
if (storedTheme === 'dark') {
  document.body.classList.add('dark');
  if (themeToggleBtn) themeToggleBtn.innerHTML = 'Светлая тема';
} else {
  document.body.classList.remove('dark');
  if (themeToggleBtn) themeToggleBtn.innerHTML = 'Тёмная тема';
}

function toggleTheme() {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    localStorage.setItem('currentTheme', 'light');
    if (themeToggleBtn) themeToggleBtn.innerHTML = 'Тёмная тема';
  } else {
    document.body.classList.add('dark');
    localStorage.setItem('currentTheme', 'dark');
    if (themeToggleBtn) themeToggleBtn.innerHTML = 'Светлая тема';
  }
}
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}

// window.addEventListener('load', () => {
//   renderFurnitureCatalog(mockedData);
//   console.log('renderFurnitureCatalog');
// });

loadFurniture(mockedData);

// console.log(mockedData);

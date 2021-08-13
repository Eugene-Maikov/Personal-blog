
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
const modalBtn = document.querySelectorAll('[data-modal]'); //выбрать все кнопки у которых атрибут "data-modal"
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close'); //сохранить все кнопки с классом "modal__close"
const modal = document.querySelectorAll('.modal');

// Циклом по всем кнопкам
// Каждая отдельная кнопка - "item"
// Вешаем на каждую кнопку обработчик событи клика "addEventListener"
// "event =>" - стрелочная функция
modalBtn.forEach(item => {
  item.addEventListener('click', event => {
    //Получить значение атрибуда "data-modal" чтобы понять на какую кнопкру нажали
    // В "modalId" - получим id модального окна через "getAttribute"
    // "modal" - выборка по id (Там хранится модальное окно)
    let $this = event.currentTarget;
    let modalId = $this.getAttribute('data-modal');
    let modal = document.getElementById(modalId);
    let modalContent = modal.querySelector('.modal__content');

    // У дочернего элемента мод.окна не будет вызываться закрывающее событие

    modalContent.addEventListener('click', event => {
      event.stopPropagation();
    });

    //обращаемя к конкретному мод.окну --> вызываем "classList" --> "add" класс "show"
    modal.classList.add('show');
    body.classList.add('no-scroll');

    setTimeout(() => {
      modalContent.style.transform = 'none'; //изменение стилей трансормации
      modalContent.style.opacity = '1'; //задержка
    }, 1);

  });
});

// Циклом по всем кнопкам
// Каждая отдельная кнопка - "item"
// Вешаем на каждую кнопку обработчик событи клика "addEventListener"
// "event =>" - стрелочная функция
modalClose.forEach(item => {
  item.addEventListener('click', event => {
    // Получить ближайшего родителя с классом "modal"
    let currentModal = event.currentTarget.closest('.modal');
    // Убираем классы
    closeModal(currentModal);
  });
});

// Циклом по всем кнопкам
// Каждая отдельная кнопка - "item"
// Вешаем на каждую кнопку обработчик событи клика "addEventListener"
// "event =>" - стрелочная функция
modal.forEach(item => {
  item.addEventListener('click', event => {
    // Получить ближайшего родителя с классом "modal"
    let currentModal = event.currentTarget;

    // Убираем классы
    closeModal(currentModal);
  });
});

// Функция закрытия окна
function closeModal(currentModal) {
  let modalContent = currentModal.querySelector('.modal__content');
  modalContent.removeAttribute('style');

  // Анимация трансформации
  setTimeout(() => {
    currentModal.classList.remove('show');
    body.classList.remove('no-scroll');
  }, 200);
}































//* ======== Готовый обработчик событий на клик по "data-modal" ==================
//? modalBtn.forEach(item => {
//?   item.addEventListener('click', event => {
//     let $this = event.target;
//     let modalId = $this.getAttribute('data-modal');
//     let modal = document.getElementById(modalId);
//     let modalContent = modal.querySelectorAll('.modal__content');
//?   });
//? });
//* ======== Готовый обработчик событий на клик по "data-modal" ==================

//* ===================== Запоминаем модальные окна ==============================
//  modalBtn.forEach(item => {
//    item.addEventListener('click', event => {
//?     let $this = event.target;
//?     let modalId = $this.getAttribute('data-modal');
//?     let modal = document.getElementById(modalId);
//?     let modalContent = modal.querySelectorAll('.modal__content');
//    });
//  });
//* ===================== Запоминаем модальные окна ==============================

//* ============== Получить ближайшего родителя с классом "modal" ================
// modalClose.forEach(item => {
//   item.addEventListener('click', event => {
//?     let currentModal = event.target.closest('.modal');
//     currentModal.classList.remove('show');
//     body.classList.remove('no-scroll');
//   });
// });
//* ============== Получить ближайшего родителя с классом "modal" ================
const burger = document.getElementById('sidebarToggle'); //выбор id
const sidebar = document.getElementById('sidebar');
const page = document.getElementById('page');

burger.addEventListener('click', event => {
  //если у body есть класс, то нужно его убрать("closeSidebar"), иначе вызовем функцию "showSidebar"
  if (body.classList.contains('show-sidebar')) {
    closeSidebar();
  } else {
    showSidebar();
  }
});

function showSidebar() {
  let mask = document.createElement('div');
  mask.classList.add('page__mask');
  mask.addEventListener('click', closeSidebar);
  page.appendChild(mask); //Добавление дочернего элемента
  
  body.classList.add('show-sidebar');
}
function closeSidebar() {
  body.classList.remove('show-sidebar');
  document.querySelector('.page__mask').remove();
}

const textArea = document.querySelectorAll('[data-autoresize]');

textArea.forEach(item => {
  let textAreaH = item.offsetHeight;

  item.addEventListener('input', event => {
    let $this = event.target;

    $this.style.height = textAreaH + 'px';
    $this.style.height = $this.scrollHeight + 'px';
  });
});


'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardsNumber = 4;
var userDialog = document.querySelector('.setup');


// Показ блока .setup
userDialog.classList.remove('hidden');

// Функция генерации случайных значений
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Создание массива объектов
var getWizards = function (arrSize) {
  var wizardsList = [];
  for (var i = 0; i < arrSize; i++) {
    wizardsList[i] = {
      name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES),
      coatColor: getRandom(COAT_COLORS),
      eyesColor: getRandom(EYES_COLORS)
    };
  }
  return wizardsList;
};

// Создание DOM-элемента на основе JS-объекта
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

// Заполнение блока DOM-элементами на основе массива JS-объектов
var fragment = document.createDocumentFragment();
function createSimilarList(arr, container) {
  for (var f = 0; f < arr.length; f++) {
    fragment.appendChild(renderWizard(arr[f]));
  }
  container.appendChild(fragment);
}

var similarListElement = userDialog.querySelector('.setup-similar-list');
createSimilarList(getWizards(wizardsNumber), similarListElement);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

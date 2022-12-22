const Abonnements = {
  MONTH: 0,
  HALF_YEAR: 1,
  YEAR: 2,
};

const abonnementRadioButtons = document.querySelectorAll('[data-radio="data-radio"]');
const abonnementRadioButtonsList = document.querySelector('[data-radio-list="data-radio-list"]');
const abonnementListMonthElement = document.querySelector('[data-abonnement="data-abonnement-month"]');
const abonnementListHalfYearElement = document.querySelector('[data-abonnement="data-abonnement-half-year"]');
const abonnementListYearElement = document.querySelector('[data-abonnement="data-abonnement-year"]');

const abonnementRadioButtonsHandler = () => {
  abonnementRadioButtonsList.classList.remove('abonnements__radio-list--nojs');
  abonnementListYearElement.style.display = 'none';
  abonnementListHalfYearElement.style.display = 'none';

  abonnementRadioButtons.forEach((abonnementRadioButton) => abonnementRadioButton.addEventListener('click', () => {
    abonnementListMonthElement.style.display = 'none';
    abonnementListHalfYearElement.style.display = 'none';
    abonnementListYearElement.style.display = 'none';

    if (abonnementRadioButtons[Abonnements.MONTH].checked) {
      abonnementListMonthElement.style.display = 'flex';
    }

    if (abonnementRadioButtons[Abonnements.HALF_YEAR].checked) {
      abonnementListHalfYearElement.style.display = 'flex';
    }

    if (abonnementRadioButtons[Abonnements.YEAR].checked) {
      abonnementListYearElement.style.display = 'flex';
    }
  }));
};

export {abonnementRadioButtonsHandler};

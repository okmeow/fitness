const Abonnements = {
  MONTH: 0,
  HALF_YEAR: 1,
  YEAR: 2,
};

const abonnementRadioButtons = document.querySelectorAll('[data-radio="data-radio"]');
const abonnementListMonth = document.querySelector('[data-abonnement="data-abonnement-month"]');
const abonnementListHalfYear = document.querySelector('[data-abonnement="data-abonnement-half-year"]');
const abonnementListYear = document.querySelector('[data-abonnement="data-abonnement-year"]');

const abonnementRadioButtonsHandler = () => {
  abonnementListYear.style.display = "none";
  abonnementListHalfYear.style.display = "none";

  abonnementRadioButtons.forEach((abonnementRadioButton) => abonnementRadioButton.addEventListener('click', () => {
    abonnementListMonth.style.display = "none";
    abonnementListHalfYear.style.display = "none";
    abonnementListYear.style.display = "none";

    if (abonnementRadioButtons[Abonnements.MONTH].checked) {
    abonnementListMonth.style.display = "flex";
    }

    if (abonnementRadioButtons[Abonnements.HALF_YEAR].checked) {
    abonnementListHalfYear.style.display = "flex";
    }

    if (abonnementRadioButtons[Abonnements.YEAR].checked) {
    abonnementListYear.style.display = "flex";
    }
  }));
}

export {abonnementRadioButtonsHandler};

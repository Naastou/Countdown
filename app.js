const jour = document.getElementById("days");
const heure = document.getElementById("hours");
const minute = document.getElementById("mins");
const seconde = document.getElementById("secs");
const deadline = document.querySelector(".deadline");

let dateEnd = new Date("June 19, 2023 23:59:59");

const formattedDate = new Intl.DateTimeFormat("fr-FR", {
  dateStyle: "full",
  timeStyle: "medium",
}).format(dateEnd);

deadline.textContent = `L'offre se termine le ${formattedDate}`;

function reboursF() {
  let dateStart = new Date();
  let totalSecondes = (dateEnd - dateStart) / 1000;
  console.log(totalSecondes);
  if (totalSecondes > 0) {
    let nb_jours = Math.floor(totalSecondes / (60 * 60 * 24));
    let nb_heures = Math.floor(
      (totalSecondes - nb_jours * 60 * 60 * 24) / (60 * 60)
    );
    let nb_minutes = Math.floor(
      (totalSecondes - (nb_jours * 60 * 60 * 24 + nb_heures * 60 * 60)) / 60
    );
    let nb_secondes = Math.floor(
      totalSecondes -
        (nb_jours * 60 * 60 * 24 + nb_heures * 60 * 60 + nb_minutes * 60)
    );

    jour.textContent = caractere(nb_jours);
    heure.textContent = caractere(nb_heures);
    minute.textContent = caractere(nb_minutes);
    seconde.textContent = caractere(nb_secondes);
  }

  if (totalSecondes < 0) {
    clearInterval(minuteur);
    countdown.innerHTML = `<span class="expired">désolé, l'offre est terminée</span>`;
  }
}

function caractere(nb) {
  return nb < 10 ? "0" + nb : nb;
}

let minuteur = setInterval(reboursF, 1000);
reboursF();

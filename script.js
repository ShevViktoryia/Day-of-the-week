const date = new Date();
const day = date.getDay();
let nameOfDayOfDay = "";
let phrase = "";

switch (day) {
  case 0:
    nameOfDay = "Sunday";
    phrase = "It's time to relax!!!";
    break;
  case 1:
    nameOfDay = "Monday";
    phrase = "Monday is for people with a mission.";
    break;
  case 2:
    nameOfDay = "Tuesday";
    phrase =
      "Tuesday isn't so bad... It's a sign that we've somehow survived a Monday.";
    break;
  case 3:
    nameOfDay = "Wednesday";
    phrase =
      "A good Wednesday is a day when we did things, and we did them well.";
    break;
  case 4:
    nameOfDay = "Thursday";
    phrase =
      "Thursday is like the pre-party to the weekend, but nobody's arrived yet.";
    break;
  case 5:
    nameOfDay = "Friday";
    phrase = "Friday afternoon feels like heaven.";
    break;
  case 6:
    nameOfDay = "Saturday";
    phrase = "Let's do nothing and call it self-care.";
    break;
  default:
    break;
}

const span = document.querySelector(".day");
span.innerHTML = `${nameOfDay}`;
document.querySelector(".card__phrase").innerHTML = `${phrase}`;

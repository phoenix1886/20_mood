var JOKES =[
  {
    "phrase": "Кукурузные хлопья - теперь без асбеста!",
    "signature": "©Неизвестный маркетолог"
  },
  {
    "phrase": "Собираюсь жить вечно, пока всё идёт нормально"
  },
  {
    "phrase": "Вывеска над кафе — '\u003cМы открылись\u003e'. Что-то не так. Где же '\u003c/Мы открылись\u003e'?"
  },
  {
    "phrase": "Если ты будешь усердно работать по 8 часов в день, то обязательно станешь боссом и начнешь работать по 12"
  },
  {
    "phrase": "Программисты создали надёжную защиту от дурака. Но когда за дело взялась дура..."
  },

];
var jokes_div = document.getElementById('joke-div');
var next_joke_btn = document.getElementById('more-jokes-btn');
var twitter_btn = document.getElementById('twitter-btn');

function getRandomJoke() {
  var randomIndex = Math.floor(Math.random() * JOKES.length);
  return JOKES[randomIndex].phrase;
}

function main() {
  jokes_div.textContent = getRandomJoke();
}

next_joke_btn.onclick = function () {
  jokes_div.textContent = getRandomJoke();
};

twitter_btn.onclick = function () {
  var joke = jokes_div.textContent;
  var url = href="https://twitter.com/intent/tweet?text=" + encodeURIComponent(joke);
  window.open(url, '_blank');
};

window.onload = function () {
  main();
};
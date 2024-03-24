var ticker = document.querySelector(".ticker"),
  list = document.querySelector(".ticker-list"),
  clone = list.cloneNode(true);

ticker.append(clone);

document.addEventListener('DOMContentLoaded', function() {
  const genres = [
    { name: "Action & Adventure", code: 1365 },
    { name: "Action Comedies", code: 43040 },
    { name: "Action Sci-Fi & Fantasy", code: 1568 },
    { name: "Action Thrillers", code: 43048 },
    { name: "Adventures", code: 7442 },
    { name: "Asian Action Movies", code: 77232 },
    { name: "Classic Action & Adventure", code: 46576 },
    { name: "Comic Book and Superhero Movies", code: 10118 },
    { name: "Crime Action & Adventure", code: 9584 },
    { name: "Foreign Action & Adventure", code: 11828 },
    { name: "Hijacking Movies", code: 20541 },
    { name: "Martial Arts Movies", code: 8985 },
    { name: "Military Action & Adventure", code: 2125 },
    { name: "Spy Action & Adventure", code: 10702 },
    { name: "Westerns", code: 7700 },
    { name: "Anime", code: 7424 },
    { name: "Adult Animation", code: 11881 },
    { name: "Animal Tales", code: 5507 },
    { name: "Anime Sci-Fi", code: 2729 },
    { name: "Anime Action", code: 2653 },
    { name: "Anime Comedies", code: 9302 },
    { name: "Anime Dramas", code: 452 },
    { name: "Anime Fantasy", code: 11146 },
    { name: "Anime Features", code: 3063 },
    { name: "Anime Horror", code: 10695 },
    { name: "Anime Series", code: 6721 },
    { name: "Children & Family Movies", code: 783 },
    { name: "Animal Tales", code: 5507 },
    { name: "Disney", code: 67673 },
    { name: "Education for Kids", code: 10659 },
    { name: "Family Features", code: 51056 },
    { name: "Kids Music", code: 52843 },
    { name: "Kids' TV", code: 27346 },
    { name: "Movies Based on Children's Books", code: 10056 },
    { name: "Movies for Ages 0 to 2", code: 6796 },
    { name: "Movies for Ages 11 to 12", code: 6962 },
    { name: "Movies for Ages 2 to 4", code: 6218 },
    { name: "Movies for Ages 5 to 7", code: 5455 },
    { name: "Movies for Ages 8 to 10", code: 561 },
    { name: "TV Cartoons", code: 11177 },
    { name: "British Christmas Children & Family Films", code: 1527064 },
    { name: "Canadian Christmas Children & Family Films", code: 1721544 },
    { name: "Christmas Children & Family Films", code: 1474017 },
    { name: "Christmas Children & Family Films for Ages 11 to 12", code: 1477206 },
    { name: "Christmas Children & Family Films for Ages 5 to 7", code: 1477201 },
    { name: "Christmas Children & Family Films for Ages 8 to 10", code: 1477204 },
    { name: "Christmas Children & Family Films from the 1990s", code: 1476024 },
    { name: "European Christmas Children & Family Films", code: 1527063 },
    { name: "Family-Friendly Christmas Films", code: 1394522 },
    { name: "Feel-Good Christmas Children & Family Films", code: 1475066 },
    { name: "Goofy Christmas Children & Family Films", code: 1475071 },
    { name: "Romantic Christmas Films", code: 1394527 },
    { name: "Classic Movies", code: 31574 },
    { name: "Classic Sci-Fi & Fantasy", code: 47147 },
    { name: "Classic TV Shows", code: 46553 },
    { name: "Classic Action & Adventure", code: 46576 },
    { name: "Classic Comedies", code: 31694 },
    { name: "Classic Dramas", code: 29809 },
    { name: "Classic Musical Comedy", code: 32392 },
    { name: "Classic Romantic Movies", code: 31273 },
    { name: "Classic Thrillers", code: 46588 },
    { name: "Classic War Movies", code: 48744 },
    { name: "Classic Westerns", code: 47465 },
    { name: "Epics", code: 52858 },
    { name: "Film Noir", code: 7687 },
    { name: "Silent Movies", code: 53310 },
    { name: "Comedies", code: 6548 },
    { name: "Anime Comedies", code: 9302 },
    { name: "Dark Comedies", code: 869 },
    { name: "Foreign Comedies", code: 4426 },
    { name: "Horror Comedies", code: 89585 },
    { name: "Late Night Comedies", code: 1402 },
    { name: "Mockumentaries", code: 26 },
    { name: "Musicals Comedies", code: 13335 },
    { name: "Political Comedies", code: 2700 },
    { name: "Romantic Comedies", code: 5475 },
    { name: "Satires", code: 4922 },
    { name: "Screwball Comedies", code: 9702 },
    { name: "Slapstick Comedies", code: 10256 },
    { name: "Sports Comedies", code: 5286 },
    { name: "Stand-up Comedy", code: 11559 },
    { name: "Teen Comedies", code: 3519 },
    { name: "Documentaries", code: 6839 },
    { name: "Biographical Documentaries", code: 3652 },
    { name: "Crime Documentaries", code: 9875 },
    { name: "Foreign Documentaries", code: 5161 },
    { name: "Historical Documentaries", code: 5349 },
    { name: "Military Documentaries", code: 4006 },
    { name: "Music & Concert Documentaries", code: 90361 },
    { name: "Political Documentaries", code: 7018 },
    { name: "Religious Documentaries", code: 10005 },
    { name: "Science & Nature Documentaries", code: 2595 },
    { name: "Social & Cultural Documentaries", code: 3675 },
    { name: "Spirituality Documentaries", code: 2760 },
    { name: "Sports Documentaries", code: 180 },
    { name: "Travel & Adventure Documentaries", code: 1159 },
    { name: "Dramas", code: 5763 },
    { name: "Army Dramas", code: 11 },
    { name: "Biographical Dramas", code: 3179 },
    { name: "Crime Dramas", code: 6889 },
    { name: "Dramas Based on Books", code: 4961 },
    { name: "Dramas Based on Real Life", code: 3653 },
    { name: "LGBT Dramas", code: 500 },
    { name: "Political Dramas", code: 6616 },
    { name: "Romantic Dramas", code: 1255 },
    { name: "Showbiz Dramas", code: 5012 },
    { name: "Social Issues Dramas", code: 3947 },
    { name: "Sports Dramas", code: 7243 },
    { name: "Foreign Movies", code: 78367 },
    { name: "African Movies", code: 3761 },
    { name: "Asian Action Movies", code: 77232 },
    { name: "Australian Movies", code: 5230 },
    { name: "Belgian Movies", code: 262 },
    { name: "British Movies", code: 10757 },
    { name: "Chinese Movies", code: 3960 },
    { name: "Classic Foreign Movies", code: 32473 },
    { name: "Dutch Movies", code: 10606 },
    { name: "Eastern European Movies", code: 5254 },
    { name: "Foreign Sci-Fi & Fantasy", code: 6485 },
    { name: "Foreign Action & Adventure", code: 11828 },
    { name: "Foreign Comedies", code: 4426 },
    { name: "Foreign Documentaries", code: 5161 },
    { name: "Foreign Dramas", code: 2150 },
    { name: "Foreign Gay & Lesbian Movies", code: 8243 },
    { name: "Foreign Horror Movies", code: 8654 },
    { name: "Foreign Thrillers", code: 10306 },
    { name: "French Movies", code: 58807 },
    { name: "German Movies", code: 58886 },
    { name: "Greek Movies", code: 61115 },
    { name: "Indian Movies", code: 10463 },
    { name: "Irish Movies", code: 58750 },
    { name: "Italian Movies", code: 8221 },
    { name: "Japanese Movies", code: 10398 },
    { name: "Korean Movies", code: 5685 },
    { name: "Latin American Movies", code: 1613 },
    { name: "Middle Eastern Movies", code: 5875 },
    { name: "New Zealand Movies", code: 63782 },
    { name: "Romantic Foreign Movies", code: 7153 },
    { name: "Russian Movies", code: 11567 },
    { name: "Scandinavian Movies", code: 9292 },
    { name: "Southeast Asian Movies", code: 9196 },
    { name: "Spanish Movies", code: 58741 },
    { name: "Taiwanese Movies", code: 434295 },
    { name: "Thai Movies & TV", code: 107570 },
    { name: "Turkish Movies", code: 1133133 },
    { name: "Horror Movies", code: 8711 },
    { name: "Cult Horror Movies", code: 10944 },
    { name: "Deep Sea Horror Movies", code: 45028 },
    { name: "Foreign Horror Movies", code: 8654 },
    { name: "Horror Comedy", code: 89585 },
    { name: "Monster Movies", code: 947 },
    { name: "Satanic Stories", code: 6998 },
    { name: "Slasher and Serial Killer Movies", code: 8646 },
    { name: "Supernatural Horror Movies", code: 42023 },
    { name: "Teen Screams", code: 52147 },
    { name: "Vampire Horror Movies", code: 75804 },
    { name: "Werewolf Horror Movies", code: 75930 },
    { name: "Zombie Horror Movies", code: 75405 },
    { name: "Independent Movies", code: 7077 },
    { name: "Experimental Movies", code: 11079 },
    { name: "Independent Action & Adventure", code: 11804 },
    { name: "Independent Comedies", code: 4195 },
    { name: "Independent Dramas", code: 384 },
    { name: "Independent Thrillers", code: 3269 },
    { name: "Romantic Independent Movies", code: 9916 },
    { name: "LGBTQ", code: 5977 },
    { name: "Gay & Lesbian Comedies", code: 7120 },
    { name: "Gay & Lesbian Documentaries", code: 4720 },
    { name: "Gay & Lesbian Dramas", code: 500 },
    { name: "Gay & Lesbian TV Shows", code: 65263 },
    { name: "Romantic Gay & Lesbian Movies", code: 3329 },
    { name: "Music", code: 1701 },
    { name: "Classic Musicals", code: 32392 },
    { name: "Country & Western/Folk", code: 1105 },
    { name: "Disney Musicals", code: 59433 },
    { name: "Jazz & Easy Listening", code: 10271 },
    { name: "Kids Music", code: 52843 },
    { name: "Latin Music", code: 10741 },
    { name: "Musicals", code: 13335 },
    { name: "Rock & Pop Concerts", code: 3278 },
    { name: "Showbiz Musicals", code: 13573 },
    { name: "Stage Musicals", code: 55774 },
    { name: "Urban & Dance Concerts", code: 9472 },
    { name: "World Music Concerts", code: 2856 },
    { name: "All Movies", code: 34399 },
    { name: "Art House Movies", code: 29764 },
    { name: "Epics", code: 52858 },
    { name: "Experimental Movies", code: 11079 },
    { name: "Faith & Spirituality Movies", code: 52804 },
    { name: "Fantasy Movies", code: 9744 },
    { name: "Film Noir", code: 7687 },
    { name: "Gangster Movies", code: 31851 },
    { name: "Only on Netflix", code: 839338 },
    { name: "Satanic Stories", code: 6998 },
    { name: "Satires", code: 4922 },
    { name: "Stand-up Comedies", code: 11559 },
    { name: "Romantic Movies", code: 8883 },
    { name: "Classic Romantic Movies", code: 31273 },
    { name: "Quirky Romance", code: 36103 },
    { name: "Romantic Comedies", code: 5475 },
    { name: "Romantic Dramas", code: 1255 },
    { name: "Romantic Favorites", code: 502675 },
    { name: "Romantic Foreign Movies", code: 7153 },
    { name: "Romantic Independent Movies", code: 9916 },
    { name: "Steamy Romantic Movies", code: 35800 },
    { name: "Sci-Fi & Fantasy", code: 1492 },
    { name: "Action Sci-Fi & Fantasy", code: 1568 },
    { name: "Alien Sci-Fi", code: 3327 },
    { name: "Classic Sci-Fi & Fantasy", code: 47147 },
    { name: "Cult Sci-Fi & Fantasy", code: 4734 },
    { name: "Fantasy Movies", code: 9744 },
    { name: "Foreign Sci-Fi & Fantasy", code: 6485 },
    { name: "Sci-Fi Adventure", code: 6926 },
    { name: "Sci-Fi Dramas", code: 3916 },
    { name: "Sci-Fi Horror Movies", code: 1694 },
    { name: "Sci-Fi Thrillers", code: 11014 },
    { name: "Sports Movies", code: 4370 },
    { name: "Baseball Movies", code: 12339 },
    { name: "Basketball Movies", code: 12762 },
    { name: "Boxing Movies", code: 12443 },
    { name: "Football Movies", code: 12803 },
    { name: "Martial Arts Movies", code: 8985 },
    { name: "Martial Arts, Boxing & Wrestling", code: 6695 },
    { name: "Soccer Movies", code: 12549 },
    { name: "Sports & Fitness", code: 9327 },
    { name: "Sports Comedies", code: 5286 },
    { name: "Sports Documentaries", code: 180 },
    { name: "Sports Dramas", code: 7243 },
    { name: "TV Shows", code: 83 },
    { name: "British TV Shows", code: 52117 },
    { name: "Classic TV Shows", code: 46553 },
    { name: "Crime TV Shows", code: 26146 },
    { name: "Cult TV Shows", code: 74652 },
    { name: "Food & Travel", code: 72436 },
    { name: "Kids' TV", code: 27346 },
    { name: "Korean TV Shows", code: 67879 },
    { name: "Military TV Shows", code: 25804 },
    { name: "Miniseries", code: 4814 },
    { name: "Reality TV", code: 9833 },
    { name: "Science & Nature", code: 52780 },
    { name: "TV Sci-Fi & Fantasy", code: 1372 },
    { name: "TV Action & Adventure", code: 10673 },
    { name: "TV Comedies", code: 10375 },
    { name: "TV Documentaries", code: 10105 },
    { name: "TV Dramas", code: 11714 },
    { name: "TV Horror", code: 83059 },
    { name: "TV Mysteries", code: 4366 },
    { name: "Teen TV Shows", code: 60951 },
    { name: "Teen Comedies", code: 3519 },
    { name: "Teen Dramas", code: 9299 },
    { name: "Teen Screams", code: 52147 },
    { name: "Thrillers", code: 8933 },
    { name: "Action Thrillers", code: 43048 },
    { name: "Classic Thrillers", code: 46588 },
    { name: "Crime Thrillers", code: 10499 },
    { name: "Foreign Thrillers", code: 10306 },
    { name: "Gangster Movies", code: 31851 },
    { name: "Independent Thrillers", code: 3269 },
    { name: "Mysteries", code: 9994 },
    { name: "Political Thrillers", code: 10504 },
    { name: "Psychological Thrillers", code: 5505 },
    { name: "Sci-Fi Thrillers", code: 11014 },
    { name: "Spy Thrillers", code: 9147 },
    { name: "Steamy Thrillers", code: 972 },
    { name: "Supernatural Thrillers", code: 11140 }
  ];

  const searchInput = document.getElementById('genreSearch');
  const genreList = document.getElementById('genreList');

  function renderGenres(genresToRender) {
    genreList.innerHTML = '';
    genresToRender.forEach(genre => {
      const div = document.createElement('div');
      div.className = 'genre-item';
      div.textContent = genre.name;
      div.addEventListener('click', () => {
        window.open(`https://www.netflix.com/browse/genre/${genre.code}`, '_blank');
      });
      genreList.appendChild(div);
    });
  }

  renderGenres(genres); // Initial render

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredGenres = genres.filter(genre => genre.name.toLowerCase().includes(query));
    renderGenres(filteredGenres);
  });
});


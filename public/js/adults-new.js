const myApp = {
  // some non-VM functionality would go here -> split the movies into genres using Vue
  movieGenres(data, genres) {
    genres.forEach((genre, index) => {
      myApp.vm.genres.push({
        name : genre,
        movies : data.filter(movie => movie.genre_name === genre)
      })
    })
  },



  vm : new Vue({
    el : "#appAdults",

    data : {
      title : "Adult",
      favsHeading : "Favourites",
      genHeading : "Genres",
      message : 'You have not selected any favourites.',
      genres : [] // this empty array get populated from the function at the top of the file
    },

    methods : {

    },

    delimiters : ["${", "}"]
  })
}

myApp.movieGenres(appData.movies, ["Action", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Family", "Fantasy", "Historical", "Horror", "Musical", "Romance", "Science Fiction", "Sport", "War", "Western"]);

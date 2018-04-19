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
    el : "#appKids",

    data : {
      title : "Kids",
      genresHeading : "Genres",
      favsHeading : "Favourites",
      message : 'You have not selected any favourites.',
      genres : [] // this empty array get populated from the function at the top of the file
    },

    methods : {

    },

    delimiters : ["${", "}"]
  })
}

myApp.movieGenres(appData.movies, ["Adventure", "Animation", "Comedy", "Family", "Fantasy", "Musical", ]);

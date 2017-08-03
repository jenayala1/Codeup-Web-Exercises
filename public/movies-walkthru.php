<?php
//pending some revisions - compare to the final draft sent out by the instructor
require 'movies.txt';
require_once 'functions.php';

function getMoviesByGenre($genre, $allMovies)
{
     $movies = []; //get all movies with that genre
        
        foreach($allMovies as $movie) {
            if(in_array($genre, $movie['genre'])) {
                $movies [] = $movie; //array push short cut to push them into an array called $movies
            }
        }
         //set $data['movies'] to hold $movies:
        $data['movies'] = $movies;
}

function getMoviesByTitle($title, $allMovies)
{
      $movies = [];
            //find movies by title
        foreach($allMovies as $movie) {
            // if title exists- case insenstive, returns movie with the index of the substring:
            if(stripos($movie['title'], $title) !== false) {
                // push movies with that title onto an arry called $movies
                $movies[]= $movie;
            }
        }
            //set $data[$movies] to hold $movies
        $data['movies'] = $movies;
}

function pageController($allMovies)
{
    //Pseudo code to determine the solution
 
    $data = [];
    // var_dump($_GET);

    $genre = inputGet('genre');
    $title = inputGet('title');
    $release = inputGet('release');


    //if GET request is empty, show every movie:
   
    }  if(!empty($genre) && empty($title) { //have genre but empty title
            $data['movies'] = getMoviesByGenre($genre, $allMovies);
       
    } elseif(!empty($title) && empty($genre)) {
            $data['movies'] = getMoviesByGenre($genre, $allMovies);
      

    } elseif(!empty($title) && !empty($genre)) {    
            //find movies with both that title & that genre
        

    } else  {
        $data['movies'] = $allMovies;)
    }

    if (!empty($release)) {
        $movies = [];

        foreach ($allMovies as $movie) {
            if($movie['release'] > $release) {
                $movies[] = $movie;
            }
        }

        $data['movies'] = $movies;
    }

    return $data;
}

    // if(isset($_GET['genre'])) {
    //     $genre = $_GET['genre'];
    //     $movies = [];

    //     foreach($allMovies as $movie) {
    //         if(in_array($genre, $movie['genre'])){

    //             $movies[] = $movie;
    //             //sets the search to pull all movies in the movie array set to the genre specified(by user - $genre provides doesn't hardcode the function to a specific genre)
    //         }
    //             //refer to needle/haystack concept
    //     }
    //     $data['movies'] = $movies;    

    // } elseif(isset($_GET['release'])) {
    //     $release = $_GET['release'];
    //     $movies = [];

    //     foreach($allMoveies as $movie) {
    //         if (in_array($release, $movie['release'])) {
    //             $movies[] = $movie;
    //         } 
    //     }
    //     $data['movies'] = $movies;
   
    // }   else {
    //     $data['movies'] = $allMovies;
    // }
    // // set $data['movies'] to hold all movies (unless another request is made.)
    // $data['movies'] = $allMovies;

    // return $data;

}

extract(pageController($allMovies));

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/movies.css" rel="stylesheet">
    <title>MOVIE LISTER</title>

</head>
<body>
    <main class="container">
        
        <h1>Welcome to MovieLister!</h1>

        <section class="form">
            <form method="GET" action="movies.php">
                <!-- Add an input to search by "title" -->
                <label for='title'> Search by Title</label
                    <input type="text" id="title" name="title" placeholder="search by title">

                <!-- Add a form that has an input for "genre" -->
                <label for="genre" > Search by Genre</label>
                    <input type="text" name="genre" id="genre" placeholder="search by genre">
          
                <!-- Add submit button -->
                <button type="submit">SUBMIT</button>
            </form>
        </section>

        <section class="links">
            <!-- Add a link that will show all movies  -->
            <a href="movies.php">Show all movies</a>

            <!-- Add a link that will show only movies with a release date after 2000 -->
            <a href="movies.php?release=release>2000?">All movies released after 2000</a>

            <!-- Add a link that shows all movies w/ the comedy genre -->
            <a href="movies.php?genre=comedy">Show only comedies</a>
            
            <a href="movies.php?genre=scifi">Sci-Fi</a>

        </section>
        <section class="movies">
            <!-- Show all the movies here -->
            <!-- Iterate through $movies array to show all or the filtered results-->
            <?php foreach($movies as $movie): ?>
                <div>
                    <h3>Title: <?= $movie['title'] ?></h3>
                    <p>Released in: <?= $movie['release'] ?></p>
                    <p>Genres: <?= implode(", ", $movie['genre']) ?></p>
                </div>
            <?php endforeach; ?>
        </section>
    </main>
</body>
</html>
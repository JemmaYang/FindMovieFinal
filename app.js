const imdb = require('imdb-api');
var movieTrailer = require('movie-trailer');
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
// var twitterAPI = require('node-twitter-api');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Twitter = require('twitter');



//SET UP MongoDB
MONGOLAB_URI='mongodb://yajingyang626:yajingyang626@ds115671.mlab.com:15671/heroku_dm9wxbnp';
mongoose.connect(MONGOLAB_URI);

//Data schema in database
var TodoSchema = new mongoose.Schema({
  name: String,
  year: String,
  rated: String,
  actors: String,
  director:String,
  genres:String,
  languages: String,
  plot: String,
  poster: String,
  IMDB: String, 
  Rotten: String,
  trailer:String
});

// Create a model based on the schema
var Todo = mongoose.model('Todo', TodoSchema);
 
//GET movie data
var movie = [];

 
imdb.getReq({ name: 'Logan' }, (err, things) => {
    movie[0] = things;
  
    movieTrailer('Logan', function (err, url) {
	movie[0].trailer = url;
     });
});

imdb.getReq({ name: 'La La Land' }, (err, things) => {
    movie[1] = things;
   
    movieTrailer('La La Land', function (err, url) {
	movie[1].trailer = url;
	
     });
});

imdb.getReq({ name: 'Get Out' }, (err, things) => {
    movie[2] = things;
   
    movieTrailer('Get Out', function (err, url) {
	movie[2].trailer = url;
     });
});

imdb.getReq({ name: 'WALL·E' }, (err, things) => {
    movie[3] = things;
   
    movieTrailer('WALL·E', function (err, url) {
	movie[3].trailer = url;
     });
});

imdb.getReq({ name: 'Lion' }, (err, things) => {
    movie[4] = things;
   
    movieTrailer('Lion', function (err, url) {
	movie[4].trailer = url;
     });
});

imdb.getReq({ name: 'The Intouchables' }, (err, things) => {
    movie[5] = things;
   
    movieTrailer('The Intouchables', function (err, url) {
	movie[5].trailer = url;
     });
});

imdb.getReq({ name: 'John Wick: Chapter 2' }, (err, things) => {
    movie[6] = things;
   
    movieTrailer('John Wick: Chapter 2', function (err, url) {
	movie[6].trailer = url;
     });
});

imdb.getReq({ name: 'Guardians of the Galaxy' }, (err, things) => {
    movie[7] = things;
   
    movieTrailer('Guardians of the Galaxy', function (err, url) {
	movie[7].trailer = url;
     });
});

imdb.getReq({ name: 'Star Wars: The Force Awakens' }, (err, things) => {
    movie[8] = things;
   
    movieTrailer('Star Wars: The Force Awakens', function (err, url) {
	movie[8].trailer = url;
     });
});

imdb.getReq({ name: 'Rogue One' }, (err, things) => {
    movie[9] = things;
   
    movieTrailer('Rogue One', function (err, url) {
	movie[9].trailer = url;
     });
});

imdb.getById( 'tt5442430' , (err, things) => {
    movie[10] = things;
   
    movieTrailer('Life', function (err, url) {
	movie[10].trailer = url;
     });
});

imdb.getReq({ name: '10 Cloverfield Lane' }, (err, things) => {
    movie[11] = things;
   
    movieTrailer('10 Cloverfield Lane', function (err, url) {
	movie[11].trailer = url;
     });
});

imdb.getReq({ name: 'Gravity' }, (err, things) => {
    movie[12] = things;
   
    movieTrailer('Gravity', function (err, url) {
	movie[12].trailer = url;
     });
});

imdb.getReq({ name: 'Arrival' }, (err, things) => {
    movie[13] = things;
   
    movieTrailer('Arrival', function (err, url) {
    movie[13].trailer = url;
     });
});

imdb.getReq({ name: 'Deadpool' }, (err, things) => {
    movie[14] = things;
   
    movieTrailer('Deadpool', function (err, url) {
    movie[14].trailer = url;
     });
});

imdb.getReq({ name: 'The Dark Knight' }, (err, things) => {
    movie[15] = things;
   
    movieTrailer('The Dark Knight', function (err, url) {
    movie[15].trailer = url;
     });
});

imdb.getReq({ name: 'Inception' }, (err, things) => {
    movie[16] = things;
   
    movieTrailer('Inception', function (err, url) {
    movie[16].trailer = url;
     });
});

imdb.getReq({ name: 'The Pianist' }, (err, things) => {
    movie[17] = things;
   
    movieTrailer('The Pianist', function (err, url) {
    movie[17].trailer = url;
     });
});

imdb.getReq({ name: 'A Beautiful Mind' }, (err, things) => {
    movie[18] = things;
   
    movieTrailer('A Beautiful Mind', function (err, url) {
    movie[18].trailer = url;
     });
});

imdb.getReq({ name: 'Inside Job' }, (err, things) => {
    movie[19] = things;
   
    movieTrailer('Inside Job', function (err, url) {
    movie[19].trailer = url;
     });
});

imdb.getReq({ name: 'Before the Flood' }, (err, things) => {
    movie[20] = things;
   
    movieTrailer('Before the Flood', function (err, url) {
    movie[20].trailer = url;
     });
});

imdb.getReq({ name: 'Twilight' }, (err, things) => {
    movie[21] = things;
   
    movieTrailer('Twilight', function (err, url) {
    movie[21].trailer = url;
     });
});

imdb.getReq({ name: 'Blue Is the Warmest Color' }, (err, things) => {
    movie[22] = things;
   
    movieTrailer('Blue Is the Warmest Color', function (err, url) {
    movie[22].trailer = url;
     });
});

imdb.getReq({ name: 'The Dreamers' }, (err, things) => {
    movie[23] = things;
   
    movieTrailer('The Dreamers', function (err, url) {
    movie[23].trailer = url;
     });
});

imdb.getReq({ name: 'The Girl with the Dragon Tattoo' }, (err, things) => {
    movie[24] = things;
   
    movieTrailer('The Girl with the Dragon Tattoo', function (err, url) {
    movie[24].trailer = url;
     });
});

imdb.getReq({ name: 'Suntan' }, (err, things) => {
    movie[25] = things;
   
    movieTrailer('Suntan', function (err, url) {
    movie[25].trailer = url;
     });
});

imdb.getReq({ name: 'Stoker' }, (err, things) => {
    movie[26] = things;
   
    movieTrailer('Stoker', function (err, url) {
    movie[26].trailer = url;
     });
});

imdb.getReq({ name: 'Amélie' }, (err, things) => {
    movie[27] = things;
   
    movieTrailer('Amélie', function (err, url) {
    movie[27].trailer = url;
     });
});

imdb.getReq({ name: 'Let the Right One In' }, (err, things) => {
    movie[28] = things;
   
    movieTrailer('Let the Right One In', function (err, url) {
    movie[28].trailer = url;
     });
});

imdb.getReq({ name: 'The Lives of Others' }, (err, things) => {
    movie[29] = things;
   
    movieTrailer('The Lives of Others', function (err, url) {
    movie[29].trailer = url;
     });
});

//set up server
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );  
});

app.get('/lalaLand.html', function (req, res) {
   res.sendFile( __dirname + "/" + "lalaLand.html" );
});

app.get('/profile.html', function (req, res) {
   res.sendFile( __dirname + "/" + "profile.html" );
});

app.get("/data", function(req, res) {
    
    res.send(movie); 

    for(var i=0;i<movie.length;i++){

       var todo = new Todo({name: movie[i].title, year: movie[i].year, rated: movie[i].rated, actors:movie[i].actors, director: movie[i].director, genres: movie[i].genres, languages: movie[i].languages, plot: movie[i].plot, poster: movie[i].poster, IMDB: movie[i].rating, Rotten: movie[i].ratings[1].Value, trailer:movie[i].trailer});
       
       todo.save(function(err){
          if(err)   {console.log(err);}
             else  {
               
             }
       });
    }

});

app.use('/public', express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});

//twitter data

var twitter = new Twitter({
    consumer_key: 'R3xpQmv7VdH2JIvoUoTuRDRQC',
    consumer_secret: 'UE7fQENSPdZp0FNthv3Wzc50O5YkRRrRG0ZCtugtV5IZDwi1yD',
    access_token_key: '733315967606890496-dUTDnbRhVRZX6zJiwIvooCPX4hFg3t0',
    access_token_secret: '7ZOAaDLdwHcKfgPFIf1WCirSJMJD8NwVdstwk1E4onzn1'
});

app.get("/lalaLand", function(req, res){

  twitter.get('search/tweets', { q: 'La La Land', count:15}, function(err, data, response) {
    var test =[];

    for (var i=0;i<data.statuses.length;i++){
        test[i] = data.statuses[i];
     }
      // console.log(test);
      res.send(test);
   });
});

var savedMovie = [];

app.get("/save", function(req,res){

    Todo.findOne({'name': 'La La Land' },function (err, todos) {
                    
        if (err) {console.error(err);}
        else{
           savedMovie = todos;
           console.log(savedMovie);
           res.send(savedMovie);
        }     
    });
   
 });

app.get("/profile", function(req, res){
     res.send(savedMovie);
      console.log(savedMovie);
            
});


// twitter.post('statuses/update', { status: 'test02!' }, function(err, data, response) {
//   console.log(data)
// });


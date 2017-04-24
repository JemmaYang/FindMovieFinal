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

imdb.getReq({ name: 'The Godfather' }, (err, things) => {
    movie[3] = things;
   
    movieTrailer('The Godfather', function (err, url) {
	movie[3].trailer = url;
     });
});

imdb.getReq({ name: 'Lion' }, (err, things) => {
    movie[4] = things;
   
    movieTrailer('Lion', function (err, url) {
	movie[4].trailer = url;
     });
});

imdb.getReq({ name: 'What Ever Happened to Baby Jane?' }, (err, things) => {
    movie[5] = things;
   
    movieTrailer('What Ever Happened to Baby Jane?', function (err, url) {
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

//set up server
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );  
});

app.get('/gravity.html', function (req, res) {
   res.sendFile( __dirname + "/" + "gravity.html" );
});

app.get('/profile.html', function (req, res) {
   res.sendFile( __dirname + "/" + "profile.html" );
});

app.get("/data", function(req, res) {
    res.send(movie);  

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

app.get("/gravity", function(req, res){

  twitter.get('search/tweets', { q: 'La La Land', count:15}, function(err, data, response) {
    var test =[];

    for (var i=0;i<data.statuses.length;i++){
        test[i] = data.statuses[i];
     }
      // console.log(test);
      res.send(test);
   });
});

app.get("/save", function(req,res){

    var todo = new Todo({name: movie[1].title, year: movie[1].year, rated: movie[1].rated, actors:movie[1].actors, director: movie[1].director, genres: movie[1].genres, languages: movie[1].languages, plot: movie[1].plot, poster: movie[1].poster, IMDB: movie[1].rating, Rotten: movie[1].ratings[1].Value, trailer:movie[1].trailer});

    todo.save(function(err){
        
        if(err)   {console.log(err);}
            
        else  {
                Todo.find(function (err, todos) {
                    
                    if (err) {console.error(err);}
          
                });
            }     
        });
 });

app.get("/profile", function(req, res){
         Todo.find(function (err, todos) {
                    
                    if (err) {console.error(err);}

                    else{
                     res.json(todos);
                     console.log("You find " + todos); 
                    }
          
         });
            
});
// twitter.post('statuses/update', { status: 'test02!' }, function(err, data, response) {
//   console.log(data)
// });

// twitter.stream('statuses/filter', {track: 'MovieGravity'}, function(stream) {
//   stream.on('data', function(event) {
//     console.log(event && event.text);
//   });
 
//   stream.on('error', function(error) {
//     throw error;
//   });
// });

// var testAPI = new twitterAPI({
//     consumerKey: 'R3xpQmv7VdH2JIvoUoTuRDRQC',
//     consumerSecret: 'UE7fQENSPdZp0FNthv3Wzc50O5YkRRrRG0ZCtugtV5IZDwi1yD',
//     callback: '/index.html'
// });

// var _requestSecret;

//  app.get("/request-token", function(req, res) {
//         testAPI.getRequestToken(function(err, requestToken, requestSecret) {
//         	 console.log(requestSecret);
//              console.log(requestToken);
//             if (err)  {
//             	res.status(500).send(err);    
//             }
                
//             else {
//                 _requestSecret = requestSecret;
//                 res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + requestToken);

//             }
//         });
//     });

//  app.get("/access-token", function(req, res) {
//       var requestToken = req.query.oauth_token,
//       verifier = req.query.oauth_verifier;

//        testAPI.getAccessToken(requestToken, _requestSecret, verifier, function(err, accessToken, accessSecret) {
//             if (err)
//                 res.status(500).send(err);
//             else
//                 testAPI.verifyCredentials(accessToken, accessSecret, function(err, user) {
//                     if (err)
//                         res.status(500).send(err);
//                     else
//                         res.send(user);
//                         consolo.log(user);
//                 });
//         });
//     });

const imdb = require('imdb-api');
var movieTrailer = require('movie-trailer');
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var Twitter = require("node-twitter-api");
 

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

imdb.getReq({ name: 'Hacksaw Ridge' }, (err, things) => {
    movie[3] = things;
   
    movieTrailer('Hacksaw Ridge', function (err, url) {
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


app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
   // res.send(movie[0]);  
});

app.get("/data", function(req, res) {
    res.send(movie);  
})

app.use('/public', express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});


var twitter = new Twitter({
    consumerKey: 'YWYbvfXgysPHUfClO6uE9DBw',
    consumerSecret: 'AZg9z49VhOleJd90zm3J7BAHmVuWL2xSkUx2cRzt4W4yQCVP7t',
    callback: 'http://localhost:3000/auth/twitter/callback'
});

var _requestSecret;

 app.get("/request-token", function(req, res) {
        twitter.getRequestToken(function(err, requestToken, requestSecret) {
        	 console.log(requestSecret);
              console.log(requestToken);
            if (err)  {
            	res.status(500).send(err);    
            }
                
            else {
                _requestSecret = requestSecret;
                res.redirect("https://twitter.com/oauth/authenticate?oauth_token=" + requestToken);

            }
        });
    });

 app.get("/access-token", function(req, res) {
      var requestToken = req.query.oauth_token,
      verifier = req.query.oauth_verifier;

        twitter.getAccessToken(requestToken, _requestSecret, verifier, function(err, accessToken, accessSecret) {
            if (err)
                res.status(500).send(err);
            else
                twitter.verifyCredentials(accessToken, accessSecret, function(err, user) {
                    if (err)
                        res.status(500).send(err);
                    else
                        res.send(user);
                });
        });
    });

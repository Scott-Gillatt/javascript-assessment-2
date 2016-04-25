/* global angular */
var app = angular.module('Films', []);

var films = [{
    name: 'Cinderella',
    year: 1950
}, {
        name: 'Snow White and the Seven Dwarfs',
        year: 1937
    }, {
        name: 'Fantasia',
        year: 1940
    }, {
        name: 'The Jungle Book',
        year: 1967
    }, {
        name: 'Sleeping Beauty',
        year: 1959
    }, {
        name: 'Pinocchio',
        year: 1940
    }, {
        name: 'One Hundred and One Dalmations',
        year: 1961
    }, {
        name: 'Bambi',
        year: 1942
    }, {
        name: 'Alice in Wonderland',
        year: 1951
    }, {
        name: 'Peter Pan',
        year: 1953
    }, {
        name: 'The Sword in the Stone',
        year: 1963
    }, {
        name: 'Lady and the Tramp',
        year: 1955
    }, {
        name: 'Song of the South',
        year: 1946
    }, {
        name: 'Steamboat Willie',
        year: 1928
    }, {
        name: 'Snow White and the Seven Dwarfs',
        year: 1937
    }]
/**
 * In this scenario you will be working with a single data set.
 * The Data set is an array of objects stored in a variable called films.
 * if you look at films.js you can see the array.
 * Each object in the array is a film that has a name and year of release. 
 * 
 * films is a global variable that you will have access to 
 * inside your functions it does not have to be passed as an argument
 * if your functions are written to pass in the array films 
 * ensure that it is the last argument
 * 
 * Many of the questions will require you to finish the functions 
 * that are prewritten,
 * Add arguments when needed
 * You will not need to invoke any of the functions yourself
 * The Unit Tests should let you know when you got the function right
 * 
 * For Question 7 you will need to move everything over to 
 * VSCode and build your angular app there.
 * When you complete the app push it to your github and slack me with the url.
 * 
*/

//Question 1 - Finish the function called filmCount so it will return the total number of films in the array
function filmCount() {
    var totalFilms = 0;
    for (var i = 0; i < films.length; i++) {
        totalFilms++
    }
    return totalFilms
}

//Question 2 - Find film by Title, be sure to return the entire film object 
function findTitle(title) {
    for (var i = 0; i < films.length; i++) {
        if (title === films[i].name) {
            return films[i]
        }
    }
}

//Question 3 - Add each of the movies in the newFilms array to the films array
var newFilms = [{
    name: 'Tangled',
    year: 2010
}, {
        name: 'Aladdin',
        year: 1992
    }, {
        name: 'Zootopia',
        year: 2016
    }, {
        name: 'The Little Mermaid',
        year: 1989
    }, {
        name: 'Beauty and the Beast',
        year: 1991
    }]

function addNewFilms() {
    for (var i = 0; i < newFilms.length; i++) {
        films.push(newFilms[i]);
    }
}
addNewFilms()

//Question 4 - Remove any duplicate titles found in the films array by name
function removeDups() {
    var temp = 0
    for (var i = 0; i < films.length; i++) {
        for (var j = i + 1; j < films.length; j++) {
            if (films[i].name === films[j].name) {
                temp = films.indexOf(films[i])
                films.splice(temp, 1);
                j--;
            }
        }
    }
}
removeDups()

//Question 5 - Find All films within a starting year and ending year
function findReleasesWithin(a, b) {
    var results = [];
    for (var i = 0; i < films.length; i++) {
        if ((films[i].year >= a) && (films[i].year <= b))
            results.push(films[i]);
    }
    return results;
}
// for (a in films){console.log([a])}

//BONUS QUESTION - Arrange the films array from oldest to newest 
function sortByYear(property) {
    return function (a,b) {
        if (a[property] < b[property]){
            return -1
        } 
        else if (a[property] > b[property]){
            return 1
        } 
        else {
            return 0
        }
        // var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        // return result
    }
}
films.sort(sortByYear("year"))

function years (){
    var temp = []
    for (var i = 0; i < films.length; i++){
        temp.push(films[i].year)
    }
    return temp
}
//Question 7 - Using the films array build an angular app
//that will let you manage adding and removing films with a view
console.log(filmCount())
for (var a in films){
    console.log(films[a].name,films[a].year)
    }


console.log(findTitle("The Jungle Book"))
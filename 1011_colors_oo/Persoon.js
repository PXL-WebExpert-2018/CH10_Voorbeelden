// Persoon.js - module om persoons-objecten te instantieren.
let Persoon = function(voornaam, achternaam, email){
	this.voornaam = voornaam;
	this.achternaam = achternaam;
	this.email = email;
};
module.exports = Persoon;
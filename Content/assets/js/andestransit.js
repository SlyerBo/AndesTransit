// JavaScript Document
// Copyright: AndesTransit



//$('#uam-modal').modal('show');

$(document).ready(function () {

    var slider = $('.testimonial').bxSlider({

    });

	$('.uam-start-country').show();
	$('.uam-start-community').hide(); //Zone
	$('.uam-start-area').hide(); //location
	$('.uam-end-country').hide();
	$('.uam-end-community').hide();
	$('.uam-end-area').hide();
});

//departure
$('.map-peru').click(function () {  
    $('.map-peru').addClass('selected');
    $('.map-ecuador').removeClass('selected');  
    $('.map-colombia').removeClass('selected');
    $('.map-bolivia').removeClass('selected');
    $('.map-chile').removeClass('selected');
    $('.map-argentina').removeClass('selected');
    $('.info-departure-country').text('Peru');
    $('.map-area-departure-city').hide();
    $('.map-area-peru').show();

    $('.uam-start-country-next').trigger('click');
});

$('.map-ecuador').click(function() {
    $('.map-peru').removeClass('selected');
    $('.map-ecuador').addClass('selected');
    $('.map-colombia').removeClass('selected');
    $('.map-bolivia').removeClass('selected');
    $('.map-chile').removeClass('selected');
    $('.map-argentina').removeClass('selected');
    $('.info-departure-country').text('Ecuador');
    $('.map-area-departure-city').hide();
    $('.map-area-ecuador').show();

    $('.uam-start-country-next').trigger('click');
});

$('.map-colombia').click(function() {
    $('.map-peru').removeClass('selected');
    $('.map-ecuador').removeClass('selected');
    $('.map-colombia').addClass('selected');
    $('.map-bolivia').removeClass('selected');
    $('.map-chile').removeClass('selected');
    $('.map-argentina').removeClass('selected');
    $('.info-departure-country').text('Colombia');
    $('.map-area-departure-city').hide();
    $('.map-area-colombia').show();

    $('.uam-start-country-next').trigger('click');
});

$('.map-bolivia').click(function () {
    $('.map-peru').removeClass('selected');
    $('.map-ecuador').removeClass('selected');
    $('.map-colombia').removeClass('selected');
    $('.map-bolivia').addClass('selected');
    $('.map-chile').removeClass('selected');
    $('.map-argentina').removeClass('selected');
    $('.info-departure-country').text('Bolivia');
    $('.map-area-departure-city').hide();
    $('.map-area-bolivia').show();

    $('.uam-start-country-next').trigger('click');
});
$('.map-chile').click(function () {
    $('.map-peru').removeClass('selected');
    $('.map-ecuador').removeClass('selected');
    $('.map-colombia').removeClass('selected');
    $('.map-bolivia').removeClass('selected');
    $('.map-chile').addClass('selected');
    $('.map-argentina').removeClass('selected');
    $('.info-departure-country').text('Chile');
    $('.map-area-departure-city').hide();
    $('.map-area-chile').show();

    $('.uam-start-country-next').trigger('click');
});
$('.map-argentina').click(function () {
    $('.map-peru').removeClass('selected');
    $('.map-ecuador').removeClass('selected');
    $('.map-colombia').removeClass('selected');
    $('.map-bolivia').removeClass('selected');
    $('.map-chile').removeClass('selected');
    $('.map-argentina').addClass('selected');
    $('.info-departure-country').text('Argentina');
    $('.map-area-departure-city').hide();
    $('.map-area-argentina').show();

    $('.uam-start-country-next').trigger('click');
});

$('.area-departure').click(function () {
    $that = $(this);
    $('.area-departure').removeClass('selected');
    $that.addClass('selected');

    $('.btn-go-to-Location').trigger('click');
});

$('.uam-start-country-next').click(function () {
    $('.pin-type').val('departure');

    if ($('.map-departure-country').hasClass('selected'))
    {
        $('.uam-start-country').hide();
        $('.uam-start-community').show('slow');
        $('.uam-start-area').hide();
        $('.uam-end-country').hide();
        $('.uam-end-community').hide();
        $('.uam-end-area').hide();
    }
    else
    {
        alert('Please select departure country')
    }
	
});

$('.country-home-origin').click(function () {
    var cityName = $(this).html();
    $('.info-departure-city').text(cityName)
    $('.uam-start-area').show();
    $('.uam-end-country').hide();
    //$('.uam-end-community').hide();
    $('.uam-end-area').hide();
  
});

//arrival location 
$('.btn-go-to-arrival-country').click(function () {
    $('.pin-type').val('arrival');
    $('.uam-start-country').hide();
    $('.uam-start-community').hide();
    $('.uam-start-area').hide();
    $('.uam-end-country').show('slow');
    $('.uam-end-community').hide();
    $('.uam-end-area').hide();
});

$('.btn-back-to-departure-location').click(function () {
    $('.pin-type').val('departure');
    $('.uam-start-country').hide(); //Departure Country
    $('.uam-start-community').hide();   //Departure Zone
    $('.uam-start-area').show('slow');       //Departure Location
    $('.uam-end-country').hide();     //Arrival Country
    $('.uam-end-community').hide();  //Arrival Zone
    $('.uam-end-area').hide();      //Arrival Location
});


$('.area-arrival').click(function () {
    $that = $(this);
    $('.area-arrival').removeClass('selected');
    $that.addClass('selected');

    $('.btn-go-to-end-Location').trigger('click');
});

$('.country-home-destination').click(function () {
    var cityName = $(this).html();
    $('.info-arrival-city').text(cityName)
    $('.uam-start-area').hide();
    $('.uam-end-country').hide();
    $('.uam-end-area').show('slow');
});

//back button functionality
$('.btn-back-to-departure-country').click(function () {
    $('.uam-start-country').show('slow'); //Departure Country
    $('.uam-start-community').hide();   //Departure Zone
    $('.uam-start-area').hide();       //Departure Location
    $('.uam-end-country').hide();     //Arrival Country
    $('.uam-end-community').hide();  //Arrival Zone
    $('.uam-end-area').hide();      //Arrival Location
});

$('.btn-back-to-departure-city').click(function () {
    $('.uam-start-country').hide(); //Departure Country
    $('.uam-start-community').show('slow');   //Departure Zone
    $('.uam-start-area').hide();       //Departure Location
    $('.uam-end-country').hide();     //Arrival Country
    $('.uam-end-community').hide();  //Arrival Zone
    $('.uam-end-area').hide();      //Arrival Location
});

$('.btn-back-to-arrival-country').click(function () {
    $('.uam-start-country').hide(); //Departure Country
    $('.uam-start-community').hide();   //Departure Zone
    $('.uam-start-area').hide();       //Departure Location
    $('.uam-end-country').show('slow');     //Arrival Country
    $('.uam-end-community').hide();  //Arrival Zone
    $('.uam-end-area').hide();      //Arrival Location
});
$('.btn-back-to-arrival-city').click(function () {
    $('.uam-start-country').hide(); //Departure Country
    $('.uam-start-community').hide();   //Departure Zone
    $('.uam-start-area').hide();       //Departure Location
    $('.uam-end-country').hide();     //Arrival Country
    $('.uam-end-community').show('slow');  //Arrival Zone
    $('.uam-end-area').hide();      //Arrival Location
});

// JavaScript Document
// Copyright: AndesTransit

$('#carousel-home').carousel();

$('#country-selected').click(function() {
    $('.ctp-country').hide('slow');
    $('.ctp-areas-by-letter').show('slow');
	$('.dropdown-menu').css( 'display', 'block' );
});

$('#letter-selected').click(function() {
    $('.ctp-areas-by-letter').hide('slow');
    $('.ctp-area').show('slow');
	$('.dropdown-menu').css( 'display', 'block' );	
});

$('#country-selected-edit').click(function() {
    $('.ctp-country').show('slow');
    $('.ctp-areas-by-letter').hide('slow');
	$('.ctp-area').hide('slow');
	$('.dropdown-menu').css( 'display', 'block' );
});

$('#country-selected-edit2').click(function() {
    $('.ctp-country').show('slow');
    $('.ctp-areas-by-letter').hide('slow');
	$('.ctp-area').hide('slow');
	$('.dropdown-menu').css( 'display', 'block' );
});

$('#letter-selected-edit').click(function() {
    $('.ctp-country').hide('slow');
    $('.ctp-areas-by-letter').show('slow');
	$('.ctp-area').hide('slow');
	$('.dropdown-menu').css( 'display', 'block' );
});

$('.dropdown-toggle').click(function() {
	if($('.dropdown-menu').css('display') == 'none')
	{
		$('.dropdown-menu').css( 'display', 'block' );
	}
	else
	{
		$('.dropdown-menu').css( 'display', 'none' );
	}
});

//$('#uam-modal').modal('show');

$(document).ready(function() {
	$('.uam-start-country').show();
	$('.uam-start-community').hide();
	$('.uam-start-area').hide();
});


$('.map-bolivia').click(function() {
	$('.map-bolivia').addClass('selected');	
	$('.map-ecuador').removeClass('selected');
	$('.map-peru').removeClass('selected');
	$('.map-colombia').removeClass('selected');
});

$('.map-ecuador').click(function() {
	$('.map-bolivia').removeClass('selected');
	$('.map-ecuador').addClass('selected');
	$('.map-peru').removeClass('selected');
	$('.map-colombia').removeClass('selected');
});

$('.map-peru').click(function() {
	$('.map-bolivia').removeClass('selected');
	$('.map-ecuador').removeClass('selected');
	$('.map-peru').addClass('selected');
	$('.map-colombia').removeClass('selected');
});

$('.map-colombia').click(function() {
	$('.map-bolivia').removeClass('selected');
	$('.map-ecuador').removeClass('selected');
	$('.map-peru').removeClass('selected');
	$('.map-colombia').addClass('selected');
});

$('.uam-start-country-next').click(function() {
	$('.uam-start-country').hide();
	$('.uam-start-community').show('slow');
	$('.uam-start-area').hide();
});

$('.area-beni, .area-santa-cruz').click(function() {
	$('.uam-start-country').hide();
	$('.uam-start-community').hide();
	$('.uam-start-area').show('slow');
});

$('#search-origin').focus(function() {
	$('.list-below-origin').show('slow');
}).blur(function() {
	$('.list-below-origin').hide('slow');
});

$('.list-below-origin').mouseleave(function() {
	if(!$('#search-origin').focus()) {
		$('.list-below-origin').hide('slow');
	}	
});

function supports_input_placeholder() {
        var i = document.createElement('input');
        return 'placeholder' in i;
    }

if (!supports_input_placeholder()) {
    var fields = document.getElementsByTagName('INPUT');
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].hasAttribute('placeholder')) {
            fields[i].defaultValue = fields[i].getAttribute('placeholder');
            fields[i].onfocus = function () { if (this.value == this.defaultValue) this.value = ''; }
            fields[i].onblur = function () { if (this.value == '') this.value = this.defaultValue; }
        }
    }
}


function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('arr-down-green arr-right-green');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);



$(function() {
    $( "#slider-departure" ).slider({
    	range: true,
    	min: 0,
    	max: 24,
		step: 1,
    	values: [ 6, 15 ],
    	slide: function( event, ui ) {
			$( "#departure-min" ).val( ui.values[ 0 ].toFixed(2) );
			$( "#departure-max" ).val( ui.values[ 1 ].toFixed(2) );
    	}
    });
	
	$( "#departure-min" ).val( $( "#slider-departure" ).slider( "values", 0 ).toFixed(2) );
	$( "#departure-max" ).val( $( "#slider-departure" ).slider( "values", 1 ).toFixed(2) );
});


$(function() {
    $( "#slider-arrival" ).slider({
    	range: true,
    	min: 0,
    	max: 24,
		step: 1,
    	values: [ 10, 20 ],
    	slide: function( event, ui ) {
			$( "#arrival-min" ).val( ui.values[ 0 ].toFixed(2) );
			$( "#arrival-max" ).val( ui.values[ 1 ].toFixed(2) );
    	}
    });
	
	$( "#arrival-min" ).val( $( "#slider-arrival" ).slider( "values", 0 ).toFixed(2) );
	$( "#arrival-max" ).val( $( "#slider-arrival" ).slider( "values", 1 ).toFixed(2) );
});


$(function() {
    $( "#slider-price" ).slider({
    	range: true,
    	min: 0,
    	max: 500,
    	values: [ 150, 350 ],
		step: 20,
    	slide: function( event, ui ) {
    		//$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			$( "#price-min" ).val( ui.values[ 0 ] + " $" );
			$( "#price-max" ).val( ui.values[ 1 ] + " $" );
    	}
    });
	$( "#price-min" ).val( $( "#slider-price" ).slider( "values", 0 ) + " $" );
	$( "#price-max" ).val( $( "#slider-price" ).slider( "values", 1 ) + " $" );
});

$(document).ready(function() {
	$('#collapseInner1').collapse("hide");
});

/* find a proper way to code this segment */
$('[data-toggle=collapse]').click(function() {
	var $tphTD = $(this).parent().parent().parent().parent().parent().parent().children();
	//var $tphLeft = $(this).parent().parent().parent().parent().parent().parent().children().children('.tph-left');	
	//$tphLeft.toggleClass('on-toggle');
	//var $tphLeftClicked = $(this).parent().parent().parent().parent().parent().parent().children().children('.tph-left-clicked');
	//$tphLeftClicked.toggleClass('on-toggle');
	$tphTD.toggleClass('on-toggle');
	$tphTD.children('.tph-left').toggleClass('on-toggle');
	
	if( $tphLeft.hasClass('on-toggle') ) {
		//$('.tph-left.on-toggle').hide();
		//$('.tph-left-clicked.on-toggle').show();
	}
	else {
		//$('.tph-left.on-toggle').show();
		//$('.tph-left-clicked.on-toggle').hide();
	}
	//$(this).parent().parent().parent().parent().parent().parent().children().children().toggleClass('on-toggle');	
	//$tphLeft.toggleClass('on-toggle');
	//$('.tph-left.on-toggle').toggleClass('hide');
	//$('.tph-left-clicked.on-toggle').toggleClass('show');
});










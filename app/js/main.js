
// подключаем слайдер
$( '.owl-carousel' ).owlCarousel( {

    loop: true,
    margin: 10,
    nav: true,
    responsive: {

        0: {items: 1},
        600: {items: 1},
        1000: {items: 1}

    }

} );


// стилизация селектов
$( 'select' ).each( function() {

    $( this ).siblings( 'p' ).text( $( this ).children('option:selected').text() );
} );

$( 'select' ).change( function() {

    $( this ).siblings( 'p' ).text( $( this ).children('option:selected').text() );
} );


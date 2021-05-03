$( function () {

    //Menu button
    $( '#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4' ).click( function () {
        $( this ).toggleClass( 'open' );
    } );
    //Menu Button


    $( "#nav-icon1" ).click( function () {
        $( "body" ).toggleClass( "show-menu" );
    } )


    $( window ).scroll( function () {
        var scroll = $( window ).scrollTop();
        var pageHeight = 82;
        if ( scroll > pageHeight ) {
            $( ".spark-nav" ).addClass( "white-nav" );
            $( ".menu-icon-color" ).addClass( "menu-white-icon-color" );
            $( ".navbar-nav" ).removeClass( "arrow-fix-top" );

        } else {
            $( ".spark-nav" ).removeClass( "white-nav" );
            $( ".menu-icon-color" ).removeClass( "menu-white-icon-color" );
            $( ".navbar-nav" ).addClass( "arrow-fix-top" );

        }
    } )



    //  commen js

    $( "svg" ).css( "display", "block" );
    $( 'img[src$=".svg"]' ).css( "display", "block" );
    if ( $( '.home' ).length > 0 ) {
        $( '.home' ).fullpage( {
            licenseKey: 'C120BAB4-77EB4161-A6B424E6-962255CC',
            verticalCentered: false,
            scrollBar: true,
            //anchors: ['Spark', 'About', 'Services', 'Portfolio', 'Clients', 'Blog', 'Contacts'],
            responsiveWidth: 1024,
            responsiveHeight: 720,
            sectionSelector: '.my-section',
        } );

    }
    //

} );


//$('select').each(function () {
//    var $this = $(this);
//        numberOfOptions = $(this).children('option').length;

//    $this.addClass('select-hidden');
//    $this.wrap('<div class="select"></div>');
//    $this.after('<div class="select-styled"></div>');

//    var $styledSelect = $this.next('div.select-styled');
//    $styledSelect.text($this.children('option').eq(0).text());

//    var $list = $('<ul />', {
//        'class': 'select-options'
//    }).insertAfter($styledSelect);



//    for (var i = 0; i < numberOfOptions; i++) {
//        $('<li />', {
//            text: $this.children('option').eq(i).text(),
//            rel: $this.children('option').eq(i).val()
//        }).appendTo($list);
//    }


//    var $listItems = $list.children('li');

//    $styledSelect.click(function (e) {
//        e.stopPropagation();
//        $('div.select-styled.active').not(this).each(function () {
//            $(this).removeClass('active').next('ul.select-options').hide();
//        });
//        $(this).toggleClass('active').next('ul.select-options').toggle();
//    });
//    $listItems.click(function (e) {
//        e.stopPropagation();
//        $styledSelect.text($(this).text()).removeClass('active');
//        $this.val($(this).attr('rel'));

//        $list.hide();
//        //console.log($this.val());
//    });

//    $(document).click(function () {
//        $styledSelect.removeClass('active');
//        $list.hide();
//    });

//});

//// select menu custom design


//scroll to div 

$( function () {

    $.fn.scrollToTop = function () {
        $( this ).hide();


        if ( $( window ).scrollTop() != "0" ) {
            $( this ).fadeIn( "slow" )
        }
        var scrollDiv = $( this );
        $( window ).scroll( function () {
            if ( $( window ).scrollTop() == "0" ) {
                $( scrollDiv ).fadeOut( "slow" )
            } else {
                $( scrollDiv ).fadeIn( "slow" )
            }
        } );


        $( this ).click( function () {
            $( "html, body" ).animate( {
                scrollTop: 0
            }, "slow" )
        } )
    }


    $( "#toTop" ).scrollToTop();
} );
// scroll to div


//svg convert
// svg convert
jQuery( 'img.svg' ).each( function () {
    var $img = jQuery( this );
    var imgID = $img.attr( 'id' );
    var imgClass = $img.attr( 'class' );
    var imgURL = $img.attr( 'src' );

    jQuery.get( imgURL, function ( data ) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery( data ).find( 'svg' );

        // Add replaced image's ID to the new SVG
        if ( typeof imgID !== 'undefined' ) {
            $svg = $svg.attr( 'id', imgID );
        }
        // Add replaced image's classes to the new SVG
        if ( typeof imgClass !== 'undefined' ) {
            $svg = $svg.attr( 'class', imgClass + ' replaced-svg' );
        }

        $svg = $svg.removeAttr( 'xmlns:a' );

        // Replace image with new SVG
        $img.replaceWith( $svg );

    }, 'xml' );

} );

//svg convert


/// swiper code

//var swiper = new Swiper('.client-logo', {
//    pagination: {
//        el: '.swiper-pagination',
//        clickable: true,
//    },
//    slidesPerView: 3,
//    slidesPerColumn: 2,
//    paginationClickable: true,
//    spaceBetween: 25,
//    breakpoints: {
//        1024: {
//            slidesPerView: 3,
//            spaceBetween: 15
//        },
//        988: {
//            slidesPerView: 3,
//            spaceBetween: 15
//        },
//        640: {
//            slidesPerView: 2,
//            spaceBetween: 20
//        },
//        320: {
//            slidesPerView: 1,
//            spaceBetween: 10
//        }
//    }
//});
/// swiper code

//Ajax Forms Scripts.
//overlay
$( function () {
    $( 'form' ).submit( function () {
        if ( $( this ).valid() ) {
            $( '.formOverlay' ).LoadingOverlay( "show", {
                background: "rgba(32, 32, 32, 0.8)",
                imageColor: "#ffffff",
                textColor: "#ffffff",
                size: "50",
                maxSize: "150",
                minSize: "20"
            } );
        }

    } );
} );


function reloadloadRecaptcha() {
    if ( typeof grecaptcha !== 'undefined' ) {
        grecaptcha.ready( function () {
            grecaptcha.execute( '6LfFsKgUAAAAAB7w3IGQ4tXsIi2xbHS9M_yYMVNj', { 'action': 'homepage' } ).then( function ( token ) {

                if ( $( '#g-recaptcha-response2' ).length > 0 ) {
                    document.getElementById( 'g-recaptcha-response2' ).value = token;
                }

                if ( $( '#g-recaptcha-response' ).length > 0 ) {
                    document.getElementById( 'g-recaptcha-response' ).value = token;
                }

            } );
        } );
    }
}
reloadloadRecaptcha()

//feadback
var onFeedbackSuccess = function ( data ) {
    reloadloadRecaptcha()
    $( '.formOverlay' ).LoadingOverlay( "hide", true );
    $( '#FeedbackMSGDN' ).siblings( 'form' ).find( '.feedback input' ).val( "" );
    $( '#FeedbackMSGDN' ).siblings( 'form' ).find( '.feedback textarea' ).val( "" );

    if ( data === "1" ) {
        $( '#FeedbackMSGDN' ).addClass( 'd-none' );
        $( '#FeedbackMSGSU' ).removeClass( 'd-none' );
        setTimeout( function () {
            $( '#FeedbackMSGSU' ).addClass( 'd-none' );
        }, 3000 );
    } else {
        $( '#FeedbackMSGSU' ).addClass( 'd-none' );
        $( '#FeedbackMSGDN' ).removeClass( 'd-none' );
        setTimeout( function () {
            $( '#FeedbackMSGDN' ).addClass( 'd-none' );
        }, 3000 );
    }
};

//qoute
var onQouteSuccess = function ( data ) {
    reloadloadRecaptcha()
    $( '.formOverlay' ).LoadingOverlay( "hide", true );
    $( '#QouteMSGDN' ).parents( 'form' ).find( '.col-lg-6 input' ).val( "" );
    $( '#QouteMSGDN' ).parents( 'form' ).find( '.col-lg-6 textarea' ).val( "" );
    if ( data === "1" ) {

        $( '#QouteMSGDN' ).addClass( 'd-none' );
        $( '#QouteMSGSU' ).removeClass( 'd-none' );
        setTimeout( function () {
            $( '#QouteMSGSU' ).addClass( 'd-none' );
        }, 3000 );
    } else {
        $( '#QouteMSGSU' ).addClass( 'd-none' );
        $( '#QouteMSGDN' ).removeClass( 'd-none' );
        setTimeout( function () {
            $( '#QouteMSGDN' ).addClass( 'd-none' );
        }, 3000 );
    }
};

//Career
var onJoinSuccess = function ( data ) {
    reloadloadRecaptcha()
    $( '.formOverlay' ).LoadingOverlay( "hide", true );
    $( '#JoinMSGDN' ).parents( 'form' ).find( 'div input' ).val( "" );
    $( '#JoinMSGDN' ).parents( 'form' ).find( 'div textarea' ).val( "" );
    $( '.dz-preview.dz-processing.dz-success.dz-complete.dz-image-preview' ).remove();

    if ( data === "1" ) {
        $( '#JoinMSGDN' ).addClass( 'd-none' );
        $( '#JoinMSGSU' ).removeClass( 'd-none' );
        setTimeout( function () {
            $( '#JoinMSGSU' ).addClass( 'd-none' );
        }, 3000 );
    } else {
        $( '#JoinMSGSU' ).addClass( 'd-none' );
        $( '#JoinMSGDN' ).removeClass( 'd-none' );
        setTimeout( function () {
            $( '#JoinMSGDN' ).addClass( 'd-none' );
        }, 3000 );
    }
};



//Request
var onRequestSuccess = function ( data ) {
    reloadloadRecaptcha()
    $( '.formOverlay' ).LoadingOverlay( "hide", true );
    $( '#RequestMSGDN' ).parents( 'form' ).find( '.col-lg-6 input' ).val( "" );
    $( '#RequestMSGDN' ).parents( 'form' ).find( '.col-lg-6 textarea' ).val( "" );
    if ( data === "1" ) {
        $( '#RequestMSGDN' ).addClass( 'd-none' );
        $( '#RequestMSGSU' ).removeClass( 'd-none' );
        setTimeout( function () {
            $( '#RequestMSGSU' ).addClass( 'd-none' );
        }, 3000 );
    } else {
        $( '#RequestMSGSU' ).addClass( 'd-none' );
        $( '#RequestMSGDN' ).removeClass( 'd-none' );
        setTimeout( function () {
            $( '#RequestMSGDN' ).addClass( 'd-none' );
        }, 3000 );
    }
};

//Leave Message
var onLeaveSuccess = function ( data ) {
    reloadloadRecaptcha()
    $( '.formOverlay' ).LoadingOverlay( "hide", true );
    $( '#LeaveMSGDN' ).parents( 'form' ).find( '.col-lg-7 input' ).val( "" );
    $( '#LeaveMSGDN' ).parents( 'form' ).find( '.col-lg-7 textarea' ).val( "" );
    if ( data === "1" ) {
        $( '#LeaveMSGDN' ).addClass( 'd-none' );
        $( '#LeaveMSGSU' ).removeClass( 'd-none' );
        setTimeout( function () {
            $( '#LeaveMSGSU' ).addClass( 'd-none' );
        }, 3000 );
    } else {
        $( '#LeaveMSGSU' ).addClass( 'd-none' );
        $( '#LeaveMSGDN' ).removeClass( 'd-none' );
        setTimeout( function () {
            $( '#LeaveMSGDN' ).addClass( 'd-none' );
        }, 3000 );
    }
};
//Ajax Forms Scripts.



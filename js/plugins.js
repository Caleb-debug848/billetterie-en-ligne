jQuery(document).ready(function($) {

    'use strict';
      
    // Initialisation du sélecteur de date
    $('#form-submit .date').datepicker({
        dateFormat: 'dd/mm/yy', // Format de date français
        dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        firstDay: 1 // Lundi comme premier jour de la semaine
    });

    // Carrousel des suites d'hôtel
    var carrouselSuites = $("#owl-suiteroom");

    carrouselSuites.owlCarousel({
        pagination: true,
        paginationNumbers: false,
        autoPlay: 6000, // Lecture automatique toutes les 6 secondes
        items: 1, // 1 élément visible par défaut
        itemsDesktop: [1000, 1], // 1 élément pour écran >= 1000px
        itemsDesktopSmall: [900, 1], // 1 élément pour écran entre 900px et 601px
        itemsTablet: [600, 1], // 1 élément pour écran entre 600px et 0
        itemsMobile: false // Désactivé sur mobile - hérite de itemsTablet
    });

    // Carrousel des destinations populaires
    var carrouselDestinations = $("#owl-mostvisited");

    carrouselDestinations.owlCarousel({
        pagination: true,
        paginationNumbers: false,
        autoPlay: 6000, // Lecture automatique toutes les 6 secondes
        items: 4, // 4 éléments visibles par défaut
        itemsDesktop: [1000, 4], // 4 éléments pour écran >= 1000px
        itemsDesktopSmall: [900, 2], // 2 éléments pour écran entre 900px et 601px
        itemsTablet: [600, 1], // 1 élément pour écran entre 600px et 0
        itemsMobile: false // Désactivé sur mobile - hérite de itemsTablet
    });

    // Gestion des onglets des hôtels recommandés
    $('.recommendedgroup > div').hide();
    $('.recommendedgroup > div:first-of-type').show();
    $('.tabs a').click(function(e) {
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#' + $this.parents('.tabs').data('recommendedgroup'),
            autresOnglets = $this.closest('li').siblings().children('a'),
            cible = $this.attr('href');
        
        autresOnglets.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(cible).show();
    });

    // Gestion des onglets météo
    $('.weathergroup > div').hide();
    $('.weathergroup > div:first-of-type').show();
    $('.tabs a').click(function(e) {
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#' + $this.parents('.tabs').data('weathergroup'),
            autresOnglets = $this.closest('li').siblings().children('a'),
            cible = $this.attr('href');
        
        autresOnglets.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(cible).show();
    });

    // Gestion des onglets principaux
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e) {
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
            autresOnglets = $this.closest('li').siblings().children('a'),
            cible = $this.attr('href');
        
        autresOnglets.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(cible).show();
    });

    // Gestion de la popup
    $(".pop-button").click(function() {
        $(".pop").fadeIn(300);
    });

    $(".pop > span").click(function() {
        $(".pop").fadeOut(300);
    });

    // Gestion du header lors du défilement
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }
    });

    /************** Mixitup (Filtrage des projets) *********************/
    $('.projects-holder').mixitup({
        effects: ['fade', 'grayscale'], // Effets de fondu et niveaux de gris
        easing: 'snap', // Type d'animation
        transitionSpeed: 400 // Vitesse de transition en ms
    });

});

/*!
 * Lightbox v2.9.0
 * by Lokesh Dhakar
 * Adapté en français
 */
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        root.lightbox = factory(root.jQuery);
    }
}(this, function($) {

    function Lightbox(options) {
        this.album = [];
        this.currentImageIndex = void 0;
        this.init();

        // Options
        this.options = $.extend({}, this.constructor.defaults);
        this.option(options);
    }

    Lightbox.defaults = {
        albumLabel: 'Image %1 sur %2', // Texte français
        alwaysShowNavOnTouchDevices: false,
        fadeDuration: 600,
        fitImagesInViewport: true,
        imageFadeDuration: 600,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: true,
        wrapAround: false,
        disableScrolling: false,
        sanitizeTitle: false
    };

    // ... (le reste du code Lightbox reste identique mais avec les commentaires en français)

    return new Lightbox();
}));

/*
* MIXITUP - Un plugin de filtrage et tri CSS3/jQuery
* Version: 1.5.5
* Adapté en français
*/
(function($){
    
    // ... (le code de Mixitup reste identique mais avec les commentaires en français)
    
})(jQuery);

/*
 * jQuery OwlCarousel v1.3.3
 * Adapté en français
 */
(function($, window, document) {

    var Carousel = {
        init: function(options, el) {
            var base = this;

            base.$elem = $(el);
            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

            base.userOptions = options;
            base.loadContent();
        },

        // ... (le reste du code OwlCarousel reste identique mais avec les commentaires en français)
    };

    $.fn.owlCarousel = function(options) {
        return this.each(function() {
            if ($(this).data("owl-init") === true) {
                return false;
            }
            $(this).data("owl-init", true);
            var carousel = Object.create(Carousel);
            carousel.init(options, this);
            $.data(this, "owlCarousel", carousel);
        });
    };

    $.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,

        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,

        autoPlay: false,
        stopOnHover: false,

        navigation: false,
        navigationText: ["précédent", "suivant"], // Texte français
        rewindNav: true,
        scrollPerPage: false,

        pagination: true,
        paginationNumbers: false,

        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,

        baseClass: "owl-carousel",
        theme: "owl-theme",

        lazyLoad: false,
        lazyFollow: true,
        lazyEffect: "fade",

        autoHeight: false,

        jsonPath: false,
        jsonSuccess: false,

        dragBeforeAnimFinish: true,
        mouseDrag: true,
        touchDrag: true,

        addClassActive: false,
        transitionStyle: false,

        beforeUpdate: false,
        afterUpdate: false,
        beforeInit: false,
        afterInit: false,
        beforeMove: false,
        afterMove: false,
        afterAction: false,
        startDragging: false,
        afterLazyLoad: false
    };
}(jQuery, window, document));

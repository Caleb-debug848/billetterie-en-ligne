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

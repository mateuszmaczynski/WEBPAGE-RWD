$(document).ready(function() {

    $('.bxslider').bxSlider({
        mode: 'fade',
        infiniteLoop: true,
        hideControlOnEnd: true,
        auto: true,
        pause: 5000,
        speed: 2000,
    });

    var galleryPhotos = (function(){
        document.getElementById('links').onclick = function (event) {
            event = event || window.event;
            var target = event.target || event.srcElement,
            link = target.src ? target.parentNode : target,
            options = {index: link, event: event},
            links = this.getElementsByTagName('a');
            blueimp.Gallery(links, options);
        };
    })();

    var scrollSite = (function(){

        $('a[href^="#"]').on('click', function(event) {
             var target = $( $(this).attr('href') );
             if( target.length ) {
                event.preventDefault();
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 2000);
             }
        });
    })();

    var openOffer = (function(){

        var assembleDescription = $("#assemble-description");
        var renovateDescription = $("#renovate-description");
        var terraceDescription = $("#terrace-description");
        var sellDescription = $("#sell-description");
        var hideElement = $(".hideElement");
        var offerImageWrapper = $('.offer-image-wrapper');

        var  openAssembleDescription = function(){
            if (assembleDescription.is(":hidden")) {
                assembleDescription.slideDown(500);
            } else {
                assembleDescription.slideUp(500);
            }
            renovateDescription.hide();
            terraceDescription.hide();
            sellDescription.hide();
        };

        var openRenovateDescription = function () {
            if (renovateDescription.is(":hidden")) {
                renovateDescription.slideDown(500);
            } else {
                renovateDescription.slideUp(500);
            }
            assembleDescription.hide();
            terraceDescription.hide();
            sellDescription.hide();
        };

        var openTerraceDescription = function () {
            if (terraceDescription.is(":hidden")) {
                terraceDescription.slideDown(500);
            } else {
                terraceDescription.slideUp(500);
            }
            assembleDescription.hide();
            renovateDescription.hide();
            sellDescription.hide();
        };

        var openSellDescription = function (){
            if (sellDescription.is(":hidden")) {
                sellDescription.slideDown(500);
            } else {
                sellDescription.slideUp(500);
            }
            assembleDescription.hide();
            renovateDescription.hide();
            terraceDescription.hide();
        };

        offerImageWrapper.on('click',function(e) {
            if (e.currentTarget.id === "assemble") {
                openAssembleDescription();
            }
            if (e.currentTarget.id === "renovate") {
                openRenovateDescription();
            }
            if (e.currentTarget.id === "terrace") {
                openTerraceDescription();
            }
            if (e.currentTarget.id === "sell") {
                openSellDescription();
            }
        });

        function closeDescription(){
            $('.offer-description').css('display','none');
        };
            hideElement.on("click",function(){
            closeDescription();
        });
    })();

    var formSubmit = (function() {

        var name = document.getElementById('name'),
            numberPhone = document.getElementById('numberPhone'),
            email = document.getElementById('email'),
            message = document.getElementById('message'),
            errors = document.getElementById('errorsLists'),
            buttonSend = document.getElementById('submit');

        name.addEventListener('blur', function () {
            var name = this.value;
            $("#name").removeClass();
            $(".errorName").remove();
            var nameFilter = /^[a-ząćęłńóśżź]{2,30}\s[a-ząćęłńóśżź]{2,50}$/ig;
            if (nameFilter.test(name)) {
                $("#name").addClass("form-control correct");
            } else {
                $("#name").addClass("form-control invalid");
                var li = document.createElement("li");
                li.className += ' errorName ';
                errors.appendChild(li);
                li.innerHTML = "Podaj właściwe imię i nazwisko";
            }
            checkForm ()
        });

        numberPhone.addEventListener('blur', function () {
            var numberPhone = this.value;
            $("#numberPhone").removeClass();
            $(".errorNumber").remove();
            var numberFilter = /^[\d]{9,13}$/g;
            if (numberFilter.test(numberPhone)) {
                $("#numberPhone").addClass("form-control correct");
            } else {
                $("#numberPhone").addClass("form-control invalid");
                var li = document.createElement("li");
                li.className += 'errorNumber';
                errors.appendChild(li);
                li.innerHTML = "Podaj właściwy numer telefonu (składający się od 9 do 13 cyfr)";
            }
            checkForm ()
        });

        email.addEventListener('blur', function () {
            var email = this.value;
            $("#email").removeClass();
            $(".errorEmail").remove();
            var emailFilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
            if (emailFilter.test(email)) {
                $("#email").addClass("form-control correct");
            } else {
                $("#email").addClass("form-control invalid");
                var li = document.createElement("li");
                li.className += 'errorEmail';
                errors.appendChild(li);
                li.innerHTML = "Podaj właściwy adres e-mail";
            }
            checkForm ()
        });

        message.addEventListener('keyup', function () {
            var message = this.value;
            $("#message").removeClass();
            $(".errorMessage").remove();
            if (message.length >= 20) {
                $("#message").addClass("form-control correct");
            } else {
                $("#message").addClass("form-control invalid");
                var li = document.createElement("li");
                li.className += 'errorMessage';
                errors.appendChild(li);
                li.innerHTML = "Wiadomość nie może być krótsza niż 20 znaków";
            }
            checkForm ()
        });

        function checkForm (){
            if ((name.className.indexOf('correct') !==-1) && (numberPhone.className.indexOf('correct') !==-1) && (email.className.indexOf('correct') !==-1) && (message.className.indexOf('correct') !==-1)){
                buttonSend.removeAttribute('disabled');
            }else{
                buttonSend.setAttribute('disabled','disabled');
            }
        };
    })();
})();



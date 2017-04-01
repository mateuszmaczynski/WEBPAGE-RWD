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

        var offerImageWrapper = $(".offer-image-wrapper");

        var assemble = $("#assemble-description");
        var renovate = $("#renovate-description");
        var terrace = $("#terrace-description");
        var sell = $("#sell-description");

        var hideElement = $(".hideElement");
        var assemblea = $("#a-assemble");
        var renovatea = $("#a-renovate");
        var sella = $("#a-sell");
        var terracea = $("#a-terrace");

        offerImageWrapper.on("click", function () {
       if(assemble.is(":hidden")){
           assemble.slideDown(500);
       } else{
           assemble.slideUp(500);
       }
        if(renovate){
            renovate.hide();
            }
        if(terrace){
            terrace.hide();
        }
        if(sell){
            sell.hide();
        }
        });

        function closeDescription(){
            $('.offer-description').css('display','none');
        };

        hideElement.on("click",function(){
            closeDescription();
    });


        assemblea.on("click", function () {
            if(assemble.is(":hidden")){
                assemble.slideDown(500);
            }
            if(renovate){
                renovate.hide();
            }
            if(terrace){
                terrace.hide();
            }
            if(sell){
                sell.hide();
            }
        });


        renovatea.on("click", function () {
            if(renovate.is(":hidden")){
                renovate.slideDown(500);
            }
            if(assemble) {
                assemble.hide();
            }
            if(terrace){
                terrace.hide();
            }
            if(sell){
                sell.hide();
            }
        });

        terracea.on("click",function(){
            if(terrace.is(":hidden")){
                terrace.slideDown(500);
            }
            if(assemble) {
                assemble.hide();
            }
            if(renovate){
                renovate.hide();
            }
            if(sell){
                sell.hide();
            }
        });


        sella.on("click", function () {
            if(sell.is(":hidden")){
                sell.slideDown(500);
            }
            if(assemble) {
                assemble.hide();
            }
            if(renovate){
                renovate.hide();
            }
            if(terrace){
                terrace.hide();
            }
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

            message.addEventListener('blur', function () {
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






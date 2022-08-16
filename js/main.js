$(document).ready(function() {
    $('.menu__btn').on('click', function (e) {
        e.preventDefault();
        $('.menu__list').toggleClass('menu__list--active');
    });


    /* Ajax mail form */

    $('#send').click(function(e) {
        e.preventDefault();
        document.getElementById('status').classList.add('form__error--pt');
        let x = document.getElementById('firstname').value;
        if (x === "") {
            document.getElementById('status').textContent = "Укажите Ваше имя";
            return false;
        }
        x =  document.getElementById('phone').value;
        if (x === "") {
            document.getElementById('status').textContent = "Укажите Ваш номер телефона";
            return false;
        } else {
            let re = /^\+375[0-9]{9}$/g;
            if(!re.test(x)){
                document.getElementById('status').textContent = "Укажите номер телефона в формате +375ХХХХХХХХХ";
                return false;
            }
        }
        x =  document.getElementById('email').value;
        if (x === "") {
            document.getElementById('status').textContent = "Укажите Ваш E-mail";
            return false;
        } else {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(x)){
                document.getElementById('status').textContent = "Некорректный E-mail";
                return false;
            }
        }
        x =  document.getElementById('message').value;
        if (x === "") {
            document.getElementById('status').textContent = "Вы не написали Вших пожеланий";
            return false;
        }

        document.getElementById('status').classList.remove('error');
        document.getElementById('status').textContent = "Отправка...";

        const formData = {
            'name': $('input[name=firstname]').val(),
            'email': $('input[name=email]').val(),
            'phone': $('input[name=phone]').val(),
            'answer': $('input[name=answer]').val(),
            'message': $('textarea[name=message]').val(),
        };

        $.ajax({
            url: "form.php",
            type: "POST",
            data: formData,
            success: function() {
                $('#footer-form').trigger('reset');
                $('#status').text("Ваше сообщение отправлено!");
                setTimeout(function () {
                    $('#status').text("").addClass("error");
                    $('#status').removeClass("form__error--pt");
                }, 2000);
                ym(60183874, 'reachGoal', 'sendamessage');
            },
            error: function (jqXHR) {
                $('#status').text(jqXHR);
            }
        });
    });

});
/* Header fixed */
$(function() {
	let header = $('.header');
    let logo = $('.logo');
	let hederHeight = header.height();
	$(window).scroll(function() {
	  let height = $(window).scrollTop();
	  if($(this).scrollTop() > 1) {
	  	header.addClass('header--fixed');
        logo.addClass('logo--small');
	    $('body').css({
		  'paddingTop': hederHeight+'px'
	   	});
	  	} else {
	   		header.removeClass('header--fixed');
            logo.removeClass('logo--small');
	   		$('body').css({
				'paddingTop': 0
	   		})
	  	}
	});
});
/* scrollto */

$('.scrollto a').on('click', function scroll(e) {
    e.preventDefault();
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top - 140
    }, {
        duration: 370,
        easing: "linear"
    });
    $('.menu__list').removeClass('menu__list--active');
    return false;
});
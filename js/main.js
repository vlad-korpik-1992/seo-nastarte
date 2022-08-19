$(document).ready(function() {
    $('.menu__btn').on('click', function (e) {
        e.preventDefault();
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.hero__center__box').on('click', function (e) {
        e.preventDefault();
        $( "body" ).addClass('body--fixed');
        $( ".sidebar" ).addClass('sidebar--active');
    });
    $('.sidebar__overlay').on('click', function (e) {
        e.preventDefault();
		$( "body" ).removeClass('body--fixed');
        $( ".sidebar" ).removeClass('sidebar--active');
    });
    $('.sidebar__back').on('click', function (e) {
        e.preventDefault();
		$( "body" ).removeClass('body--fixed');
        $( ".sidebar" ).removeClass('sidebar--active');
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
            document.getElementById('status').textContent = "Вы не написали Ваших пожеланий";
            return false;
        }

        document.getElementById('status').classList.remove('error');
        document.getElementById('status').textContent = "Отправка...";

        let checkboxes = document.getElementsByName("answer");
        let answer = 'не указан';
        for (let i= 0; i<checkboxes.length; i++)
        {
            if (checkboxes[i].checked === true)
            {
                answer = checkboxes[i].value;
            }
        }

        const formData = {
            'name': $('input[name=firstname]').val(),
            'email': $('input[name=email]').val(),
            'phone': $('input[name=phone]').val(),
            'answer': answer,
            'message': $('textarea[name=message]').val(),
        };

        $.ajax({
            url: "mail.php",
            type: "POST",
            data: formData,
            success: function() {
                $('#footer-form').trigger('reset');
                $('#status').text("Ваше сообщение отправлено!");
                setTimeout(function () {
                    $('#status').text("").addClass("error");
                    $('#status').removeClass("form__error--pt");
                }, 2000);
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


    $('#send-sidebar').click(function(e) {
        e.preventDefault();
        document.getElementById('status-sidebar').classList.add('form__error--pt');
        let x = document.getElementById('firstname-sidebar').value;
        if (x === "") {
            document.getElementById('status-sidebar').textContent = "Укажите Ваше имя";
            return false;
        }
        x =  document.getElementById('phone-sidebar').value;
        if (x === "") {
            document.getElementById('status-sidebar').textContent = "Укажите Ваш номер телефона";
            return false;
        } else {
            let re = /^\+375[0-9]{9}$/g;
            if(!re.test(x)){
                document.getElementById('status-sidebar').textContent = "Укажите номер телефона в формате +375ХХХХХХХХХ";
                return false;
            }
        }
        x =  document.getElementById('email-sidebar').value;
        if (x === "") {
            document.getElementById('status-sidebar').textContent = "Укажите Ваш E-mail";
            return false;
        } else {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(x)){
                document.getElementById('status-sidebar').textContent = "Некорректный E-mail";
                return false;
            }
        }
        x =  document.getElementById('message-sidebar').value;
        if (x === "") {
            document.getElementById('status-sidebar').textContent = "Вы не написали Ваших пожеланий";
            return false;
        }

        document.getElementById('status-sidebar').classList.remove('error');
        document.getElementById('status-sidebar').textContent = "Отправка...";

        let checkboxesSidebar = document.getElementsByName("answer-sidebar");
        let answerSidebar = 'не указан';
        for (let n= 0; n<checkboxesSidebar.length; n++)
        {
            if (checkboxesSidebar[n].checked === true)
            {
                answerSidebar = checkboxesSidebar[n].value;
            }
        }

        const formData = {
            'name': $('input[name=firstname-sidebar]').val(),
            'email': $('input[name=email-sidebar]').val(),
            'phone': $('input[name=phone-sidebar]').val(),
            'answer': answerSidebar,
            'message': $('textarea[name=message-sidebar]').val(),
        };

        $.ajax({
            url: "mail.php",
            type: "POST",
            data: formData,
            success: function() {
                $('#form-sidebar').trigger('reset');
                $('#status-sidebar').text("Ваше сообщение отправлено!");
                setTimeout(function () {
                    $('#status-sidebar').text("").addClass("error");
                    $('#status-sidebar').removeClass("form__error--pt");
                }, 2000)
            },
            error: function (jqXHR) {
                $('#status-sidebar').text(jqXHR);
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
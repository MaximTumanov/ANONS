var host = 'http://' + window.location.host + '/',
	path_to_img = 'static.anons.local',
	img_attr = '?w=110&h=160&tc&ns',
	dialog, calendar, social_nets, user, lang = 'ru', login_dialog;

if (typeof use_filtering == undefined) {
	var use_filtering = false;
}

var toAnonsDate = function (date) {
	var arr = date.split(" "), date = arr[0].split('-'), time = arr[1].substr(0, 5);
	date = date[2] + " " + i18n.month.ru[parseInt(date[1])] + " " + date[0];
	return "<p>" + date + "</p><p><span class='time'>" + time + "</span></p>";
}

var i18n = {
	user_not_found: {
		ru: "Только для авторизированных пользователей"
	},
	event_not_found: {
		ru: "Извините, но что-то пошло не так!"
	},
	month: {
		ru: ['января', 'февраля', 'марта', 'апреля', 'майя', 'июня', 
		'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
	}
}

var Pagination = function (use_filtering) {
	this.Box = $('.wrapp');
	this.FilterBox = $('.filtering_box', this.Box);
	this.Button = $('.letters .hse');
	this.Filters = $('#tabs li', this.Box);
	this.Items = $('.place_line', this.Box);
	this.Pages = 1;
	this.ItemPerPage = items_per_page;
	this.PageNumber = $('#pag_number');
	this.useAjax = (typeof use_ajax === 'undefined' ? false : true);
	this.use_filtering = use_filtering || false;
	this.CACHE = {};

	this.hash = window.location.hash;	
	
	this.init = function () {
		this.initControls();
		this.Pages = Math.ceil(this.Items.size() / this.ItemPerPage);
		if (this.hash) {
			this.Button.removeClass('activ');
			var tmp = this.hash.replace('#', '').split('&')
				,	page = 0
				, self = this;
			this.build(false);
			if (tmp[0].length == 1) {
				$('.letters li[class*=l-' + tmp[0] + ']').click();
			} else if(tmp[0].length == 3) {
				page = parseFloat(tmp[0].replace('P-', '')) - 1;
				setTimeout(function(){ self.drawPages(page); $('.post_load').lazyload()}, 250);
			}

			if (typeof(tmp[1]) != 'undefined' && tmp[1]) {
				page = parseFloat(tmp[1].replace('P-', '')) - 1;
				setTimeout(function(){ self.drawPages(page); $('.post_load').lazyload()}, 250);
			}
		} else {
			this.build(false);
		}

		if (this.use_filtering === true) this.setCache();
	}
	
	this.initControls = function () {
		var self = this;
		
		this.Button.click(function () {
			var letter = $(this).text()
				,	hash = window.location.hash.replace('#', '').split('&');
			self.Button.removeClass('activ');
			$(this).addClass('activ');
			window.location.hash = (hash.length == 2 ? $(this).text() + '&' + hash[1] : $(this).text() );
			self.build(letter);
      $('.post_load').lazyload();
		});
		
		this.Filters.click(function() {
			var el = $(this), type = el.attr('data-type');
			self.Filters.removeClass('activ');
			el.addClass('activ');
			self.filter(type);	
		});

		$('#pag_number span').live('click', function () {
			var hash = window.location.hash;
			hash = ( hash == '' ? '#P-' + $(this).index() : ( hash.split('&').length == 2 ? hash.split('&')[0] + '&P-0' : hash + '&P-0' ) );
			hash =  hash.replace(/((P-)(.*))/, "\$2" + parseFloat($(this).index() + 1));
			window.location.hash = hash;
			self.drawPages($(this).index());
		});
	}
	
	this.setCache = function () {
		var items_date = [], items_letter = {}, items_category = {};

		$.each(this.Items, function (i, item){
			var let = $(item).attr('data-letter').toString(),
				cat = $(item).attr('data-category').toString();
			
			if (typeof items_letter[let] == 'undefined') {
				items_letter[let] = [];
			}

			if (typeof items_category[cat] == 'undefined') {
				items_category[cat] = [];				
			}

			items_date[i] = $(item).parent()[0];

			items_letter[let].push($(item).parent());
			
			items_category[cat].push($(item).parent());
			
		});

		this.CACHE['date'] = items_date.sort(function(a, b){
			return parseInt($(a).attr('data-date')) - parseInt($(b).attr('data-date'))
		});
		
		this.CACHE['letter_desc'] = this.sorted(items_letter);
		this.CACHE['letter_asc'] = this.sorted(items_letter, true);
		this.CACHE['category'] = this.sorted(items_category);		
	}

	this.sorted = function (obj, reverse) {
		
		
		var keys = [], k, i, m, len, arr = [];
		reverse = reverse || (reverse = false)

		for (var k in obj) {
		    if (obj.hasOwnProperty(k)) {
		        keys.push(k);
		    }
		}

		keys.sort();

		if (reverse) {
			keys.reverse();	
		}
		len = keys.length;

		for (i = 0; i < len; i++) {
		    k = keys[i];
		    for (m = 0; m < obj[k].length; m++) {
		    	arr.push(obj[k][m][0]);
		    }
		}
		
		return arr;
	}

	this.filter = function (type) {
		this.FilterBox.html(this.CACHE[type]);
		this.Items.removeClass('time_filter');
		this.build(false);
		this.rankingClasses();
		time_slider.init();
                $('.post_load').lazyload();
	}

	this.rankingClasses = function () {
		this.Items.removeClass('asm');
		$("div[class*=page-]:nth-child(even)").addClass("asm");
	}

	this.build = function (letter) {
		if (letter == 'ВСЕ') {
			this.Pages = Math.ceil(this.Items.size() / this.ItemPerPage);
			this.Letter = false;
			this.build(false);
		} else {
			this.Items.hide();
			var showed = (letter === false ? this.Items.not('.time_filter') : $('[data-letter=' + letter + ']'));
			this.Pages = Math.ceil(showed.size() / this.ItemPerPage);
			this.Letter = letter;
			
			for (var i = 0; i < this.Pages; i++) {
				showed.slice((i * this.ItemPerPage), ((i + 1) * this.ItemPerPage)).attr('class', 'page-' + i);
			}
			
			showed.show();
		}
		
		this.drawPages(0);
	}
	
	this.drawPages = function(n) {
		if (this.useAjax) {
			this.ajax(n);	
		};

		this.PageNumber.empty();
		$('[class*=page-]').parent().hide();
		$('[class*=page-]').removeClass('asm');
		$('[class*=page-]').hide();
		
		this.PageNumber.hide();
		
		if (this.Pages > 1) {	
			this.PageNumber.show();
			for (var i = 0, span; i < this.Pages; i++ ) {
				span = $('<span/>')
				span.text((i + 1));
				this.PageNumber.append(span);
			}
			
			$('#pag_number span').removeClass('activ');
			$('#pag_number span').eq(n).addClass('activ');
		} 
		
		var Items = $('.page-' + n).not('.time_filter');
		
		if (this.Letter != false) {
			Items = $('.page-' + n + '[data-letter=' + this.Letter + ']');
		}
				
		Items.show();
		Items.parent().show();
		Items.parent().each(function (i) {
			var parent = $(this);
			if (i%2) {
				parent.removeClass('asm');
			} else {
				parent.addClass('asm');
			}
		});
	};

	this.ajax = function(page) {
		return;
		var self = this, page = page || 1;
		$.ajax({
				url: host + 'events/getAll',
				data: {page: page},
				type: "POST",
				success: function (data) {
					self.CACHE[page] = data;
				}
		})
	};
	
	this.init();
}




Date.prototype.toNormalDate = function () {
	var m = Number(this.getMonth()) + 1;
	var date = ((String(this.getDate()).length == 1) ? "0" + this.getDate() : this.getDate()) + '.' + ((String(m).length == 1) ? "0" + m : m) + '.' + this.getFullYear()
	return date;	
}

Date.prototype.toEventDate = function () {
	var m = Number(this.getMonth()) + 1;
	var date = this.getFullYear() + '-' + ((String(m).length == 1) ? "0" + m : m) + '-' + ((String(this.getDate()).length == 1) ? "0" + this.getDate() : this.getDate());
	return date;	
}

var MyCalendar = function () {
	this.Grid  = $('#grid');
	this.Title = $('.title_month');
	this.Success = false;
	this.DatesHasEvents = [];
	this.date = new Date();
	this.href = "events/day/";
	
	this.months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
	               'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
	
	this.months_d = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 
	               'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
	
	this.init = function () {
		this.today = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()).getTime();
		this.maxDay = new Date(this.date.getFullYear(), this.date.getMonth(), (Number(this.date.getDate()) + 90));
		this.getEvents();
		this.fillTitle();
		this.fillGrid();
		this.initControls();
	}
	
	this.fillTitle = function () {
		var m = this.date.getMonth();
		this.Title.text(this.months[m] + ' ' + this.date.getFullYear())
	}
	
	this.fillGrid = function () {
		var date     = this.date,
			year     = date.getFullYear(), 					  
			month    = date.getMonth(), 					  
			first    = new Date(year, month, 1).getDay(),     	
			last     = new Date(year, month + 1, 0).getDate(),
			prev     = new Date(year, month, 0).getDate(),    
			i, Week, Day, data, title, m = month;
		
		this.Grid.html('');
	
		for (i = 1; i < 43; i += 1) {
			if ((i - 1) % 7 == 0) {
				Week = $("<tr/>");
				this.Grid.append(Week);
			}

			if (i < first) {
				date = new Date(year, month - 1, prev - first + i + 1);
				m = ((month - 1) < 0 ? 0 : (month - 1));
			} else if (i > last + first - 1) {
				m = ((month + 1) < 12 ? (month + 1) : 0);
				date = new Date(year, month, i - first + 1);
			} else if (first == 0) {
				date = new Date(year, month - 1, last - 6 + i);
				m = ((month - 1) < 0 ? 0 : (month - 1));
				if (i == 6) {
					first = 7;
				}
			} else {
				m = month;
				date = new Date(year, month, i - first + 1);
			}
			
			Day = $("<td date='" + date.toNormalDate() + "'>" + date.getDate() + "</td>");

			if (date.getMonth() > month || date.getMonth() < month) {
				Day.empty();
			} else if (date.getTime() == this.today) {
				if (this.DatesHasEvents.indexOf(String(String(date.getTime()).substr(0, 10))) != -1) {
					Day.html("<span class='current'><a title='События " + date.getDate() + ' ' + this.months_d[date.getMonth()] + "' href='" + host + this.href + date.toEventDate() + "'>" + date.getDate() + "</a></span>");
					Day.addClass('hasEvents');					
				} else {
					Day.html("<span class='current'>" + date.getDate() + "</span>");
				}
			} else if (date.getTime() < this.today) {
				Day.addClass('disable');
			} else if (this.DatesHasEvents.indexOf(String(String(date.getTime()).substr(0, 10))) != -1) {
				Day.html("<a title='События " + date.getDate() + ' ' + this.months_d[date.getMonth()] + "' href='" + host + this.href + date.toEventDate() + "'>" + date.getDate() + "</a>");
				Day.addClass('hasEvents');
			}
			
			Week.append(Day);
		}
	}
	
	this.initControls = function () {
		var self = this;
		$('.arrow.next').click(function (e) {
			e.preventDefault();
			e.stopPropagation();
			self.date = new Date(self.date.getFullYear(), self.date.getMonth() + 1, 1);
			self.fillGrid();
			self.fillTitle();
		});
		
		$('.arrow.prev').click(function (e) {
			e.preventDefault();
			e.stopPropagation();
			self.date = new Date(self.date.getFullYear(), self.date.getMonth() - 1, 1);
			self.fillGrid();
			self.fillTitle();
		});
	}	
	
	this.getEvents = function () {
		var self = this;
		
		$.ajax({
			url: host + 'events/getEvents',
			dataType: "txt",
			type: "POST",
			async: false,
			data: {
				from: self.date.toNormalDate(),
				to: self.maxDay.toNormalDate()
			},
			beforeSend: function () {
				if (self.Success === true) {
					return;
				} else {
					self.Success = true;
				}
			},
			success: function (resp) {
				self.DatesHasEvents = resp;
			}
		})
	}
	
	this.init()
}

var SocialNets = function () {
	this.domain=location.href+'/';
	this.domain=this.domain.substr(this.domain.indexOf('://')+3);
	this.domain=this.domain.substr(0,this.domain.indexOf('/'));
	this.location=false;
	this.url=function(system) {
	var title=encodeURIComponent($('title').text().replace('|', '★'));
	var description=encodeURIComponent($('meta[name=description]').attr('content'));
	var url=encodeURIComponent(location.href);
	var image=encodeURIComponent($('meta[name=image]').attr('content'));
	var date = encodeURIComponent($('meta[name=date]').attr('content'));
	if (date != 'undefined') {
		title = title + " ★ " + date;	
	}
		switch (system) {
			case 1: return 'http://vkontakte.ru/share.php?url='+url+'&title='+title+'&description='+description+'&image='+image;
			case 2: return 'http://www.facebook.com/sharer.php?u='+url+'&t='+title;
			case 3: return 'http://twitter.com/share?text='+title+'&url='+url;
			case 4: return 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl='+url;
			//case 5: return 'http://connect.mail.ru/share?share_url='+url;
			case 6: return 'http://www.livejournal.com/update.bml?event='+url+'&subject='+title;
			//case 7: return 'http://memori.ru/link/?sm=1&u_data[url]='+url+'&u_data[name]='+title;
			//case 8: return 'http://bobrdobr.ru/addext.html?url='+url+'&title='+title;
			case 9: return 'http://www.google.com/bookmarks/mark?op=add&bkmk='+url+'&title='+title;
			case 10: return 'http://zakladki.yandex.ru/userarea/links/addfromfav.asp?bAddLink_x=1&lurl='+url+'&lname='+title;
			//case 11: return 'http://surfingbird.ru/share?url='+url;
			//case 12: return 'http://text20.ru/add/?title=' + title + '&source='+url+'&text='+title;
		}
	}
	this.redirect = function() {
		if (this.location) location.href=this.location;
		this.location=false;
	}
	
	this.go = function(i) {
		this.location=this.url(i);
	}
	
	this.init = function() {
		var titles=new Array('� ��������','Facebook','Twitter','�������������','��� ���','LiveJournal','Memori','��������','�������� Google','������.��������','Surfingbird','����� 2.0');;
		var html='';
		for (i=0;i<12;i++) {
			if (i == 11 || i == 10 || i == 7 || i == 6 || i == 4 || i == 9) continue;
			html+='<a href="'+this.url(i+1)+'"><img src="'+host+'images/blank.gif" width="16" height="16" alt=" #" title="'+titles[i]+'" style="border:0;padding:0;margin:0 4px 0 0;background-position: 0 -'+(i*16)+'px"/></a>';
		}
		$('#social_nets').append(html);
	}
	
	this.init();
}

var User = function () {
	this.u = {
		is_logged: false,
		is_partner: false,
		name: null,
		id: null
	};
	
	this.init = function () {
		if ($.cookie('anons_dp_ua')) {
			var USER, u = $.cookie('anons_dp_ua');
			u = u.split('~');
			USER = eval(u[1]);
			this.u = {
				is_logged: true,
				is_partner: false,
				name: USER[1],
				id: USER[0]
			};
		}
		
		this.initControls();
	}
	
	this.initControls = function () {
		var self = this;
		if ($('.event_go').length) {
			$('.event_go').click(function() {
				var el = $(this);
				
				if (self.u.is_logged === false) {
					dialog.show(i18n.user_not_found[lang], 'dialog_error');
					return;
				}
				
				var id_event = el.attr('id').replace('event_go_', '');
				var date = el.attr('date');
				
				var action = (el.hasClass('disabled') ? 'remove' : 'add');
				
				if (self.eventToList(id_event, date, action)) {
					var i = Number($('.user_go').text());
					
					if (action == 'add') {
						$('.user_go').text((i+1));
						el.text("Я передумал(а)").addClass('disabled');
					} else {
						$('.user_go').text((i-1));
						el.text("Я пойду").removeClass('disabled');
					}
				};
			});			
		}
		
		if ($('.place_go').length) {
			$('.place_go').click(function() {
				var el = $(this);
				
				if (self.u.is_logged === false) {
					dialog.show(i18n.user_not_found[lang], 'dialog_error');
					return;
				}
				
				var id_place = el.attr('id').replace('place_go_', '');			
				var action = (el.hasClass('disabled') ? 'remove' : 'add');
				
				if (self.placeToList(id_place, action)) {
					var i = Number($('.user_like').text());
					
					if (action == 'add') {
						$('.user_like').text((i+1));
						el.text("Я передумал(а)").addClass('disabled');
					} else {
						$('.user_like').text((i-1));
						el.text("Мне нравится").removeClass('disabled');
					}
				};
			});			
		}		
		
	}
	
	this.eventToList = function (id_event, date, action) {
		var self = this;
		this.valid = true;

		if (this.LOCK === true) return;
		$.ajax({
			url: host + 'users/eventToList',
			data: {id_event: id_event, id_user: this.u.id, date: date, action: action},
			type: 'POST',
			async: false,
			beforeSend: function () {
				self.LOCK = true;
			},
			success: function (msg) {
				self.LOCK = false;
			},				
			error: function () {
				dialog.show(i18n.event_not_found[lang], 'dialog_error', function() {self.LOCK = false});
				self.valid = false;
				self.LOCK = false;
			}
		})
		return this.valid;
	}
	
	this.placeToList = function (id_place, action) {
		var self = this;
		this.valid = true;

		if (this.LOCK === true) return;
		$.ajax({
			url: host + 'users/placeToList',
			data: {id_place: id_place, id_user: this.u.id, action: action},
			type: 'POST',
			async: false,
			beforeSend: function () {
				self.LOCK = true;
			},
			success: function (msg) {
				self.LOCK = false;
			},				
			error: function () {
				dialog.show(i18n.event_not_found[lang], 'dialog_error', function() {self.LOCK = false});
				self.valid = false;
			}
		})
		return this.valid;
	}	

	this.init();
}

function makeEventsGood(i) {
	var str = i + " событий";
	if (i == 1) {
		str = i + " событие";
		
	} else if (i > 1) {
		if (i < 5) {
			str = i + " события";
		}
	}
	
	return str;
}

function makePlacesGood(i) {
	var str = i + " любимых мест";
	if (i == 1) {
		str = i + " любимое место";
		
	} else if (i > 1) {
		if (i == 2 || i == 3 || i == 4) {
			str = i + " любимых места";
		} else {
			str = i + " любимых мест";
		} 
	}
	
	return str;
}

$.fn.focus_blur = function (text) {
	$(this).focus(function () {
		if(!$(this).val() || $(this).val() == text) {
			$(this).val('');
		}
	}).blur(function () {
		if (!$(this).val()) {
			$(this).val(text);
		}
	});
}

var ScrollerTop = function () {
	this.el = $('#top');
	this.H = $(window).height();
	this.O = 0;
	var self = this;	
	$(window).bind('scroll', function () {
		self.O = Math.ceil(((window.pageYOffset / 1.3) / self.H) * 10000) / 10000;
		if (self.O > 1) self.O = 1;
		self.el.css({
			opacity: self.O
		})
	});
}

$.fn.bind_input = function () {
	$(this).focusin(function () {
		$(this).prev().hide();
	});

	$(this).focusout(function () {
		if (!$(this).val()) {
			$(this).prev().show();
		};
	});
}

$(function () {
	if ($.browser.msie && parseInt($.browser.version) != 9) {
		var ie = $('#ie'), wrapp = $('#wrapper');
		$('#top').hide();
		wrapp.empty();
		wrapp.html('');
		wrapp.append(ie);
		ie.addClass('incvisition').show();
		return;
	}

	if($('a.has_tooltip').length > 0){
		$.each($('a.has_tooltip'), function(){
			var el = $(this)
				, tooltip = el.data('tooltip');

			el.simpletip({ content: tooltip, fixed: false });
		})
	}

	$('.post_load').lazyload();

	var scroller = new ScrollerTop();
	dialog = new Dialog({type: 'opacity'});

	if (typeof(fix_scroll) != 'undefined') {
		$('body').addClass('fix_scroll');
	}

        if (typeof(use_slider) != 'undefined' && use_slider == true) {
          $('#featured').orbit();
        }

	$('.bind_input').bind_input();

	if ($("#tabs").length) {
		$('#tabs li').click(function () {
			var el = $(this)
			  , rel = el.attr('rel')
			  , func = el.data('func')
			  , href = el.data('href');

			$('#tabs li').removeClass('active');
			el.addClass('active');
			$('.tab').addClass('hidden');
			if (func) {
				window[func]();
			} else if(href) {
				window.location.href = href;
			}
		});
	}

	/*var hash = window.location.hash;
	if (hash) {
		$('#tabs li[rel^="' + hash.replace('#', '') + '"]').trigger('click');
	}*/

	if (typeof use_calendar != 'undefined') {
		calendar = new MyCalendar();	
	}
	
	if (typeof use_redactor != 'undefined') {
		$('body').append('<script type="text/javascript" src="'+host+'js/redactor/redactor.js"></script>');
		$('#redactor_content').redactor({ toolbar: 'mini', path: '/js/redactor/' });
		$('input[type=radio]').change(function () {
			var id = $(this).attr('id').replace('type-', '');
			$('[id*=tabss-]').hide();
			$('#tabss-' + id).show();
		});
	}

	social_nets = new SocialNets();	
	user = new User();
	
	if ($('.datepicker').length) {
		$('.datepicker').dynDateTime({
			button: ".next()",
			ifFormat: "%Y-%m-%d"
		});
	}

	$('.pointer').click(function () {
		window.location.href = $(this).attr('href');
	});
	
	$('#search #text').bind('keyup', function (e) {
		e.preventDefault();
		if(e.keyCode == 13) {
			var form = $(this).parent();
			form.attr('action', actions[$('.radio_type:checked').val()]);
			form.submit();
		}
	})
	
	$('#top').click(function () {
		$.scrollTo('#anonsdpua', 200);
	});
	
	if ($('#google_maps').length && !$('#google_maps').hasClass('hide')) { createMap() }
	
	$('#show_google_maps').click(function () {
		var el = $('#google_maps');
		if (el.hasClass('hide')) {
			el.removeClass('hide');
			createMap();			
		}
		$.scrollTo('#google_maps', 250);
	});


    $('#videos_show').click(function () {
        var el = $('#videos');
        if (el.hasClass('hide')) {
            el.removeClass('hide');

        }
        $.scrollTo('#videos', 250);
    });
	
	$('#get_all_recomended').click(function () {
		var el = $(this), ids = el.attr('ids');
		el.parent().parent().hide();
		
		$.ajax({
			url: host + 'events/getAll',
			data: {ids: ids},
			type: "POST",
			success: function (data) {
				if (data) {
					var box = $('#other_recomended');
					box.html(data);
				}
			}
		})
	});
	
	if (typeof(MAKE_HIGHLIGHT) != 'undefined') { $('.p_info h2').highlight(HIGHLIGHT_TEXT) }
	
	$('.radio_type').bind('click', function () {
		if ($(this).val() == 1) {
			$('#date').hide().prev('label').hide();
			$('#set_dates').hide();
			$('#time_date_slider_wrapper').hide();
		} else {
			$('#date').show().prev('label').show();
			$('#time_date_slider_wrapper').show();
			if ($('#date').val() == 5) {
				$('#set_dates').show();
			}
		}
	});
	
	$('#date').bind('change', function () {
		if ($(this).val() == 5) {
			$('#set_dates').show();
		} else {
			$('#set_dates').hide();
		}
	});
	
	if (typeof(use_pagination) != 'undefined' && use_pagination === true) {
		var placesPagination = new Pagination(use_filtering);
	}
	
	$('#search .button').click(function () { 
		var action = actions[$('input[type=radio]:checked').val()];
		$('#search form').attr('action', action[0]).submit();
	});
		
	$('#text').focus_blur('Что ищем?');
	$('#log').focus_blur('Логин');
	$('#pass').focus_blur('Пароль');
	
	$('.p_href').live('click', function () {
		var href = $(this).attr('href');
		window.location.href = href;
	});
	
	$('.bind_input').prev().click(function () {
		$(this).next().focusin().focus();
	});

	$('#login .button').click(function () {
		var form = $(this).parent(), valid = true;
		$.each(form.find('.bind_input'), function () {
			var input = $(this);
			if (!input.val()) {
				input.focusin().focus();
				valid = false;
				return false;
			}
		});

		if (valid) {
			form.submit();
		}
	});

	$('.line_box').click(function (e) {
		if (!$(e.target).hasClass('line_box')) return;
		
		var el = $(this), type = (el.attr('data-href') ? 'events' : 'places'),
		data = el.attr('data-href') || el.attr('data-id');
		observer[type](data, el);
	});


	if (typeof use_ajax_load != 'undefined') {
		var button = $('#uploadButton');

      	$.ajax_upload(button, {
            action : 'users/upload',
            name: 'myfile',
            onSubmit : function(file, ext) {
              $(".row3 .loader").css({display: 'inline-block'});
              this.disable();
            },
            onComplete : function(file, response) {
              $(".row3 .loader").hide();

              $('#image_hidden').val(file);
              $('#block_for_image')
              	.removeClass('img_small')
              	.html('<img class="img_small" src="http://'+path_to_img+'/images/sunny/events/events/'+file+img_attr+'">');
              
              this.enable();
            }
        });		
	}


	var observer = {
		CACHE: {},
		getEvents: function(id) {
			var self = this;
			if (typeof this.CACHE[id] != 'undefined') return this.CACHE[id];

			$.ajax({
				url: host + 'users/getEventsForPlace',
				data: {id: id},
				type: "POST",
				dataType: "json",
				async: false,
				success: function (data) {
					if (data) {
						self.CACHE[id] = data;
					} else {
						return false;
					}
				}				
			});
			return this.CACHE[id];
		},

		events: function (href) {
			window.location.href = href;
		},

		places: function (id, block) {
			var el = block.next().find('.my_place_events'), parent = el.parent(), 
				html = [], my_events = this.getEvents(id);

			if (my_events.length) {
				for(var i = 0; i < my_events.length; i++) {
					var item = my_events[i];
					html.push('<div class="my_place_event left">');
						html.push('<a href="' + host + 'events/show/' + item.catAlias + '/' + item.alias + '"><img class="img_small" src="http://' + path_to_img + '/images/sunny/events/events/' + item.image + img_attr + '" title="' + item.title + '"></a>');
						html.push(toAnonsDate(item.date));
					html.push('</div>');
				}	
			} else {
				html.push('<div class="empty_events">Нет актуальных событий.</div>');
			}

			html.push('<div class="clearer"></div>');

			html = html.join("");

			if (parent.hasClass('hidden')) {
				el.html(html);
				parent.toggleClass('hidden');
			} else {
				parent.toggleClass('hidden');
			}
		}
	}

	var RangeSlider = function (time_from_to) {
		var hours = [
			'00', '01', '02', '03', '04', '05', '06', '07', '08',
			'09', '10', '11', '12', '13', '14', '15', '16', '17',
			'18', '19', '20', '21', '22', '23', '24'
		]

		this.time_from_to = time_from_to || ["00", "24"];
		this.has_items    = ( placesPagination ? true : false );
		this.el           = $("#slider-range");
		this.timeFrom     = $('#time_from');
		this.timeTo 			= $('#time_to');
		this.timeFromText = $('#time_from_text');
		this.timeToText   = $('#time_to_text');
		this.ItemsEvents  = ( this.has_items ? placesPagination.Items : [] );

		this.build = function (from, to) {
			var time ,el;
			this.ItemsEvents.show();
			this.ItemsEvents.parent().show();
			$.each(this.ItemsEvents, function (i, item) {
				el = $(item);
				el.removeClass('time_filter');
				time = parseInt(el.data('time'));
				if (time < from || time > to) {
					el.hide();
					el.addClass('time_filter');
					el.parent().hide();
				}
			})
		}

		this.init = function() {
			var self = this;
			this.el.slider({
				range: true,
				min: 0,
				max: 24,
				values: [self.time_from_to[0], self.time_from_to[1]],
				slide: function( event, ui ) {
					var from = hours[ui.values[0]];
					var to = hours[ui.values[1]];
					self.showValues(from, to);

					if (self.has_items){
						self.build(hours[ui.values[0]], hours[ui.values[1]]);					
						placesPagination.build(false);
						placesPagination.rankingClasses();						
					}
				}
			});
			
			this.showValues(self.time_from_to[0], self.time_from_to[1]);		
		}

		this.showValues = function (from, to) {
			this.timeFromText.text(from + ":00");
			this.timeToText.text(to + ":00");
			if (to == '24') this.timeToText.text('23:59');
			this.timeFrom.val(from);
			this.timeTo.val(to);
		}
	}

	if (typeof(use_range_slider) != "undefined" && use_range_slider === true) {
		time_slider = new RangeSlider(time_from_to);
		time_slider.init();
	}
})
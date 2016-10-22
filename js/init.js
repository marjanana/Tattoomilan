skel.init(
	{
		preset: 'standard',
		prefix: 'css/style',
		resetCSS: true,
		boxModel: 'border',
		breakpoints: {
			'desktop': {
				containers: 960,
				grid: {
					gutters: 50
				}
			}
		}
	}, 
	{
		panels: {
			preset: 'standard'
		}
	}
);

jQuery(function() {

	jQuery.fn.n33_formerize=function(){var _fakes=new Array(),_form = jQuery(this);_form.find('input[type=text],textarea').each(function() { var e = jQuery(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = jQuery(this); var x = jQuery(jQuery('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = jQuery(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = jQuery(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { jQuery(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); jQuery(this).find('select').val(jQuery('option:first').val()); jQuery(this).find('input,textarea').each(function() { var e = jQuery(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };
	jQuery.browser={};(function(){jQuery.browser.msie=false;jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)\./)){jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();

	// Forms (IE <= 9 only)
		if (jQuery.browser.msie && jQuery.browser.version <= 9)
			jQuery('form').n33_formerize();

	// Dropdowns
		jQuery('#nav > ul').dropotron({ 
			offsetY: -20,
			offsetX: -2,
			mode: 'fade',
			speed: 300,
			noOpenerFade: true,
			detach: false
		});

	// Slider
		var slider = jQuery('#slider');
		if (slider.length > 0)
		{
			 slider.slidertron({
				mode: 'fade',
				seamlessWrap: false,
				viewerSelector: '.viewer',
				speed: 'slow',
				autoFit: true,
				autoFitAspectRatio: (936 / 484),
				reelSelector: '.viewer .reel',
				slidesSelector: '.viewer .reel .slide',
				advanceDelay: 5000,
				speed: 'slow',
				captionLines: 1,
				captionLineSelector: '.caption-line',
				slideCaptionSelector: '.caption',
				indicatorSelector: '.indicator ul li',
				slideLinkSelector: '.link'
			});
		
			jQuery(window).resize(function() {
				 slider.trigger('slidertron_reFit');
			});
		}	

	// Gallery
		var gallery = jQuery('.gallery');
		if (gallery.length > 0)
		{
			gallery.poptrox({
				popupClass: 'poptrox-popup skel-panels-fixed',
				usePopupDefaultStyling: false,
				windowMargin: 20,
				baseZIndex: 100000,
				popupLoaderText: ''
			});
		}

});


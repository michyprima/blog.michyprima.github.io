var $jq = jQuery.noConflict();
$jq( document ).ready(function() {
	$lg = $jq('body');
	
	$lg.lightGallery({
        selector: 'a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]',
		currentPagerPosition: "middle",
		download: false
	});
	$ab = $jq("#wpadminbar");
	
	$lg.on('onBeforeOpen.lg',function(event){
    $ab.css('z-index', "1039");
	});
	$lg.on('onCloseAfter.lg',function(event){
    $ab.css('z-index', "99999");
	});
});
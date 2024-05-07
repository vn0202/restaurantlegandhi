// Simple Back To Top Scripts
jQuery(document).ready(function() 
{
    jQuery("body").append('<div id="sbttBacktotop" style="border: 1px solid #ff9800; height: 40px; width: 40px; border-radius: 100%;display: flex; justify-content: center; align-items: center" class="sbttBacktotop"><svg width="24" height="24" viewBox="0 0 24 24" style="fill:#880021" xmlns="http://www.w3.org/2000/svg">\n' +
			'<path d="M12 6L12.3536 5.64645L12 5.29289L11.6464 5.64645L12 6ZM11.5 18C11.5 18.2761 11.7239 18.5 12 18.5C12.2761 18.5 12.5 18.2761 12.5 18L11.5 18ZM16.3536 9.64645L12.3536 5.64645L11.6464 6.35355L15.6464 10.3536L16.3536 9.64645ZM11.6464 5.64645L7.64645 9.64645L8.35355 10.3536L12.3536 6.35355L11.6464 5.64645ZM11.5 6L11.5 18L12.5 18L12.5 6L11.5 6Z" />\n' +
			'</svg>\n</div>');
	jQuery(window).scroll(function()
	{
		if(jQuery(this).scrollTop()!=0)
		{
			jQuery("#sbttBacktotop").fadeIn()
		}
		else
		{
			jQuery("#sbttBacktotop").fadeOut()
			
		}
	});
	jQuery("#sbttBacktotop").on('click touchstart',function(e)
	{
		e.preventDefault();
		jQuery("body,html").animate({scrollTop:0},500);
		 return false; 
	});
});
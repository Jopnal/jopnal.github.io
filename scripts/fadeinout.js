$(function(){

    $('body').hide().fadeIn('slow');

    $('a').click(function()
    {
        var link = $(this).attr('href');

        if (!link || link[0] === "#")
        {
            location.hash = newUrl;
            return;
        }
        
        $('body').fadeOut('slow', function()
        {
            window.location.href = link;
        });
        
        return false;
    });
});
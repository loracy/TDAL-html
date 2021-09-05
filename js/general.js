$(document).ready(function() {
    $('.DropdownInner-item > .dropdown-item.icon-arrow').each(function(index) {
        
        $(this).hover(function() {
            $('.DropdownInner[category="' + (index + 1) + '"]').addClass('Show');
        }, function() {
            let isHoverOnChild = $('.DropdownInner[category="' + (index + 1) + '"]:hover').length > 0;
            
            if(!isHoverOnChild) {
                $('.DropdownInner[category="' + (index + 1) + '"]').removeClass('Show');
            }
        });
    });

    $('#autocomplete-homeTopSearchbar').autoComplete('show');
    $('#autocomplete-siteSearch').autoComplete('show');
});
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

    $('#FilterSectionOption-4_1').slider({
        range: true,
        min: 0,
        max: 10000,
        values: [0, 10000],
        slide: function(event, ui) {
            $("#rangeValueFrom").val(ui.values[0]);
            $("#rangeValueTo").val(ui.values[1]);
        }
    });

    $('.btn[updload]').each(function(index) {
        console.log($(this).find('.FileUploaderWrapper-progressBar'));
        console.log($(this).attr('updload'));
        $(this).find('.FileUploaderWrapper-progressBar').css('width', $(this).attr('updload') + '%');
    });
    
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
});
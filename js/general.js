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
        $(this).find('.FileUploaderWrapper-progressBar').css('width', $(this).attr('updload') + '%');
    });

    $('#dualListboxImporter').click(function(){
        let selectedAmount = $('.form-select-dualListbox[dualListbox="left"] option:selected').length;
        let $selectedItems = $('.form-select-dualListbox[dualListbox="left"] option:selected');

        $selectedItems.remove();
        $('.form-select-dualListbox[dualListbox="right"]').append($selectedItems);
    });
    
    $('#dualListboxExporter').click(function(){
        let selectedAmount = $('.form-select-dualListbox[dualListbox="right"] option:selected').length;
        let $selectedItems = $('.form-select-dualListbox[dualListbox="right"] option:selected');

        $selectedItems.remove();
        $('.form-select-dualListbox[dualListbox="left"]').append($selectedItems);
    });
});

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
});

var toastElList = [].slice.call(document.querySelectorAll('.toast'));
var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl);
});


var myToastEl = document.getElementById('myToast');
myToastEl.addEventListener('hidden.bs.toast', function () {
    $('.toast-container').hide();
});

function showToast(state, content) {
    let tosatBody = '<h3 class="H3-regular">' + content + '</h3>';

    if(state == '1') {
        tosatBody = 
        '<img class="me-2" src="assets/icon/successful.svg" />' + 
        '<h3 class="H3-regular m-0">' + content + '</h3>';

        $('.toast-body').html(tosatBody);
        $('.toast-container').show();
        $('.toast').toast('show');
        $('.toast').attr('state-type', state);

    } else {
        $('.toast-body').html(tosatBody);
        $('.toast-container').show();
        $('.toast').toast('show');
    }
}
$(document).ready(function() {
    // Global menu function
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

    // Bootstrap ui elements initialization
    $('#autocomplete-homeTopSearchbar').autoComplete('show');
    $('#autocomplete-siteSearch').autoComplete('show');
    
    // Jquery ui elements initialization
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

    $(".form-datepicker").datepicker({
        dateFormat: 'yy / dd / mm'
    });
    
    $(".form-datepicker").datepicker({
        dateFormat: 'yy / dd / mm'
    });

    $('.form-mutiselect#input_country').multiselect({
        noneSelectedText: '居住的國家*',
        selectedList: 1,
        header: false,
        beforeopen: function(event, ui) {
            $('label[for*="input_country-option"]').closest('.ui-multiselect-menu').width($('#input_country').width() - 12);
        }
    });

    $('.form-mutiselect#input_job').multiselect({
        noneSelectedText: '職業類別*',
        selectedList: 1,
        header: false,
        beforeopen: function(event, ui) {
            $('label[for*="input_job-option"]').closest('.ui-multiselect-menu').width($('#input_job').width() - 12);
        }
    });

    $('.form-mutiselect#input_interests').multiselect({
        selectedText: '已選擇 #/#',
        header: false,
        noneSelectedText: '您感興趣的模型* (複選)',
        beforeopen: function(event, ui) {
            $('label[for*="input_interests-option"]').closest('.ui-multiselect-menu').width($('#input_interests').width() - 12);
        }
    });    

    $('.form-mutiselect#input_usage').multiselect({
        selectedText: '已選擇 #/#',
        header: false,
        noneSelectedText: '對3D模型的用途* (複選)',
        beforeopen: function(event, ui) {
            $('label[for*="input_usage-option"]').closest('.ui-multiselect-menu').width($('#input_usage').width() - 12);
        }
    });
    
    $('#signUpInfoDialog').on('show.bs.modal', function () {
        setTimeout(setMutiSelectMenuWidth, 500);
    });

    // Customized ui elements initialization
    //   upload button
    $('.btn[updload]').each(function(index) {
        $(this).find('.FileUploaderWrapper-progressBar').css('width', $(this).attr('updload') + '%');
    });
    
    //   dualListbox
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

    //   tags
    if($('.Tags').length > 0 && $('.TagsContainer').length > 0) {
        let tagsWidth = $('.Tags').innerWidth();
        let tagsInnerWidth = $('.TagsContainer').get(0).scrollWidth;
        
        if(tagsInnerWidth > tagsWidth) {
            $('.Tags').addClass('Tags__overflow');
        }

        $('.Tags-leftButton').click(function() {
            let currentPosition = $('.TagsContainer').scrollLeft();
            
            $('.Tags').removeClass('End');
            $('.TagsContainer').animate({
                scrollLeft: currentPosition - 100
            }, 200);
        });
        
        $('.Tags-rightButton').click(function() {
            let currentPosition = $('.TagsContainer').scrollLeft();
    
            $('.Tags').removeClass('Start');
            $('.TagsContainer').animate({
                scrollLeft: currentPosition + 100
            }, 200);
        });

        $('.Tags__overflow .TagsContainer').scroll(function() {
            if($('.TagsContainer').scrollLeft() >= (tagsInnerWidth - $('.TagsContainer').innerWidth())) {
                $('.Tags').addClass('End');
                $('.Tags').removeClass('Start');
            } else if($('.TagsContainer').scrollLeft() == '0') {
                $('.Tags').removeClass('End');
                $('.Tags').addClass('Start');
            } else {
                $('.Tags').removeClass('End');
                $('.Tags').removeClass('Start');
            }
        });
    }

    //   rating
    $('.Rating img').hover(function() {
        $(this).attr('src', 'assets/icon/rate_full.svg');
        $(this).prevAll().attr('src', 'assets/icon/rate_full.svg');
        $(this).nextAll().attr('src', 'assets/icon/rate_empty.svg');
    });
    
    $('.Rating img').click(function() {
        $(this).attr('src', 'assets/icon/rate_full.svg');
        $(this).prevAll().attr('src', 'assets/icon/rate_full.svg');
        $(this).nextAll().attr('src', 'assets/icon/rate_empty.svg');
    });

    //   sortable tab
    $(document).on('click', '.btn-check:checked + .btn-sort', function() {
        $(this).toggleClass('Reverse');
    });
    
    //   input field with toggleable action sheet
    if($('div[display-by]').length > 0) {
        $('div[display-by]').each(function(index) {
            let inputId = $($('div[display-by]')[index]).attr('display-by');
            
            $('#' + inputId).focus(function() {
                $('div[display-by="' + inputId + '"]').removeClass('d-none');
            });
            
            $('#' + inputId).focusout(function() {
                if($('div[display-by="' + inputId + '"] button:active').length == 0) {
                    $('div[display-by="' + inputId + '"]').addClass('d-none');
                }
            });
        });
    }
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

function setMutiSelectMenuWidth() {
    $('label[for*="input_interests-option"]').closest('.ui-multiselect-menu').width($('#input_interests').width() - 12);
    $('label[for*="input_usage-option"]').closest('.ui-multiselect-menu').width($('#input_usage').width() - 12);
    $('label[for*="input_job-option"]').closest('.ui-multiselect-menu').width($('#input_job').width() - 12);
    $('label[for*="input_country-option"]').closest('.ui-multiselect-menu').width($('#input_country').width() - 12);
}
// dropdown
var btn = document.querySelectorAll('.dropdown');
btn.forEach((i) => i.addEventListener('click', toggleItem, false));
function toggleItem(e) {
    var menu = this.querySelector('.dropdown-menu');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }

    $(document).click(function (event) {
        $('.js-dropdown-open').each(function () {
            if (!$(event.target).closest('.js-dropdown-open, .dropdown-menu').length) {
                menu.classList.remove('open');
            }
        })
    });
}

$(document).ready(function () {
    const triggerItem = () => {
        var dropdownOpen = $('.js-dropdown-open')
        dropdownOpen.each(function () {
            // var wrapperItem = $(this).find('.dropdown-menu')
            var getItem = $(this).find('.dropdown-menu .dropdown-menu-wrapper').children('.item-region');
            var fillText = $(this).find('.dropdown-button');
            getItem.click(function () {
                if (getItem.hasClass('active')) {
                    getItem.removeClass('active')
                }
                $(this).addClass('active')
                getText = $(this).text()
                fillText.text(getText);
                fillText.append('<i class="ic-arrow-select ic-md"></i>');
            })
        })
    }
    function init() {
        triggerItem();
    }
    init();
})


// $(document).ready(function () {
//     const triggerItem = () => {
//         var wrapperDropdown = $('.js-dropdown-open');
//         wrapperDropdown.each(function (e) {
//             var wrapperItem = $(this).find('.dropdown-menu');
//             var getItem = $(this).find('.dropdown-menu .dropdown-menu__wrapper').children('.item-region');
//             var fillValue = $(this).find('.dropdown-button');
//             getItem.on('click', function (e) {
//                 // disable jumping in top
//                 e.preventDefault();
//                 if (getItem.hasClass('active')) {
//                     getItem.removeClass('active');
//                 }
//                 $(this).addClass('active');
//                 // get text item
//                 getText = $(this).text();
//                 // fill text form item to dropdown
//                 fillValue.text(getText);
//                 // fillValue.append(<span class ='ic-arrow-select'></span>);
//                 wrapperItem.removeClass('open');
//             });
//         })
//     }
//     function init() {
//         triggerItem();
//     }
//     init();
// })
// // dropdown
// var btn = document.querySelectorAll('.dropdown');
// btn.forEach((i) => i.addEventListener('click', toggleItem, false));
// function toggleItem(e) {
//     var menu = this.querySelector('.dropdown-menu');
//     if (menu.classList.contains('open')) {
//         menu.classList.remove('open');
//     } else {
//         menu.classList.add('open');
//     }
//     // $(document).click(function (event) {
//     //     if (!$(event.target).closest('.js-dropdown-open').length) {
//     //         menu.classList.remove('open');
//     //     } else {
//     //         menu.classList.add('open');
//     //     }
//     // });
// }

//search bank
$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function () {
        $('#result').html('');
        $('#state').val('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, "i");
        $.getJSON('data.json', function (data) {
            $.each(data, function (key, value) {
                if (value.name.search(expression) != -1 || value.location.search(expression) != -1) {
                    $('#result').append('<li class="list-group-item link-class"><img src="' + value.image + '" height="40" width="40" class="img-thumbnail" /> ' + value.name + '</span></li>');
                }
            });
        });
    });

    $('#result').on('click', 'li', function () {
        var click_text = $(this).text().split('|');
        $('#search').val($.trim(click_text[0]));
        $("#result").html('');
    });
});

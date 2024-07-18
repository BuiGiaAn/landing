$(document).ready(function () {
    const _handleClick = () => {
        $('.items').each(function () {
            var $item = $(this);

            $item.find('.items__store-gb').on('click', function () {
                var storage = $(this).data('gb');
                //change title
                var currentTitle = $item.find('.items__title').text();
                if (currentTitle.includes('256GB') || currentTitle.includes('128GB')) {
                    currentTitle = currentTitle.split(' ').slice(0, -1).join(' ');
                }
                $item.find('.items__title').text(currentTitle + ' ' + storage);
                //add class select-gb
                $item.find('.items__store-gb').removeClass('select-gb');
                $(this).toggleClass('select-gb');
            });
        });
    };

    //sort items
    function sortProductsPriceAsceding() {
        var gridItems = $('.items');
        gridItems.sort(function (a, b) {
            return ($('.items-cost', a).data("price") - $('.items-cost', b).data("price"));
        });
        $(".list").append(gridItems)
    }


    function sortProductsPriceDesceding() {
        var gridItems = $('.items');
        gridItems.sort(function (a, b) {
            return ($('.items-cost', b).data("price") - $('.items-cost', a).data("price"));
        });
        $(".list").append(gridItems)
    }

    function main() {
        var sorting = $('#sort').val()
        if (sorting == '1') {
            sortProductsPriceAsceding()
        } else if (sorting == '2') {
            sortProductsPriceDesceding()
        }
        else {
            $('.list').load(location.href + " .list>*", function () {
                $(".items").slice(0, 4).show();
                init();
            })
        }
    }

    $('#sort').change(function () {
        main();
    })

    //View more items
    $(".items").slice(0, 8).show();
    $(".items-less").click(function () {
        $(".items:visible").slice(-8).fadeOut();
        if ($(".items:visible").length == 16) {
            $(".items-less").fadeOut();
            $(".items-more").fadeIn();
        }
    })

    $(".items-more").click(function () {
        $(".items:hidden").slice(0, 8).show();
        if ($(".items:hidden").length == 0) {
            $(".items-more").fadeOut();
            $(".items-less").fadeIn();
        }
    })



    function init() {
        _handleClick();
    }
    init();

})




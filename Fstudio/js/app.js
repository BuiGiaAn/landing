$(document).ready(function () {

    const _handleClick = () => {
    }
    const _handleClickColor = () => {
        //show dropdown color
        $('.product-info__color').click(function () {
            $('.product-info__contain').toggle()

        })
        //Click ra ngoài drop down biến mất
        $(document).click(function (event) {
            if (!$(event.target).closest('.product-info__color, .product-info__contain').length) {
                $('.product-info__contain').hide();
            }
        });
        //Cập nhật text cho color
        $('.product-info__contain-color').click(function () {
            var selectedColor = $(this).text();
            $('.product-info__color').contents().filter(function () {
                return this.nodeType === 3;
            }).first().replaceWith(selectedColor + ' ');
        });

    }

    // const _handleClickTotal = () => {
    //     // Update cost
    //     var baseCost = $("#product-cost").data('cost');
    //     var voucherCost = $("#product-voucher").data('voucher');
    //     function updateCost() {
    //         var quantity = parseInt($('#spinner-value').val());
    //         var totalCost = baseCost * quantity;
    //         if (!$('.product-cost-voucher').hasClass('')) {
    //             // var paymentCost = (baseCost * quantity - voucherCost * ($('#spinner-value').val()));
    //             var paymentCost = (baseCost * quantity);
    //         } else if (!$('.product-cost-voucher').hasClass()) {
    //             var paymentCost = (baseCost * quantity - voucherCost * ($('#spinner-value').val()));
    //         }
    //         $('#product-cost').text(totalCost.toLocaleString('vi-VN') + '₫');
    //         $('#paymentCost').text(paymentCost.toLocaleString('vi-VN') + '₫');
    //         $('#paymentTotal').text(paymentCost.toLocaleString('vi-VN') + '₫');
    //     }

    //     $('#spinner-value').change(function () {
    //         updateCost();
    //     });

    //     // tang giam so luong san pham
    //     $('#minus').click(function () {
    //         let input = $('#spinner-value');
    //         let value = parseInt(input.val());
    //         if (value > 1) {
    //             input.val(value - 1);
    //         }
    //         updateCost();
    //     });

    //     $('#plus').click(function () {
    //         let input = $('#spinner-value');
    //         let value = parseInt(input.val());
    //         input.val(value + 1);
    //         updateCost();
    //     });

    //     $('#spinner-value').on('input', function () {
    //         let input = $(this);
    //         let value = input.val();
    //         value = value.replace(/[^0-9]/g, '')
    //         if (isNaN(value) || value <= 0) {
    //             input.val(1);
    //         } else {
    //             input.val(parseInt(value))
    //         }
    //     })

    //     $('#delete').click(function () {
    //         $('.payment__container').hide()
    //         $('.no-product').show()
    //     })

    // }

    const _handleClickTotal = () => {
        // Update cost
        var baseCost = $("#product-cost").data('cost');
        var voucherCost = $("#product-voucher").data('voucher');

        function updateCost(spinner) {
            var quantity = parseInt(spinner.find('.input-spinner__val').val());
            var totalCost = baseCost * quantity;
            if (!$('.product-cost-voucher').hasClass('')) {
                var paymentCost = (baseCost * quantity);
            } else if (!$('.product-cost-voucher').hasClass()) {
                var paymentCost = (baseCost * quantity - voucherCost * quantity);
            }
            $('#product-cost').text(totalCost.toLocaleString('vi-VN') + '₫');
            $('#paymentCost').text(paymentCost.toLocaleString('vi-VN') + '₫');
            $('#paymentTotal').text(paymentCost.toLocaleString('vi-VN') + '₫');
        }

        $('.input-spinner').each(function () {
            var spinner = $(this);

            spinner.find('.input-spinner__val').change(function () {
                updateCost(spinner);
            });

            // tang giam so luong san pham
            spinner.find('#minus').click(function () {
                let input = spinner.find('.input-spinner__val');
                let value = parseInt(input.val());
                if (value > 1) {
                    input.val(value - 1);
                }
                updateCost(spinner);
            });

            spinner.find('#plus').click(function () {
                let input = spinner.find('.input-spinner__val');
                let value = parseInt(input.val());
                input.val(value + 1);
                updateCost(spinner);
            });

            spinner.find('.input-spinner__val').on('input', function () {
                let input = $(this);
                let value = input.val();
                value = value.replace(/[^0-9]/g, '')
                if (isNaN(value) || value <= 0) {
                    input.val(1);
                } else {
                    input.val(parseInt(value))
                }
            });
        });

        $('#delete').click(function () {
            $('.payment__container').hide();
            $('.no-product').show();
        });
    };


    const _handleButtonApply = () => {
        $('.voucher_left-input').on('input', function () {
            var inputVal = $(this).val();
            var button = $('.voucher_left-btn-disabled');

            if (inputVal.trim() !== '') {
                button.removeClass('voucher_left-btn-disabled').addClass('voucher_left-btn');
            } else {
                $('.voucher_left-btn').removeClass('voucher_left-btn').addClass('voucher_left-btn-disabled');
            }
        });

    }


    //checkedbox
    const _handleCheckGender = () => {
        var triggerGender = $('.form-gender')
        triggerGender.each(function () {
            var getCheckedbox = $(this).find('.form-checkbox').children('.checked-box')
            var getTextGender = $(this).find('.check-gender')
            getCheckedbox.click(function () {
                getCheckedbox.not(this).prop('checked', false);

                $(getTextGender).on('change', function () {
                    var myGender = $(this).next('label').text();
                    console.log(myGender);
                    window.myGender = myGender;

                })
            })
        })
    }

    //Thu gon form thong tin khach hang
    const _HandleForm = () => {
        var inputFormName = $('#name')
        var inputFormPhone = $('#phone')
        var inputFormEmail = $('#email')

        inputFormName.on('input', function () {
            var formValName = $(this).val();
            $("#form-name").text(formValName)
            if (window.myGender) {
                $("#form-name").prepend(window.myGender);
            }

        })

        inputFormPhone.on('input', function () {
            var formValPhone = $(this).val();
            $("#form-phone").text(formValPhone)
        })

        inputFormEmail.on('input', function () {
            var formValEmail = $(this).val();
            $("#form-email").text(formValEmail)
        })
    }

    //click rut gon in4 cutomer
    const _handleClickShort = () => {
        $('#ex16').click(function () {
            console.log('hehehe')
            $('.deli-ship').toggle()
            $('.form-pi-container').hide()
            $('.form-pi-finished').show()
            $('.form-title-container').addClass('form-title-container_short')
            $('.form-edit').show()
            $('.deli-order-container').hide()
            $('.customer ').css('padding', '0')
        })
        $('#ex17').click(function () {
            console.log('hehehe')
            $('.deli-order-container').toggle()
            $('.form-pi-container').hide()
            $('.form-pi-finished').show()
            $('.form-title-container').addClass('form-title-container_short')
            $('.form-edit').show()
            $('.deli-ship').hide()
            $('.customer ').css('padding', '0')

        })
    }

    //CLick edit in4
    const _handleClickEditInfo = () => {
        $('.form-edit').click(function () {
            console.log('heheh')
            $('.form-pi-container').show()
            $('.form-pi-finished').hide()
            $(this).hide()
            if ($('.form-title-container').hasClass('form-title-container_short')) {
                $('.form-title-container').removeClass('form-title-container_short')
            }
            $('.customer ').css('padding-top', '16')

        })
    }

    //CLick popup bill cty
    const _handleClickExportBill = () => {
        $('#type122').click(function () {
            console.log('hehehihihi');
            $('#bill').toggle()
        })
        $('#type123').click(function () {
            console.log('gagagaga');
            $('#bill1').toggle()
        })
    }

    //choose bank
    const _handleCLickChoosebank = () => {
        $('#ex19').click(function () {
            $('.search-bank').toggle()
        })
        $('input[name="grp-bank"]').change(function () {
            if ($('#ex19').is(':checked')) {
                $('.search-bank').show();
            } else {
                $('.search-bank').hide();
            }
        });
    }



    function init() {
        _handleClick();
        _handleClickTotal();
        _handleClickColor();
        _handleButtonApply();
        _handleCheckGender();
        _HandleForm();
        _handleClickShort();
        _handleClickEditInfo();
        _handleClickExportBill();
        _handleCLickChoosebank();
    }
    init();

})




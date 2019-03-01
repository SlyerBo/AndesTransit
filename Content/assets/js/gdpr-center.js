
(function ($) {
    "use strict";

    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

    $(".gdpr-data-deletion-dob").datepicker({
        changeMonth: true,
        changeYear: true,
        closeText: "Close",
        yearRange: "-90:+0"
    });
    $(".gdpr-data-portability-dob").datepicker({
        changeMonth: true,
        changeYear: true,
        closeText: "Close",
        yearRange: "-90:+0"
    });
    $(".gdpr-data-inquiry-dob").datepicker({
        changeMonth: true,
        changeYear: true,
        closeText: "Close",
        yearRange: "-90:+0"
    });

    var gdprDataDeletionFormInput = $('.gdpr-data-deletion-validate-form .validate-input .input100');

    var gdprDataPortabilityFormInput = $('.gdpr-data-portability-validate-form .validate-input .input100');

    var gdprDataInquiryFormInput = $('.gdpr-data-inquiry-validate-form .validate-input .input100');


    $('.gdpr-data-deletion-send').on('click', function () {
        var check = true;
        for (var i = 0; i < gdprDataDeletionFormInput.length; i++) {
            if (validate(gdprDataDeletionFormInput[i]) == false) {
                showValidate(gdprDataDeletionFormInput[i]);
                check = false;
            }
        }
        if (check) {
            $('.gdpr-data-deletion-send').text('Sending...').attr('disabled', true);
            $.ajax({
                url: baseUrl + '/DataDeletionRequest',
                type: "POST",
                data: {
                    fullname: $('.gdpr-data-deletion-fullname').val(),
                    billingEmail: $('.gdpr-data-deletion-billing-email').val(),
                    orderNo: $('.gdpr-data-deletion-order-number').val(),
                    nameOfPassenger: $('.gdpr-data-deletion-passenger-name').val(),
                    dateOfBirth: $('.gdpr-data-deletion-dob').val(),
                    deleteDataMarketing: $('.gdpr-data-deletemarket-chk').is(':checked'),
                    preventReuseData: $('.gdpr-data-preventdata-chk').is(':checked'),
                    additionalInfo: $('.gdpr-data-deletion-additional').val()
                },
                success: function (query) {
                    $('.gdpr-data-deletion-order-number').val('')
                    $('.gdpr-data-deletion-additional').val('')
                    $('.gdpr-data-deletion-send').text('Send').attr('disabled', false);
                    $('.gdpr-data-deletemarket-chk').prop('checked', false)
                    $('.gdpr-data-preventdata-chk').prop('checked', false)
                    for (var i = 0; i < gdprDataDeletionFormInput.length; i++) {
                        $(gdprDataDeletionFormInput[i]).val('')
                    }
                    $(".gdpr-data-deletion-success-message").show().fadeOut(5000)
                },
                error: function (error) {
                    alert('Error')
                }
            });
        }
    });

    $('.gdpr-data-portability-send').on('click', function () {
        var check = true;

        for (var i = 0; i < gdprDataPortabilityFormInput.length; i++) {
            if (validate(gdprDataPortabilityFormInput[i]) == false) {
                showValidate(gdprDataPortabilityFormInput[i]);
                check = false;
            }
        }
        if (check) {
            $('.gdpr-data-portability-send').text('Sending...').attr('disabled', true);
            $.ajax({
                url: baseUrl + '/DataPortabilityRequest',
                type: "POST",
                data: {
                    fullname: $('.gdpr-data-portability-fullname').val(),
                    billingEmail: $('.gdpr-data-portability-billing-email').val(),
                    orderNo: $('.gdpr-data-portability-order-number').val(),
                    nameOfPassenger: $('.gdpr-data-portability-passenger-name').val(),
                    dateOfBirth: $('.gdpr-data-portability-dob').val(),
                    additionalInfo: $('.gdpr-data-portability-additional').val()
                },
                success: function (query) {
                    $('.gdpr-data-portability-order-number').val('')
                    $('.gdpr-data-portability-additional').val('')
                    $('.gdpr-data-portability-send').text('Send').attr('disabled', false);
                    for (var i = 0; i < gdprDataDeletionFormInput.length; i++) {
                        $(gdprDataPortabilityFormInput[i]).val('')
                    }
                    $(".gdpr-data-portability-success-message").show().fadeOut(5000)
                },
                error: function (error) {
                    alert('Error')
                }
            });
        }
    });


    $('.gdpr-data-inquiry-send').on('click', function () {
        var check = true;

        for (var i = 0; i < gdprDataInquiryFormInput.length; i++) {
            if (validate(gdprDataInquiryFormInput[i]) == false) {
                showValidate(gdprDataInquiryFormInput[i]);
                check = false;
            }
        }
        if (check) {
            $('.gdpr-data-inquiry-send').text('Sending...').attr('disabled', true);
            $.ajax({
                url: baseUrl + '/DataInquiryRequest',
                type: "POST",
                data: {
                    fullname: $('.gdpr-data-inquiry-fullname').val(),
                    billingEmail: $('.gdpr-data-inquiry-billing-email').val(),
                    orderNo: $('.gdpr-data-inquiry-order-number').val(),
                    nameOfPassenger: $('.gdpr-data-inquiry-passenger-name').val(),
                    dateOfBirth: $('.gdpr-data-inquiry-dob').val(),
                    additionalInfo: $('.gdpr-data-inquiry-additional').val()
                },
                success: function (query) {
                    $('.gdpr-data-inquiry-order-number').val('')
                    $('.gdpr-data-inquiry-additional').val('')
                    $('.gdpr-data-inquiry-send').text('Send').attr('disabled', false);
                    for (var i = 0; i < gdprDataDeletionFormInput.length; i++) {
                        $(gdprDataInquiryFormInput[i]).val('')
                    }
                    $(".gdpr-data-inquiry-success-message").show().fadeOut(5000)
                },
                error: function (error) {
                    alert('Error')
                }
            });
        }
    });


    $('.gdpr-data-deletion-validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    $('.gdpr-data-portability-validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    $('.gdpr-data-inquiry-validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });


    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


    var gdprRightsNavOpen = false;
    var gdprRightsFaqOpen = false;
    var gdprDataDeletionOpen = false;
    var gdprDataPortabilityOpen = false;
    var gdprDataInquiryOpen = false;

    $("#gdpr-rights-nav").click(function () {
        gdprRightsNavOpen = !gdprRightsNavOpen;
        if (gdprRightsNavOpen) {
            $(this).addClass('gdpr-list-selected')
            $(".gdpr-rights").css('display', 'block')
            $(".gdpr-faq").css('display', 'none')
            $(".gdpr-data-deletion").css('display', 'none')
            $(".gdpr-data-portability").css('display', 'none')
            $(".gdpr-data-inquiry").css('display', 'none')
            $("#gdpr-faq-nav").removeClass('gdpr-list-selected')
            $("#gdpr-data-deletion-nav").removeClass('gdpr-list-selected')
            $("#gdpr-data-portability-nav").removeClass('gdpr-list-selected')
            $("#gdpr-data-inquiry-nav").removeClass('gdpr-list-selected')
            gdprRightsFaqOpen = false;
            gdprDataDeletionOpen = false;
            gdprDataPortabilityOpen = false;
            gdprDataInquiryOpen = false
        }
    })

    $("#gdpr-rights-nav").trigger('click');

    $("#gdpr-faq-nav").click(function () {
        gdprRightsFaqOpen = !gdprRightsFaqOpen
        if (gdprRightsFaqOpen) {
            $(this).addClass('gdpr-list-selected')
            $(".gdpr-faq").css('display', 'block')
            $(".gdpr-rights").css('display', 'none')
            $(".gdpr-data-deletion").css('display', 'none')
            $(".gdpr-data-portability").css('display', 'none')
            $(".gdpr-data-inquiry").css('display', 'none')
            $("#gdpr-rights-nav").removeClass('gdpr-list-selected')
            $("#gdpr-data-deletion-nav").removeClass('gdpr-list-selected')
            $("#gdpr-data-portability-nav").removeClass('gdpr-list-selected')
            $("#gdpr-data-inquiry-nav").removeClass('gdpr-list-selected')
            gdprRightsNavOpen = false;
            gdprDataDeletionOpen = false;
            gdprDataInquiryOpen = false
            gdprDataPortabilityOpen = false;
        }
    })
    $("#gdpr-data-deletion-nav").click(function () {
        gdprDataDeletionOpen = !gdprDataDeletionOpen
        if (gdprDataDeletionOpen) {
            $(this).addClass('gdpr-list-selected')
            $(".gdpr-data-deletion").css('display', 'block')
            $(".gdpr-rights").css('display', 'none')
            $(".gdpr-faq").css('display', 'none')
            $(".gdpr-data-portability").css('display', 'none')
            $(".gdpr-data-inquiry").css('display', 'none')
            $("#gdpr-rights-nav").removeClass('gdpr-list-selected')
            $("#gdpr-faq-nav").removeClass('gdpr-list-selected')
            $("#gdpr-data-portability-nav").removeClass('gdpr-list-selected')
            $("#gdpr-data-inquiry-nav").removeClass('gdpr-list-selected')
            gdprRightsNavOpen = false;
            gdprRightsFaqOpen = false;
            gdprDataPortabilityOpen = false;
            gdprDataInquiryOpen = false;
        }
    })
    $("#gdpr-data-portability-nav").click(function () {
        gdprDataPortabilityOpen = !gdprDataPortabilityOpen
        if (gdprDataPortabilityOpen) {
            $(this).addClass('gdpr-list-selected')
            $(".gdpr-data-portability").css('display', 'block')
            $(".gdpr-rights").css('display', 'none')
            $(".gdpr-faq").css('display', 'none')
            $(".gdpr-data-deletion").css('display', 'none')
            $(".gdpr-data-inquiry").css('display', 'none')
            $("#gdpr-rights-nav").removeClass('gdpr-list-selected')
            $("#gdpr-faq-nav").removeClass('gdpr-list-selected')
            $("#gdpr-data-deletion-nav").removeClass('gdpr-list-selected')
            $("#gdpr-data-inquiry-nav").removeClass('gdpr-list-selected')
            gdprRightsNavOpen = false;
            gdprRightsFaqOpen = false;
            gdprDataDeletionOpen = false;
            gdprDataInquiryOpen = false;
        }
    })
    $("#gdpr-data-inquiry-nav").click(function () {
        gdprDataInquiryOpen = !gdprDataInquiryOpen
        if (gdprDataInquiryOpen) {
            $(this).addClass('gdpr-list-selected')
            $(".gdpr-data-inquiry").css('display', 'block')
            $(".gdpr-rights").css('display', 'none')
            $(".gdpr-faq").css('display', 'none')
            $(".gdpr-data-deletion").css('display', 'none')
            $(".gdpr-data-portability").css('display', 'none')
            $("#gdpr-rights-nav").removeClass('gdpr-list-selected')
            $("#gdpr-faq-nav").removeClass('gdpr-list-selected')
            $("#gdpr-data-deletion-nav").removeClass('gdpr-list-selected')
            $("#gdpr-data-portability-nav").removeClass('gdpr-list-selected')
            gdprRightsNavOpen = false;
            gdprRightsFaqOpen = false;
            gdprDataDeletionOpen = false;
            gdprDataPortabilityOpen = false;
        }
    })

})(jQuery);
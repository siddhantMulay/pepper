
$(document).ready(function () {

    //Open Sidebar
    $('#sideHam').click(function () {
        let action = $(this).attr('data-action');
        let sidebarVisible = '';
        let hamAction = '';
        if (action === 'open') {
            $(".pageContent").css("z-index", '-1');
            $('.pageOverlay').addClass('active')
            sidebarVisible = true;
            hamAction = 'close';
        }
        else {
            $(".pageContent").removeAttr("style");
            $('.pageOverlay').removeClass('active')
            sidebarVisible = false;
            hamAction = 'open';
        }

        $('#sideHam').attr('data-action', hamAction);
        $('#sidebar').attr('data-visible', sidebarVisible);

    })

    //Close Sidebar
    $('.pageOverlay').click(function () {
        $('#sideHam').attr('data-action', "open");
        $('#sidebar').attr('data-visible', "false");
        $(this).removeClass('active');
    })

    //Toggle sidebar when window resizes
    $(window).resize(function () {
        $('#sideHam').attr('data-action', "open");
        $('#sidebar').attr('data-visible', "false");
    })

    //Header opacity on scroll
    $('body').on("scroll", function () {
        if ($('body').scrollTop() > 50) {
            $("header").addClass("active");
            $("header button").removeClass("dots");
        } else {
            $("header").removeClass("active");
            $("header button").addClass("dots");
        }
    });
})
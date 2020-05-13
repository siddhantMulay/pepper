
$(document).ready(function() {

    //Open Sidebar
    $('#sideHam').click(function() {
        let action = $(this).attr('data-action');
        let sidebarVisible = '';
        let hamAction = '';
        if (action === 'open') {
            sidebarVisible = true;
            hamAction = 'close';
        }
        else {
            sidebarVisible = false;
            hamAction = 'open';
        }

        $('#sideHam').attr('data-action', hamAction);
        $('#sidebar').attr('data-visible', sidebarVisible);

    })

    //Toggle sidebar when window resizes
    $(window).resize(function(){
        $('#sideHam').attr('data-action', "open");
        $('#sidebar').attr('data-visible', "false");
    })

    //Header opacity on scroll
    $('body').on("scroll", function() {
        if($('body').scrollTop() > 50) {
            $("header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("header").removeClass("active");
        }
    });
})
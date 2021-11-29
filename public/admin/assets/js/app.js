/*
Template Name: Skote - Admin & Dashboard Template
Author: Themesbrand
Version: 3.1.0
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Main Js File
*/
var loaderSuccess='<div class="spinner-border text-success m-1" role="status" style="width: 43px;height: 43px;"><span class="sr-only">Loading...</span></div>';

(function ($) {

    'use strict';

    function initMetisMenu() {
        //metis menu
        $("#side-menu").metisMenu();
    }

    function initLeftMenuCollapse() {
        $('#vertical-menu-btn').on('click', function (event) {
            event.preventDefault();
            $('body').toggleClass('sidebar-enable');
            if ($(window).width() >= 992) {
                $('body').toggleClass('vertical-collpsed');
            } else {
                $('body').removeClass('vertical-collpsed');
            }
        });
    }

    function initActiveMenu() {
        // === following js will activate the menu in left side bar based on url ====
        $("#sidebar-menu a").each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) {
                $(this).addClass("active");
                $(this).parent().addClass("mm-active"); // add active to li of the current link
                $(this).parent().parent().addClass("mm-show");
                $(this).parent().parent().prev().addClass("mm-active"); // add active class to an anchor
                $(this).parent().parent().parent().addClass("mm-active");
                $(this).parent().parent().parent().parent().addClass("mm-show"); // add active to li of the current link
                $(this).parent().parent().parent().parent().parent().addClass("mm-active");
            }
        });
    }

    function initMenuItemScroll() {
        // focus active menu in left sidebar
        $(document).ready(function(){
            if($("#sidebar-menu").length > 0 && $("#sidebar-menu .mm-active .active").length > 0){
                var activeMenu = $("#sidebar-menu .mm-active .active").offset().top;
                if( activeMenu > 300) {
                    activeMenu = activeMenu - 300;
                    $(".vertical-menu .simplebar-content-wrapper").animate({ scrollTop: activeMenu }, "slow");
                }
            }
        });
    }

    function initHoriMenuActive() {
        $(".navbar-nav a").each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) { 
                $(this).addClass("active");
                $(this).parent().addClass("active");
                $(this).parent().parent().addClass("active");
                $(this).parent().parent().parent().addClass("active");
                $(this).parent().parent().parent().parent().addClass("active");
                $(this).parent().parent().parent().parent().parent().addClass("active");
                $(this).parent().parent().parent().parent().parent().parent().addClass("active");
            }
        });
    }

    function initFullScreen() {
        $('[data-toggle="fullscreen"]').on("click", function (e) {
            e.preventDefault();
            $('body').toggleClass('fullscreen-enable');
            if (!document.fullscreenElement && /* alternative standard method */ !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
        });
        document.addEventListener('fullscreenchange', exitHandler );
        document.addEventListener("webkitfullscreenchange", exitHandler);
        document.addEventListener("mozfullscreenchange", exitHandler);
        function exitHandler() {
            if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
                console.log('pressed');
                $('body').removeClass('fullscreen-enable');
            }
        }
    }

    function initRightSidebar() {
        // right side-bar toggle
        $('.right-bar-toggle').on('click', function (e) {
            $('body').toggleClass('right-bar-enabled');
        });

        $(document).on('click', 'body', function (e) {
            if ($(e.target).closest('.right-bar-toggle, .right-bar').length > 0) {
                return;
            }

            $('body').removeClass('right-bar-enabled');
            return;
        });
    }

    function initDropdownMenu() {
        if(document.getElementById("topnav-menu-content")){
            var elements = document.getElementById("topnav-menu-content").getElementsByTagName("a");
            for(var i = 0, len = elements.length; i < len; i++) {
                elements[i].onclick = function (elem) {
                    if(elem.target.getAttribute("href") === "#") {
                        elem.target.parentElement.classList.toggle("active");
                        elem.target.nextElementSibling.classList.toggle("show");
                    }
                }
            }
            window.addEventListener("resize", updateMenu);
        }
    }

    function updateMenu() {
        var elements = document.getElementById("topnav-menu-content").getElementsByTagName("a");
        for(var i = 0, len = elements.length; i < len; i++) {
            if(elements[i].parentElement.getAttribute("class") === "nav-item dropdown active") {
                elements[i].parentElement.classList.remove("active");
                elements[i].nextElementSibling.classList.remove("show");
            }
        }
    }
    
    function initComponents() {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        });

        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        });
    }

    function initPreloader() {
        $(window).on('load', function() {
            $('#status').fadeOut();
            $('#preloader').delay(350).fadeOut('slow');
        });
    }

    function initSettings() {
        if (window.sessionStorage) {
            var alreadyVisited = sessionStorage.getItem("is_visited");
            if (!alreadyVisited) {
                sessionStorage.setItem("is_visited", "light-mode-switch");
            } else {
                $(".right-bar input:checkbox").prop('checked', false);
                $("#" + alreadyVisited).prop('checked', true);
               // updateThemeSetting(alreadyVisited);
            }
        }
        $("#light-mode-switch, #dark-mode-switch, #rtl-mode-switch, #dark-rtl-mode-switch").on("change", function (e) {
           // updateThemeSetting(e.target.id);
        });

        // show password input value
        $("#password-addon").on('click', function () {
            if ($(this).siblings('input').length > 0) {
                $(this).siblings('input').attr('type') == "password" ? $(this).siblings('input').attr('type', 'input') : $(this).siblings('input').attr('type', 'password');
            }
        })
        $('body').find('.nav-link').on('click',function(){
            $('input[name="form_step"]').val($(this).data('section'));
        })
    }
    
    // function updateThemeSetting(id) {
    //     if ($("#light-mode-switch").prop("checked") == true && id === "light-mode-switch") {
    //         $("html").removeAttr("dir");
    //         $("#dark-mode-switch").prop("checked", false);
    //         $("#rtl-mode-switch").prop("checked", false);
    //         $("#dark-rtl-mode-switch").prop("checked", false);
    //         $("#bootstrap-style").attr('href', 'assets/css/bootstrap.min.css');
    //         $("#app-style").attr('href', 'assets/css/app.min.css');
    //         sessionStorage.setItem("is_visited", "light-mode-switch");
    //     } else if ($("#dark-mode-switch").prop("checked") == true && id === "dark-mode-switch") {
    //         $("html").removeAttr("dir");
    //         $("#light-mode-switch").prop("checked", false);
    //         $("#rtl-mode-switch").prop("checked", false);
    //         $("#dark-rtl-mode-switch").prop("checked", false);
    //         $("#bootstrap-style").attr('href', 'assets/css/bootstrap-dark.min.css');
    //         $("#app-style").attr('href', 'assets/css/app-dark.min.css');
    //         sessionStorage.setItem("is_visited", "dark-mode-switch");
    //     } else if ($("#rtl-mode-switch").prop("checked") == true && id === "rtl-mode-switch") {
    //         $("#light-mode-switch").prop("checked", false);
    //         $("#dark-mode-switch").prop("checked", false);
    //         $("#dark-rtl-mode-switch").prop("checked", false);
    //         $("#bootstrap-style").attr('href', 'assets/css/bootstrap.rtl.css');
    //         $("#app-style").attr('href', 'assets/css/app.rtl.css');
    //         $("html").attr("dir", 'rtl');
    //         sessionStorage.setItem("is_visited", "rtl-mode-switch");
    //     } else if ($("#dark-rtl-mode-switch").prop("checked") == true && id === "dark-rtl-mode-switch") {
    //         $("#light-mode-switch").prop("checked", false);
    //         $("#rtl-mode-switch").prop("checked", false);
    //         $("#dark-mode-switch").prop("checked", false);
    //         $("#bootstrap-style").attr('href', 'assets/css/bootstrap-dark.rtl.css');
    //         $("#app-style").attr('href', 'assets/css/app-dark.rtl.css');
    //         $("html").attr("dir", 'rtl');
    //         sessionStorage.setItem("is_visited", "dark-rtl-mode-switch");
    //     }
    // }

    function initCheckAll() {
        $('#checkAll').on('change', function() {     
            $('.table-check .form-check-input').prop('checked', $(this).prop("checked"));              
        });
        $('.table-check .form-check-input').change(function(){ 
            if($('.table-check .form-check-input:checked').length == $('.table-check .form-check-input').length){
                $('#checkAll').prop('checked',true);
            }else{
                $('#checkAll').prop('checked',false);
            }
        });
    }

    function init() {
        initMetisMenu();
        initLeftMenuCollapse();
        initActiveMenu();
        initMenuItemScroll();
        initHoriMenuActive();
        initFullScreen();
        initRightSidebar();
        initDropdownMenu();
        initComponents();
        initSettings();
        initPreloader();
        Waves.init();
        initCheckAll();
    }

    init();
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    
    $(document).on('click', '.delete', function(event){
        event.preventDefault(); 
        var tableId=$(this).closest('.ajax-table').attr('id');
        $.ajax({
            type: 'post',
            url: delete_item_url,
            data:{ itemId:$(this).closest('tr').data('item') },
            dataType: "json",
            success: function (response) {
                if(response.status=='success')
                loadHtmlTable(tableId);
            }
        });
    });  
    $(document).on('click', '.pagination a', function(event){
        event.preventDefault(); 
        var tableId=$(this).closest('.ajax-table').attr('id');
        $.ajax({
            type: 'get',
            url: $(this).attr('href'),
            dataType: "json",
            success: function (response) {
                if(response.status=='success')
                $('body').find('#'+tableId).html(response.html);
            }
        });
    });    
    $('#upload_form_submit').submit(function(e) {
        e.preventDefault();    
        var formData = new FormData(this);
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: formData,
            success: function (response) {
                if(response.status=='success')
                {
                    allertForSuccess('Good',response.message,response.redrict_to);
            
                }
            },
            cache: false,
            contentType: false,
            processData: false
        });
    });
    $('body').on('change','#ship-address', function() {
        if($(this).is(':checked'))
        {
            $('body').find('.attach-shipping-address').removeClass('hide');
        }
        else
        {
            $('body').find('.attach-shipping-address').addClass('hide');
        }
    });
})(jQuery)

function loadHtmlTable(tableId='table-record'){
    $.ajax({
        type: 'get',
        url: dafult_table_url,
        dataType: "json",
        cache: false,
        success: function (response) {
            if(response.status=='success')
            $('body').find('#'+tableId).html(response.html);
        }
    });
}

function submit_form(obj,ev,formId='form-submit',hasFiles=false){
    ev.preventDefault();
    // var submitBtn=$(obj).closest('.html-submit').html();
    // $(obj).closest('.html-submit').html(loaderSuccess);
   
    if(hasFiles=='TRUE')
    {
        $('#upload_form_submit').submit();
        return true; 
    }
    $.ajax({
        type: 'post',
        url: $('body').find('#'+formId).attr('action'),
        data:$('#'+formId).serialize(),
        dataType: "json",
        success: function (response) {
            if(response.status=='success')
            {
                allertForSuccess('Good',response.message,response.redrict_to);
            }
        }
    });
}

function addAtribute(attributeId){
    $.ajax({
        type: 'post',
        url: BASE_URL+"/add-product-attribute",
        data:{ 'item': attributeId},
        dataType: "json",
        success: function (response) {
            if(response.status=='success')
            {
                $('body').find('.attached-container').html(response.html);
            }
        }
    });
}

function redirctTo(page) {
    setTimeout(function(){
       window.location.href =BASE_URL+page;
    }, 2000);
}
function  messageBoxResponse(messageType, messageText) {  



}
$(function() {
    $(document).on("change",".uploadFile", function()
    {
            var uploadFile = $(this);
            var files = !!this.files ? this.files : [];
            if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
    
            if (/^image/.test( files[0].type)){ // only image file
                var reader = new FileReader(); // instance of the FileReader
                reader.readAsDataURL(files[0]); // read the local file
    
                reader.onloadend = function(){ // set image data as background of div
                    //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
    uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
                }
            }
    
    });
});
function allertForSuccess(title,message,redirct_to){
   Swal.fire(
        {
            title: title,
            text: message,
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#556ee6',
        }
    ).then(function () {
        redirctTo(redirct_to);
    });   
    return true; 
}

function openComponentModel(containerId, heading, component, obj) {
    if (typeof(obj) != "undefined")
        $(obj).addClass('disabled isDisabled');
    if (typeof(containerId) === 'undefined' || containerId === '') {
        containerId = 'confirm_common_popup_modal';

    }
    $.ajax({
        type: "POST",
        url: BASE_URL + '/model-create',
        data: {
            "container_id": containerId,
            'heading': heading,
            'component': component,

        },
        dataType: "json",
        cache:false,
        success: function(data) {
            /*If Modal Div not defined*/
            if ($('#' + containerId + '_mp').length == 0) {
                $("#confirm_popup_modals_container").append('<div id="' + containerId + '_mp"></div>');
            }
            /*Put Modal HTML in Modal Placeholder*/
            $('#' + containerId + '_mp').html(data.html);
            /*Show Modal*/
            $('#' + containerId).modal('show');
            if (typeof(obj) != "undefined")
                $(obj).removeClass('disabled isDisabled');
            
        }
    });
}
function getSubRole(obj,ev) { 
    ev.preventDefault();
    if($(obj).val()!=2)
    {
        $('body').find('#customer-ajax-type').html('');
        return false;
    }    
    $.ajax({
        type: "GET",
        url: BASE_URL + '/get_customer_type',
        dataType: "json",
        cache:false,
        success: function(data) {
           $('body').find('#customer-ajax-type').html(data.html);
            
        }
    });
}
function loadCustomerType(type) {
    $.ajax({
        type: "GET",
        url: BASE_URL + '/get_customer_type?type='+type,
        dataType: "json",
        cache:false,
        success: function(data) {
           $('body').find('#customer-ajax-type').html(data.html);
            
        }
    });
}

function changeBulkAction(obj,eve) {
    eve.preventDefault();
    var action= $(obj).closest('.row').find(".bulk-action").val();
    if(action=='-1')
    {
        allertShow('warning','Please select any bulk action!.');  
        return true; 
    }
    var items=[];
    var index=0;
    $('.tr-checkbox').each(function () {  
        if($(this).is(":checked"))
        {
            items[index]=$(this).val();
            index++;
        }
    })
    if(items.length>0)
    {
    $.ajax({
        type: "POST",
        url:dafult_bulk_url,
        data:{
            items:items,
            action:action

        },
        dataType: "json",
        success: function (response) {
            allertShow(response.status,response.message);
            redirctTo(response.redirct_to);
        }
    });
    }
    else
    {
        allertShow('warning','Please select someone from record.');
    }
  }
  function setFilter(obj,eve,tableId) { 
    eve.preventDefault();
    var filter='';
    var prefix='?';
    $('body').find('#'+tableId).html(loaderSuccess);
    if($('.date-filter').val())
    {
        prefix='?';
        filter+=prefix+'date='+$('.date-filter').val();
        prefix='&';
    }
    if($('.customers-select').val())
    {
        filter+=prefix+'customer='+$('.customers-select').val();
        prefix='&';
    }
    if($('.shipping-filter').val())
    {
        filter+=prefix+'shipping='+$('.shipping-filter').val();
        prefix='&';
    }
    
    if($('.key-find').val())
    {
        filter+=prefix+'key='+$('.key-find').val();
        prefix='&';
    }
    console.log($('.key-find').val());
    if(filter=='')
    return false;
    urlSearch=dafult_page_url+filter;
    $.ajax({
        type: "get",
        url:urlSearch,
        dataType: "json",
        success: function (response) {
            $('body').find('#'+tableId).html(response.html);
        }
    });
    
   }
   
   function addTrackInfo(obj,e,orderId,page=null) {  
       e.preventDefault();  
        var status=''; 
        var btnHtml=$(obj).closest('.tree-box-b').html();
        $(obj).closest('.tree-box-b').html(loaderSuccess);
        if($('input[name="shipped"]').is(":checked"))
        status='shipped';
        var data={
            order_id: orderId,
            tracking_no: $('body').find('.tracking-number').val(),
            tracking_site: $('body').find('.tracking-provider').val(),
            date: $('body').find('.traking-date').val(),
            track: $('body').find('.tracking-provider').val(),
            status: status,
            page:page,
        };
        $.ajax({
            type: 'post',
            url: BASE_URL+'/tracking-post',
            data: data,
            datatype:'json',
            success: function (response) {
                if(response.status=='success')
                {
                    allertForSuccess('Success',response.message,response.redrict_to);
            
                }
                $(obj).closest('.tree-box-b').html(btnHtml);
            },
            cache: false,
        });
    }
    
    function deleteTrackNo(obj,e,orderId,trackId) {  
        e.preventDefault();  
         var data={
            order_id: orderId,
            trackid:trackId,
            
         };
         $.ajax({
             type: 'post',
             url: BASE_URL+'/tracking-delete',
             data: data,
             datatype:'json',
             success: function (response) {
                 if(response.status=='success')
                {
                    $(obj).closest('.darker').remove();
                     allertForSuccess('Success',response.message,response.redrict_to);
                }
             },
             cache: false,
         });
     }
     function deleteInvoice(obj,e,orderId) {  
        e.preventDefault();  
         var data={
            order_id: orderId,
        };
         $.ajax({
             type: 'post',
             url: BASE_URL+'/delete-invoice',
             data: data,
             datatype:'json',
             success: function (response) {
                 if(response.status=='success')
                 {
                     allertForSuccess('Success',response.message,response.redrict_to);
             
                 }
             },
             cache: false,
         });
     }
    function createNewInvoice(obj,e,orderId) {
        e.preventDefault();  
         var data={
            order_id: orderId,
        };
        $.ajax({
            type: 'post',
            url: BASE_URL+'/save-invioce',
            data: data,
            datatype:'json',
            success: function (response) {
                if(response.status=='success')
                {
                    allertForSuccess('Success',response.message,response.redrict_to);
            
                }
            },
            cache: false,
        });

    }
    function sendInvoice(obj,e,orderId) {
        e.preventDefault();  
         var data={
            order_id: orderId,
        };
        $.ajax({
            type: 'post',
            url: BASE_URL+'/send-invoice',
            data: data,
            datatype:'json',
            success: function (response) {
                if(response.status=='success')
                {
                    allertForSuccess('Success',response.message,response.redrict_to);
            
                }
            },
            cache: false,
        });

    }
    function view_details(obj,e,customerId,order_id) {
        e.preventDefault();
        if (typeof(obj) != "undefined")
            $(obj).addClass('disabled isDisabled');
        containerId = 'confirm_common_popup_modal';
        var data={
            "container_id": containerId,
            customer: customerId,
            order_id:order_id,
        };
        $.ajax({
            type: 'post',
            url: BASE_URL+'/view-profile',
            data: data,
            datatype:'json',
            success: function(data) {
                /*If Modal Div not defined*/
                if ($('#' + containerId + '_mp').length == 0) {
                    $("#confirm_popup_modals_container").append('<div id="' + containerId + '_mp"></div>');
                }
                /*Put Modal HTML in Modal Placeholder*/
                $('#' + containerId + '_mp').html(data.html);
                /*Show Modal*/
                $('#' + containerId).modal('show');
                if (typeof(obj) != "undefined")
                    $(obj).removeClass('disabled isDisabled');
                
            }
        });
    }    
    function openComponentModel(containerId, heading, component, obj) {
        if (typeof(obj) != "undefined")
            $(obj).addClass('disabled isDisabled');
        if (typeof(containerId) === 'undefined' || containerId === '') {
            containerId = 'confirm_common_popup_modal';
    
        }
        $.ajax({
            type: "POST",
            url: BASE_URL + '/model-create',
            data: {
                "container_id": containerId,
                'heading': heading,
                'component': component,
    
            },
            dataType: "json",
            cache:false,
            success: function(data) {
                /*If Modal Div not defined*/
                if ($('#' + containerId + '_mp').length == 0) {
                    $("#confirm_popup_modals_container").append('<div id="' + containerId + '_mp"></div>');
                }
                /*Put Modal HTML in Modal Placeholder*/
                $('#' + containerId + '_mp').html(data.html);
                /*Show Modal*/
                $('#' + containerId).modal('show');
                if (typeof(obj) != "undefined")
                    $(obj).removeClass('disabled isDisabled');
                
            }
        });
    }
    // function form_active_change(obj,ev,form_id) { 
    //     var boxid =$(obj).removeAttr('href');
    //     var box = $('body').find(boxid);
    //     box.find('form').attr('id',form_id);
    //  }
    function changeView(obj,ev) {
        ev.preventDefault();
        $(obj).closest('.tab-pane').find('.preview-page').toggle();
        $(obj).closest('.tab-pane').find('.edit-page').toggle();
        if($(obj).hasClass('edit'))
        {
            $(obj).addClass('preview').removeClass('edit');
            $(obj).find('i').removeClass('bx-edit-alt').addClass('bx-show-alt');
        }
        else
        {
            $(obj).addClass('edit').removeClass('preview');
            $(obj).find('i').addClass('bx-edit-alt').removeClass('bx-show-alt');

        }

    }

    function addMoreMeta(obj) {
        $.ajax({
            type: 'get',
            url: BASE_URL+'/meta-data-item',
            dataType: "json",
            success: function (response) {
                if(response.status=='success')
                {
                    
                   
                  
                    $(obj).closest('.card').find('.accordion-body').append(response.html);
                    var boxes = $(obj).closest('.card').find('.meta-detail');
                    $.each(boxes,function () {
                        var delBtn = $(this).find('.button-items');
                        if(delBtn.length == 1)
                        {
                            console.log('ok');
                        }
                        else
                        {
                            $(this).append(removeBtn);
                        }
                    })
                }
            }
        });
        

    }
    function removeMeta(obj,ev) {
        ev.preventDefault();
        
        var boxes = $(obj).closest('.card').find('.meta-detail');
        
        console.log(boxes);
        if(boxes.length==2)
        {
            box = $(obj).closest('.meta-detail').prev();
            box.find('.button-items').remove();
        }
        $(obj).closest('.meta-detail').remove();

    } 
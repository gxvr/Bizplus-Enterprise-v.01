$(function () {

    var $wrapper = $('.biz-setting'),
        $allTabs = $wrapper.find('.tabs-content > form'),
        $tabMenu = $wrapper.find('.form-links a ');
    $
    $allTabs.not(':first-of-type').hide();
    $tabMenu.filter(':first-of-type').find(':first').width('100%')

    $tabMenu.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });

    $allTabs.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });

    $tabMenu.on('click', function () {

        var dataTab = $(this).data('tab'),
            $getWrapper = $(this).closest($wrapper);

        $getWrapper.find($tabMenu).removeClass('tab-active');
        $(this).addClass('tab-active');


        $getWrapper.find($allTabs).hide();
        $getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').show();
    });



});

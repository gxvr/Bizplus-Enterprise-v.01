// For clicking/highlight on the left sidebar
$('.dashboard-item[data-dashboard=item1]').addClass('active');

$('.container .menu .dashboard-item').mousedown(function () {
    if ($(this).hasClass('.active')) {
        return false;
    } else {
        var itemName = $(this).find('itemName').text();
        $('.container .menu .dashboard-item').removeClass('active');
        $(this).addClass('active');
    }
});


document.querySelectorAll('.onboarding-card__arrow').forEach(function (arrow) {
    var target = document.querySelector(arrow.dataset.target);
    arrow.addEventListener('click', function (e) {
        document.querySelector('.visible-card').classList.remove('visible-card');
        target.classList.add('visible-card');
    }, false);
});


$(".remove").click(function () {
    $(".container").removeClass("blur");
    $(".onboard").remove(".onboard");
    $
});


$(function () {
    $('#menu a').click(function () {
        $('#menu a').removeClass('active-tab');
        $(this).addClass('active-tab');
        $('#partial-title').text($(this).text());
    });
});



// Tabs
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" t-click", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " t-click";
}

$(".tooltipped").tooltip();

//toggle checkbox for all and display delete button
function toggle(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var btn = document.getElementById("dl-icon");
    var checkBox = document.getElementById("chk-all");

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }

    if (checkBox.checked == true) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

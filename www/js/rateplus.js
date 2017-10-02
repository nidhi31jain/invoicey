/* This below code refer to index.html only*/
/*
pageName : School/College/University
*/
var path ='';
function loadPage(pageName)
{
    $("body").load(path + "pages/"+pageName+".html")
}

/* SEARCH START HERE ###################################################### */


//$("#searchResultTable td")

function searchSchool()
{
    if ($("#searchString").val())
    {
        $("#searchResultTable tr").remove();
        var tableRows = "";
        var inputStringUpperCase = $("#searchString").val().toUpperCase();
        var inputStringWithoutSpace =  inputStringUpperCase.replace(/\s/g, "");
        var inputValue = inputStringWithoutSpace;
        var ct = 0
        $.each(schooldata.schools, function(i, v)
        {
            var postCodeFile = (v.Postcode).replace(/\s/g, "");
            if (postCodeFile.search(new RegExp(inputValue)) != -1)
            {
                ct++;
                tableRows+= "<tr><td id='test1' onclick=loadPage('GuestDetails')>"+v.SchoolName +", "+v.Postcode+"</td></tr>";
                return;
            }
        });
         $("body").append("There are "+ct+" result(s)");
         $("#searchResultTable").append(tableRows);
    return false
    }
}


function searchCollege()
{
    if ($("#searchString").val())
    {
        $("#searchResultTable tr").remove();
        var tableRows = "";
        var inputStringUpperCase = $("#searchString").val().toUpperCase();
        var inputStringWithoutSpace =  inputStringUpperCase.replace(/\s/g, "");
        var inputValue = inputStringWithoutSpace;
        var ct = 0
        $.each(collegedata.colleges, function(i, v)
        {
            var postCodeFile = (v.Postcode).replace(/\s/g, "");
            if (postCodeFile.search(new RegExp(inputValue)) != -1)
            {
                ct++;
                tableRows+= "<tr><td onclick=loadPage('GuestDetails')>"+v.CollegeName +", "+v.Town+", "+v.Postcode+"</td></tr>";
                return;
            }
        });
         $("body").append("There are "+ct+" result(s)");
         $("#searchResultTable").append(tableRows);
    return false
    }
}


function searchUniversity()
{
    if ($("#searchString").val())
    {
        $("#searchResultTable tr").remove();
        var tableRows = "";
        var inputStringUpperCase = $("#searchString").val().toUpperCase();
        var inputStringWithoutSpace =  inputStringUpperCase.replace(/\s/g, "");
        var inputValue = inputStringWithoutSpace;

        var ct = 0
        $.each(universitydata.university, function(i, v)
        {
            var postCodeFile = (v.Postcode).replace(/\s/g, "");
            if (postCodeFile.search(new RegExp(inputValue)) != -1)
            {
                ct++;
                tableRows+= "<tr><td onclick=loadPage('GuestDetails')>"+v.UniversityName +", "+v.Town+", "+v.Postcode+"</td></tr>";
                return;
            }
        });
         $("body").append("There are "+ct+" result(s)");
         $("#searchResultTable").append(tableRows);
    return false
    }
}
/* SEARCH END HERE ###################################################### */

$(window).load(function()
{
    centerContent();
});

$(window).resize(function()
{
    centerContent();
});

function centerContent()
{
    var container = $('#container');
    var content = $('#content');
    content.css("left", (container.width()-content.width())/2);
    content.css("top", (container.height()-content.height())/2);
}

var seconds = 5; // seconds for HTML
var foo; // variable for clearInterval() function

function redirect()
{
    $("body").load("index.html");
    //document.location.href = 'http://google.com';
}

function updateSecs()
{
    document.getElementById("seconds").innerHTML = seconds;
    seconds--;
    if (seconds == -1)
    {
        clearInterval(foo);
        redirect()
    }
}

function countdownTimer()
{
    foo = setInterval(function ()
    {
        updateSecs()
    }, 1000);
}

countdownTimer();

function loadIndex()
{
    $("body").load(path + "index.html", function()
    {
        $.getScript(path + "js/index.js", function()
        {
            if (currentPage.init)
            {
               currentPage.init();
            }
        });
    });
}

function loadPage(pageName)
{
    if(pageName == 'index')
    {
        $("body").load("index.html")
    }
    else
    {
        $("body").load("pages/"+pageName+".html")
    }
}

$(function()
        {
            $('#addMore2').on('click', function()
            {
                var data = $("#tb2 tr:eq(1)").clone(true).appendTo("#tb2");
                data.find("input").val('');
                });
                $(document).on('click', '.remove', function()
                {
                    var trIndex = $(this).closest("tr").index();
                    if (trIndex > 1)
                    {
                        $(this).closest("tr").remove();
                    }
                    else
                    {

                    }
            });
        });


        function calculateSum()
        {
            var sum = 0;
            //iterate through each textboxes and add the values
            $(".price").each(function ()
            {
                if (!isNaN(this.value) && this.value.length != 0) {
                    sum += parseFloat(this.value);
                }

            });
            $("#sum").html(sum.toFixed(2));
        }





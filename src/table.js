$(document).ready(function () {
    fnAdjustTable();
});

fnAdjustTable = function () {

    var colCount = $('#firstTr>td').length; 

    var m = 0;
    var n = 0;
    var brow = 'mozilla';

    jQuery.each(jQuery.browser, function (i, val) {
        if (val == true) {
            brow = i.toString();
        }
    });

    $('.tableHeader').each(function (i) {
        if (m < colCount) {

           
            if (brow == 'msie') {
                $('#firstTd').css("width", $('.tableFirstCol').width());
                $(this).css('width', $('#table_div td:eq(' + m + ')').width() - 2);
            }
            else if (brow == 'safari') {
                $('#firstTd').css("width", $('.tableFirstCol').width());
                $(this).css('width', $('#table_div td:eq(' + m + ')').width());
            }
            else {
                $('#firstTd').css("width", $('.tableFirstCol').width());
                $(this).css('width', $('#table_div td:eq(' + m + ')').innerWidth());
            }
        }
        m++;
    });

    $('.tableFirstCol').each(function (i) {
       
        if (brow == 'msie') {
            $(this).css('height', $('#table_div td:eq(' + colCount * n + ')').innerHeight() - 2);
        }
        else {
            $(this).css('height', $('#table_div td:eq(' + colCount * n + ')').height());
        }
        n++;
    });

};


fnScroll = function () {
    $('#divHeader').scrollLeft($('#table_div').scrollLeft());
    $('#firstcol').scrollTop($('#table_div').scrollTop());
};

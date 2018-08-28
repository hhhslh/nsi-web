
//高级搜索框内容显示
$(function(){
    $(':input').labelauty();
    $('#advanceSearch,#closeAdvanceSearch').click(function () {
        $('#AdvancedSearchID').toggle(500)
    })
});


//查看更多
$('.clickForMore').click(function () {
    $('.moreArea').css('display','block')
    $('.clickForSlidedown').css('display','block')
    $('.baseArea').css('display','none')
    $(this).css('display','none')
    $('#AdvanceResetID').trigger('click')
})

$('.clickForSlidedown').click(function () {
    $('.moreArea').css('display','none')
    $('.clickForMore').css('display','block')
    $('.baseArea').css('display','block')
    $(this).css('display','none')
    $('#AdvanceResetID').trigger('click')
})


//年份滑块选择
$('.form_datetime').datetimepicker({
    //language:  'fr',
    format: "yyyy",
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 4,
    minView: 4,
    forceParse: 0,
    showMeridian: 1
});

$('#searchContent').keydown(function(e) {
    var curKey = e.which;
    var searchVal = $('#searchContent').val()
    if (curKey == 13) {
        window.location.href = './search.html?whereFrom=' + searchVal
    }
})


var searchTips = document.getElementById('search_tips')
searchTips.addEventListener("click", function(e) {
    // e.stopPropagation()
    var target = e.target
    $('#searchContent').val(target.innerHTML)
    // window.location.href = './search.html?whereFrom=' + target.innerHTML
})


//搜索提示

$('#searchContent').on('input propertychange', function(e) {
        // e.stopPropagation()
        $('#search_tips').html('')
        var searchVal = $(this).val()
        $.ajax({
            type: 'get',
            url: changeUrl.address + '/school/suggest_search.do',
            data: {
                keyword: searchVal
            },
            success: function(msg) {
                if (msg.data.length !== 0) {
                    $('#search_tips').removeClass('hide')
                    for (var i = 0; i < msg.data.length; i++) {
                        $('#search_tips').append(
                            '<li>' + msg.data[i] + '</li>'
                        )
                    }
                } else {
                    $('#search_tips').addClass('hide')
                }

            },
            error: function() {
                alert('服务器繁忙，请稍后再试~')
            }
        })
    })
    //获取焦点(如果之前输入了值，那么就显示提示)
$('#searchContent').focus(function(event) {
    // event.stopPropagation()
    $('#search_tips').html('')
    var searchVal = $(this).val()
    if (searchVal !== '') {
        $.ajax({
            type: 'get',
            url: changeUrl.address + '/school/suggest_search.do',
            data: {
                keyword: searchVal
            },
            success: function(msg) {
                if (msg.data.length !== 0) {
                    $('#search_tips').removeClass('hide')
                    for (var i = 0; i < msg.data.length; i++) {
                        $('#search_tips').append(
                            '<li>' + msg.data[i] + '</li>'
                        )
                    }
                } else {
                    $('#search_tips').addClass('hide')
                }

            },
            error: function() {
                alert('服务器繁忙，请稍后再试~')
            }
        })
    }
})

//失去焦点
$('#searchContent').blur(function() {
    setTimeout(function() {
        $('#search_tips').addClass('hide')
    }, 300)
})




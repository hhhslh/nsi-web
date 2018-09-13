// 初始加载阻止点击
// function initPreventNext() {
//     $('a[href="#tab02"]').on('show.bs.tab', function(e) {
//         if ($('.initUse').hasClass('initNoUse')) {
//             e.preventDefault();
//         }
//     });
// }
// initPreventNext();
$(".upload").click(function(){
    $(".picBoxBg").css('display','block')
})
var checkMailResult = null;
var nameCheckResult = null;
var instutionCheckResult = null;
var jobCheckResult = null;
var telCheckResult = null;
var pwdCheckResult = null;
var pwdSameCheckResult = null;
var slideVerifyResult = null;
var classifyCheckResult = null;

//邮箱校验
function mailCheck() {
    // console.log(111)
    // var checkMailResult = null
    var pattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
    var emailValue = $("#EmailID").val();
    if (pattern.test(emailValue) == true) {
        $('#MailFormErr').addClass('hide');
        $("#MailDivID").removeClass("has-error");
        $.ajax({
            url: changeUrl.address + "/User_api?whereFrom=checkMail",
            type: 'post',
            dataType: 'jsonp',
            jsonp:   "Callback",
            async: true,
            data: { checkMail: emailValue },
            success: function(msg) {
                console.log(msg)
                if (msg.msg < 0) {
                    // 1453485414@qq.com
                    // alert("邮箱已注册过"+msg);
                    $("#MailDivID").addClass("has-error");
                    $("#mailRegisterErr").removeClass("hide");
                    $("#MailSpanID").show(300);
                } else {
                    $("#MailDivID").removeClass("has-error");
                    $("#mailRegisterErr").addClass("hide");
                    $("#MailSpanID").hide(300);
                    checkMailResult = true;
                    return checkMailResult;
                }
            }
        });
    } else {
        $('#MailFormErr').removeClass('hide')
        $("#MailDivID").addClass("has-error");
        checkMailResult = false
        return checkMailResult;
    }
};
//姓名验证
function nameCheck() {
    // var nameCheckResult = null;
    var nameValue = $('#NameID').val()
    if (nameValue != '') {
        $('#nameForm').removeClass('has-error')
        $('#nameErr').addClass('hide')
        nameCheckResult = true;
        return nameCheckResult;
    } else {
        $('#nameForm').addClass('has-error')
        $('#nameErr').removeClass('hide')
        nameCheckResult = false
        return nameCheckResult;
    }
}
//机构验证
function instutionCheck() {
    // var instutionCheckResult = null;
    var instutionValue = $('#companyID').val()
    if (instutionValue != '') {
        $('#instutionForm').removeClass('has-error')
        $('#instutionErr').addClass('hide')
        instutionCheckResult = true;
        return instutionCheckResult;
    } else {
        $('#instutionForm').addClass('has-error')
        $('#instutionErr').removeClass('hide')
        instutionCheckResult = false
        return instutionCheckResult;
    }
}
//职位验证
function jobCheck() {
    // var jobCheckResult = null;
    var jobValue = $('#positionID').val()
    if (jobValue != '') {
        $('#jobForm').removeClass('has-error')
        $('#jobErr').addClass('hide')
        jobCheckResult = true;
        return jobCheckResult;
    } else {
        $('#jobForm').addClass('has-error')
        $('#jobErr').removeClass('hide')
        jobCheckResult = false
        return jobCheckResult;
    }
}
//输入框禁止输入
// $("#classifyID").attr("readonly", true);
$("#classifyID").attr("disabled", true);

//分类验证
function classifyCheck() {
    var classifyValue = $('#classifyID').val()
    if (classifyValue != '') {
        $('#jobClassify').removeClass('has-error')
        $('#classifyErr').addClass('hide')
        classifyCheckResult = true;
        return classifyCheckResult;
    } else {
        // $("#classifyID").attr("disabled", false);
        $('#jobClassify').addClass('has-error')
        $('#classifyErr').removeClass('hide')
        classifyCheckResult = false
        return classifyCheckResult;
    }
}
function Insert02(str) {
    var obj = document.getElementById('classifyID');
    if (document.selection) {
        var sel = document.selection.createRange();
        document.selection.empty();
        sel.text = str;
    } else {
        var prefix, main, suffix;
        // prefix = obj.value.substring(0, obj.selectionStart);
        // suffix = obj.value.substring(obj.selectionEnd);
        // var main = obj.value.substring(obj.selectionStart, obj.selectionEnd);
        obj.value = str ;
    }
}
$('#internationSchool').click(function(){
    $(this).toggleClass("change")
    $(".company").toggleClass("change2").removeClass("change3")
    $(".item2").toggle();
})
$(".company").click(function(){
    $("#internationSchool").removeClass("change")
    $(this).addClass("change3").siblings().removeClass('change3').removeClass("change2")
    $(".item2").hide(); 
})
$(".back input").click(function(){
    $("#internationSchool").removeClass("change")
    $(".company").removeClass("change2")
    $(".item2").hide();
})

//验证手机号
function telCheck() {
    // var telCheckResult = null;
    var telPattern = /^1[34578]\d{9}$/
    var phoneValue = $('#phoneID').val()
    if (telPattern.test(phoneValue)) {
        $('#telForm').removeClass('has-error')
        $('#telErr').addClass('hide')
        telCheckResult = true;
        return telCheckResult;
    } else {
        $('#telForm').addClass('has-error')
        $('#telErr').removeClass('hide') 
        telCheckResult = false
        return telCheckResult;
    }
}

//验证密码（至少为6位）
function pwdCheck() {
    // var pwdCheckResult = null;
    var len = $('#PasswdID01').val().length
    if (len >= 6) {
        $('#pwdForm01').removeClass('has-error')
        $('#pwdErr01').addClass('hide')
        pwdCheckResult = true;
        return pwdCheckResult;
    } else {
        $('#pwdForm01').addClass('has-error')
        $('#pwdErr01').removeClass('hide')
        pwdCheckResult = false
        return pwdCheckResult;
    }
}

//验证重复验证
function pwdSameCheck() {
    // var pwdSameCheckResult = null;
    var pwdValue01 = $('#PasswdID01').val()
    var pwdValue02 = $('#PasswdID02').val()

    if (pwdValue01 == pwdValue02) {
        $('#pwdForm02').removeClass('has-error')
        $('#pwdErr02').addClass('hide')
        pwdSameCheckResult = true;
        return pwdSameCheckResult;
    } else {
        $('#pwdForm02').addClass('has-error')
        $('#pwdErr02').removeClass('hide')
        pwdSameCheckResult = false
        return pwdSameCheckResult;
    }
}
$(".headImg img").attr('src','https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-user/samplePic/eg04.png')
//第一个下一步
function nextStep01(){
    var emailValue = $("#EmailID").val();
    var nameValue = $('#NameID').val();
    var organizationValue = $('#companyID').val();
    var jobValue = $('#positionID').val();
    var phoneValue = $('#phoneID').val();
    var pwdValue = $('#PasswdID01').val();
    var typeValue = $('#classifyID').val()
    var portraitValue = $(".headImg img").attr('src')
    $.ajax({
        type: "post",
        data:{
            'username':emailValue,
            'password':pwdValue,
            'userTurename':nameValue,
            'userOrganization':organizationValue,
            'userPosition':jobValue,
            'userPhone':phoneValue,
            'registerType':typeValue,
            'userPortrait': portraitValue
        },
        url: changeUrl.address + '/user/register.do',
        success:function(msg){

            console.log(msg)
            if (msg.code == 0) {
                window.location.href="../user/prov.html"
                // $('.initUse').removeClass('initNoUse')
                // initPreventNext();
                // $('#myTab li:eq(1) a').tab('show'); //自动跳到第二步
                // 禁用第一步
                /*$('#myTab li:eq(0)').addClass('disabled');
                $('a[href="#tab01"]').on('show.bs.tab', function(e) {
                    e.preventDefault();
                });*/
            } else {
                alert('系统错误，请等待管理员审核')
            }

        },
        error:function(){
            alert('系统错误，请等待管理员审核')
        }
    })
}

$('#submitFromID').click(function() {
    mailCheck()
    nameCheck()
    instutionCheck()
    jobCheck()
    telCheck()
    pwdCheck()
    pwdSameCheck()
    classifyCheck()
    if (checkMailResult == true && nameCheckResult == true && instutionCheckResult == true &&classifyCheckResult == true&& jobCheckResult == true && telCheckResult == true && pwdCheckResult == true && pwdSameCheckResult == true && slideVerifyResult == true) {
        $.each(hash, function(index, value) {
            var email = $('#EmailID').val()
            var suffix = email.split('@')[1]
            if (index == suffix) {
                console.log(index, value)
                // $('#toVerify').attr('href', value)
                localStorage.setItem("email_url", value);
            }
        })
        getEmail()
        nextStep01()
    }
})

//注册二，获取邮箱跳转链接
function getEmailurl(){
    var email_url = localStorage.getItem("email_url")
    $('#toVerify').attr('href', email_url)
}
//注册二，获取邮箱
function getEmail(){
    var getTrueEmail = window.localStorage
    getTrueEmail.email = $('#EmailID').val()
}

// window.localStorage.email = $('#EmailID').val()

var pattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/

//核实验证码
$("#prove").click(function(){  
    var code = $(".code").val()
    var trueEmail = localStorage["email"]
    if(code !== '' && code.length == 6){
        $.ajax({
            type:"post",
            data:{
                'Usermail':trueEmail,
                'VerifyCode':code
            },
            url:changeUrl.address + '/user/UsermailVerify.do',
            success: function(msg){
                if(msg.code == 0){
                    alert('验证成功！')
                    window.location.href="../user/login.html"
                }else{
                    alert('验证失败！')
                }
            },
            error: function(){
                alert('验证失败！')
            }
        })
    }else{
        alert('验证码错误！')
    }
})


//图形验证码
if($("#mpanel4").length>0){
    $('#mpanel4').slideVerify({
        type: 2, //类型
        vOffset: 5, //误差量，根据需求自行调整
        vSpace: 5, //间隔
        imgUrl: '../assets/img/outImg/',
        imgName: ['1.jpg', '2.jpg'],
        imgSize: {
            width: '362px',
            height: '150px',
        },
        blockSize: {
            width: '40px',
            height: '40px',
        },
        barSize: {
            width: '362px',
            height: '40px',
        },
        ready: function() {},
        success: function() {
            slideVerifyResult = true
            console.log('成功')
        },
        error: function() {
            //alert('验证失败！');
        }
    });
}


//邮箱跳转
var hash = {
    'qq.com': 'http://mail.qq.com',
    'gmail.com': 'http://mail.google.com',
    'sina.com': 'http://mail.sina.com.cn',
    '163.com': 'http://mail.163.com',
    '126.com': 'http://mail.126.com',
    'yeah.net': 'http://www.yeah.net/',
    'sohu.com': 'http://mail.sohu.com/',
    'tom.com': 'http://mail.tom.com/',
    'sogou.com': 'http://mail.sogou.com/',
    '139.com': 'http://mail.10086.cn/',
    'hotmail.com': 'http://www.hotmail.com',
    'live.com': 'http://login.live.com/',
    'live.cn': 'http://login.live.cn/',
    'live.com.cn': 'http://login.live.com.cn',
    '189.com': 'http://webmail16.189.cn/webmail/',
    'yahoo.com.cn': 'http://mail.cn.yahoo.com/',
    'yahoo.cn': 'http://mail.cn.yahoo.com/',
    'eyou.com': 'http://www.eyou.com/',
    '21cn.com': 'http://mail.21cn.com/',
    '188.com': 'http://www.188.com/',
    'foxmail.coom': 'http://www.foxmail.com'
};

$('#toVerify').on('click', function() {
    if ($(this).attr('href') == '') {
        alert('邮箱验证仅支持QQ邮箱、163邮箱、139邮箱等常见邮箱，请您登陆常见邮箱或手动登录其他邮箱！')
        return false;
    }
})


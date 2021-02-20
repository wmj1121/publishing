$('#allmenu').on('click', function(){
    $('#totalmenu').show();
});

$('#x').on('click', function(){
    $('#totalmenu').hide()
});

$('#banner li').hide();
$('#banner li').eq(0).show();

$('#right').on('click', function(){
    $('#banner li').eq(0).hide();
    $('#banner li').eq(1).show();
})
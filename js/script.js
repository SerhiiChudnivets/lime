$(function(){
    $('.wheel').height($('.wheel').width());

    $(window).resize(function(){
        $('.wheel').height($('.wheel').width());
    });
});
let params_wheel={
    sectors:6
}
dataset = []
dataReverse=[]
for (let i=0;i<params_wheel.sectors; i++){
    let dataset_item ={
        id:i+1,
        value: 100/params_wheel.sectors
    }
    dataset.push(dataset_item)
    dataReverse.push(i)
}
dataReverse = dataReverse.reverse();
console.log('data-reverse=',dataReverse);
var container = $('.container');
let sectors= 0-(360/params_wheel.sectors);
let template=``;
for (let i=0;i<dataset.length; i++){
    template+=`<div class="sector"  style=" transform: rotate(${sectors+=360/params_wheel.sectors}deg) skewY(${90+ 360/params_wheel.sectors}deg);"><span>${i}</span></div>`
}
container.html(template)
$("#wheel_btn").click(function(){
    transformWheel();
    })
$("#btn").click(function(){
    transformWheel();
    })
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function transformWheel() {
    $('.viktr__fedrch').addClass('show');
    $(".overlay").removeClass("show");
    var awesomeDiv = $('.wheel');
    $({rotation: 0}).animate({rotation: 0}, {
        duration: 1000,
        easing: 'linear',
        step: function () {
            persent=Math.floor(getRandomArbitrary(3600, 3960));
            awesomeDiv.css({transform: 'rotate(' +persent + 'deg)'});
            data =  $('#wheel').attr('data-rotation', persent);
        }

    });
setTimeout(function(){
        getData($('#wheel').attr('data-rotation'));
    }, 3000
)
}
function getData(persent) {
    let sector=Math.trunc((persent-3600)/(360/params_wheel.sectors));
    console.log(persent - 3600)
    console.log(sector);
getSector(sector);
    // let deg=$('#wheel').attr('data-rotation');
// console.log(deg);
}
function  getSector(sector){
    let number;
number = dataReverse[sector];
    console.log('n=',number);
    addWinnNumber(number)
}
function addWinnNumber(number) {
    $("#winn-number").html(number);
    $(".overlay").addClass("show");
}

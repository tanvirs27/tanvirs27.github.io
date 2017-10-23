/**
 * Created by rifat on 10/21/17.
 */
var text;
var baseNames = new Array('Tanzir',
    'Jargis Ahmed',
    'Shohan',
    'Abul Hasan Md Osama',
    'Jahid Raihan',
    'Md. Aminul Islam',
    'Rezwan Mahmud',
    'Mahir Ashhab',
    'Sayon',
    'Nowshad Asif',
    'Meem Arafat Manab',
    'Mehedi hasan',
    'Md. Rofiqul Islam',
    'N.S.M. Hasan al Banna',
    'Inzamam Toha',
    'Habibullah',
    'Md. Jahid Hasan',
    'Bodrudduja Chowdhury',
    'Toukir Ahmed',
    'Nafis Sazid',
    'Apu Kumar Chakroborti',
    'Uchchhwas Roy',
    'Md. Abdur Rouf',
    'Pritom Saha',
    'Abu Zafar Al Zahid',
    'Rumi',
    'Rubaiyat Ferdose Noman',
    'Golam Azrin',
    'Swasti Das',
    'Hashib Mahmud',
    'Bishal Dey',
    'Mahidul Islam Misbah',
    'Humayun');

//var baseNames= new Array('A','B');
var names;
var unsold=[];

function reset(){
    // re-enable go button
    setTimeout("$('#go').removeAttr('disabled')",11005);

    names = baseNames;

}


function randOrd(){
    return (Math.round(Math.random())-0.5);
}


// does the actual animation
function go(){

    if(names.length==0){
        names= unsold;
        unsold= [];
    }

    $("#varnote").hide();
    $('body').css({"overflow-y": "hidden"});
    $('#go').attr('disabled','disabled');
    $('#headline').slideUp();

    var count = 1;

    $("div").remove("#result1");
    //names = $("#namesbox").val();


    $("#values").show();
    $(".name").show();
    $("#popdown").hide();
    $("div").remove(".name");
    $("div").remove(".extra");
    $("#playback").html("");
    newtop = names.length * 200 * -1;
    //$('#values').css({top: -300});
    $('#values').css({top: + newtop});
    names.sort( randOrd );

    for(var i in names){
        if (names[i] == "" || typeof(names[i]) == undefined){
            count = count-1;
        } else {
            name = names[i];
            // name = "rifat";
            //console.log(name);
            $('#values').append('<div id=result'+count+' class=name>'+name+'</div>');
        }
        count = count+1;
    }

    for(var i in unsold){

        name = unsold[i];
        $('#values').append('<div class=name>'+name+'</div>');

        count = count+1;
    }

    text = $('#result1').text()
    $('#values').animate({top: '+176'},5000);

    // make it stand out
    setTimeout("standout(text)",5000);
    //setTimeout("$('#playback').hide('slow')",11005);
}

function standout(text){

    console.log(text);
    $('#result1').removeClass('name');
    $('.name').animate({opacity: .25});
    $('#result1').animate({height: '+=60px'});
    $('#result1').append("<div class='extra'><a class='small alert button' href='#' onClick='removevictim();'>Sold</a> <a class='small alert button' href='#' onClick='notSold();'>Unsold</a></div>");
    $('#go').removeAttr('disabled','disabled');
    $('#headline').text('Our Next Player is');
    $('#headline').slideDown();
}

function notSold() {
    unsold.push(text);
    console.log(unsold);

    var index= names.indexOf(text);

    console.log(names.length);
    if (index > -1) {

        names.splice(index, 1);
    }
    console.log(names.length);


    $('#result1').html("Unsold");
    $('#result1').fadeOut(1000, function(){
        $("div").remove("#result1");
    });
    $("div").remove(".name");
    $("div").remove(".extra");
    $('#headline').text('OK, done! Let\'s see who is next? Just click "GO!" button for next roll.');


}

function removevictim(){

    victim= text;
    //console.log('here');
    /*
    var nameupdated = "";

    for(var i in names){
        name = names[i];
        if (name == "" || name == text || typeof(name) == undefined){
            //do nothing
        }
        else{
            nameupdated = nameupdated + "\n" + name;
        }
    }
    */

    console.log(names.length);
    var index= names.indexOf(victim);

    console.log(victim+" "+index);
    if (index > -1) {

        names.splice(index, 1);
    }
    console.log(names.length);


    $('#result1').html("Sold");
    $('#result1').fadeOut(1000, function(){
        $("div").remove("#result1");
    });
    $("div").remove(".name");
    $("div").remove(".extra");
    $('#headline').text('OK, done! Let\'s see who is next? Just click "GO!" button for next roll.');
}

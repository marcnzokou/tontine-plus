import $ from 'jquery';

export const ScrollToHorizontal = (type, value) => {
    let margin = '-='+value;
    if(type === 'left') {
        margin = '+='+value;
    }
    $('#scroll-session').animate({
        marginLeft: margin
    }, 500);
};


export const ScrollToNav = (next) => {

    if(next){
        var widthMax = $('#scroll-session').css('width');
        var w = parseInt(widthMax) / 12;
        var marginLeft = $('#scroll-session').css('margin-left');
        var prev = ((parseInt(marginLeft)*-1) + w) / w;
        
        //if(prev < next) {
        var value = parseInt(marginLeft) + (prev - next) * w;
        var margin = value;

        $('#scroll-session').animate({
            marginLeft: margin
        }, 500);
    }
   
    
};
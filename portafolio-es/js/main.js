window.onload = function(){
    var barraCarga = document.getElementById('barra-carga');
    
    barraCarga.style.visibility = 'hidden';
    barraCarga.style.display = 'none';
}
$('document').ready(function(){
    const profesion = baffle(".profesion");
   profesion.set({
        characters: '♣☺☻6♦○8♣☺☻6♦○86☼ݨؙ☺6818☺ʋÑ1♠51',
        speed: 90 
    });
    profesion.start();
    profesion.reveal(3000);

    var boton = document.getElementById('boton');
        
    $('#tagline').t({
        beep:false,
        caret:'<span style="color:hotpink;">•</span>',
        typing:function(elm,chr){
        if(chr.match(/\-trigger/))
            $('#pow-txt').show().delay(500).fadeOut(0);
        }
    });

    $('#boton-arriba').click(function(){
        $('body, html').animate({
          scrollTop: '0px'
        }, 300);
      });
   
    $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
        $('#boton-arriba').slideDown(300);
      } else {
        $('#boton-arriba').slideUp(300);
      }
    });
});
$(document).ready(function () {
    
    var sec = 0;
    var csec = 0;
    var min = 0;
    var hrs = 0;
    var value = 0;
    

    $('input').change(function () {
        value = $('input').val();
        value = parseInt(value);
       
        console.log(typeof(value));
       
        if (value >= 0 && value <= 60) {
           
            $('.sec').text(value-1);
            $('.csec').text(99);
            
           csec = $('.csec').text();

            console.log(sec);
            console.log(csec);
            
           
        } else if (value > 60 && value < 3600) {
            
            min = Math.floor(value % 3600 / 60);
            sec = Math.floor(value % 3600 % 60);
            $('.min').text(min);
            $('.sec').text(sec-1);
            $('.csec').text(99);
            csec = $('.csec').text();
            sec = 60;
 
        
             //$('.sec').text(Math.floor(value % 3600 % 60));

        } else if(value >= 3600){
            hrs =  Math.floor(value / 3600);
            min = Math.floor(value % 3600 / 60);
            sec = Math.floor(value % 3600 % 60);
            $('.hrs').text(hrs);
            $('.min').text(min);
            $('.sec').text(sec-1);
            $('.csec').text(99);
            csec = $('.csec').text();
            min = 60;
            sec = 60;

            // $('.hrs').text( Math.floor(value / 3600));
           
            // min = Math.floor(value % 3600 / 60);
            // $('.min').text(min);
          
            // sec = Math.floor(value % 3600 % 60);
          
            // $('.sec').text(sec-1);
      

            // $('.csec').text(99);

             // $('.sec').text(Math.floor(value % 3600 % 60));
             //$('.min').text(Math.floor(value % 3600 / 60));
            //$('.min') = text(min-1);
            //$('.sec').text(sec-1);
          
        }
    }) 

    var second = 0;
    var counter = 0;
    var minute = 0;
    var hours = 0;
    var csecond = 0;
    var timer;

    $('.start').click(function () {
        
        // var counter = $('.csec').text();
        $('.start').html (' <button type="button">START</button>')
       
        counter = $('.csec').text();
        second = $('.sec').text();
        minute = $('.min').text();
        hours = $('.hrs').text();
        csecond = $('.csec').text()
        console.log('csecond:- ' + csecond);
        
        console.log('second:- ' + second);
        console.log( 'minute:- '+ minute);

       
         
      
    
        
     
        timer = setInterval(function () {
            counter--;
            if (counter > 0) {
            
                $('.csec').text(counter);

            }  else if (second > 0 ) {
                
                    $('.sec').text(second-1);
                    $('.csec').text(csec);
                    counter = $('.csec').text();
                    second = $('.sec').text();

                } else if(minute > 0) {
                    minute = $('.min').text();
                    $('.min').text(minute-1);
                    $('.sec').text(sec-1);
                    $('.csec').text(csec);
                    counter = $('.csec').text();
                    second = $('.sec').text();
                    minute = $('.min').text();
                    
                    
                   
                } else if(hours > 0){
                    hours = $('.hrs').text();
                    $('.hrs').text(hours-1);
                    $('.min').text(min-1);
                    $('.sec').text(sec-1);
                    $('.csec').text(csec);
                    counter = $('.csec').text();
                    second = $('.sec').text();
                    minute = $('.min').text();

                } else if(counter<=0){
                    clearInterval(counter)
                }
               
            },10);
        
        
    })

    $('.pause').click(function () { // Pauses the timer
       clearTimeout(timer);
    //    counter = counter;
       $('.start').html (' <button type="button">RESUME</button>')
       
        
    })


    $('.reset').click(function () {  //Resets the timer to 00:00:00:00
       counter  = 0;
       csecond = 0;
       second = 0;
       minute = 0;
       hours = 0;
       value = 0;
       $('.csec').text(counter);
       $('.sec').text(counter);
       $('.min').text(counter);
       $('.hrs').text(counter);
       clearInterval(counter);
       clearInterval(minute);
       clearInterval(second);
       $('.start').html (' <button type="button">START</button>')
       document.getElementById('start').disabled = false;
    })

    $('.stop').click(function(){
        $('.start').html (' <button type="button">RESTART</button>')
        // value = $('input').val();
        document.getElementById('start').disabled = false;
        console.log('value:- ' + value);
        clearInterval(timer)
        
 
     
       

    })


})

const main_contianer=document.getElementById('main_contianer');
const card=document.getElementById('card');
const toggle=document.getElementById('toggle');
const user_input=document.getElementById('user_input');
const keypad=document.getElementById('keypad');
const source=document.getElementById('source');
const buttons=document.querySelectorAll('button');

/* Style */
/* changing themes  section */

toggle.addEventListener('change',function(){
    /* First theme */

    if(toggle.value=='1'){
        /*main contianer for theme one*/
        main_contianer.classList.add('bg-VyDarkDesaturatedBlueM');
        main_contianer.classList.remove('bg-LightGray');
        main_contianer.classList.remove('bg-VeryDarkVioletM');
        /* card for theme one*/
        card.classList.add('text-white');
        card.classList.remove('text-LightYellow');
        card.classList.remove('text-VeryDarkGrayishYellow');
        /*toggle for theme one*/
        toggle.classList.add('slider-theme-1');
        toggle.classList.remove('slider-theme-2');
        toggle.classList.remove('slider-theme-3');
        /*user input for theme one*/
        user_input.classList.add('bg-VeryDarkDesaturatedBlueS');
        user_input.classList.remove('bg-VeryLightGray');
        user_input.classList.remove('bg-VeryDarkViolet');
        /*key pad for theme one*/
        keypad.classList.add('bg-VeryDarkDesaturatedBlueK', 'text-VeryDarkGrayishBlue');
        keypad.classList.remove('bg-GrayishRed');
        keypad.classList.remove('bg-VeryDarkVioletK');
        /*Source for theme one */
        source.classList.add('bg-VeryDarkDesaturatedBlueM' ,'text-GrayishOrange');
        source.classList.remove('bg-LightGray' ,'text-VeryDarkGrayishYellow');
        source.classList.remove('bg-VeryDarkVioletM');


        /*button for theme one*/
        buttons.forEach( function(element , index) { 
            if (index==3 || index==16){
                element.classList.add('border-DesaturatedDarkBlueS', 'bg-DesaturatedDarkBlue')
                element.classList.remove('border-VeryDarkCyan', 'bg-DarkModerateCyan')
                element.classList.remove('border-VividMagenta', 'bg-DarkViolet')
            }else if(index==17){
                element.classList.add('border-DarkRed', 'bg-Red')
                element.classList.remove('border-DarkOrange', 'bg-Orange')
                element.classList.remove('border-SoftCyan', 'bg-PureCyan','hover:text-black')
            }else{
                element.classList.add('border-GrayishOrange' ,'bg-LightGrayishOrange' ,'hover:bg-white')
                element.classList.remove('border-DarkGrayishOrange' ,'bg-LightGrayishYellow')
                element.classList.remove('border-DarkMagenta' ,'bg-VeryDarkViolet' ,'hover:brightness-150')
            }
        })
    /*Theme two */
    }else if (toggle.value=='2'){

        /*main contianer for theme two*/
        main_contianer.classList.remove('bg-VyDarkDesaturatedBlueM');
        main_contianer.classList.add('bg-LightGray');
        main_contianer.classList.remove('bg-VeryDarkVioletM');
        /* card for theme  two*/
        card.classList.remove('text-white');
        card.classList.remove('text-LightYellow');
        card.classList.add('text-VeryDarkGrayishYellow');
        /*toggle for theme two*/
        toggle.classList.remove('slider-theme-1');
        toggle.classList.add('slider-theme-2');
        toggle.classList.remove('slider-theme-3');
        /*user input for theme two*/
        user_input.classList.remove('bg-VeryDarkDesaturatedBlueS');
        user_input.classList.add('bg-VeryLightGray');
        user_input.classList.remove('bg-VeryDarkViolet');
        /*key pad for theme two*/
        keypad.classList.remove('bg-VeryDarkDesaturatedBlueK','text-VeryDarkGrayishBlue');
        keypad.classList.add('bg-GrayishRed');
        keypad.classList.remove('bg-VeryDarkVioletK');;
        /*Source for theme two */
        source.classList.remove('bg-VeryDarkDesaturatedBlueM' ,'text-GrayishOrange');
        source.classList.add('bg-LightGray' ,'text-VeryDarkGrayishYellow');
        source.classList.remove('bg-VeryDarkVioletM');

        /*button for theme two*/
        buttons.forEach(function(element ,index) {
            if (index==3 || index==16){
                element.classList.remove('border-DesaturatedDarkBlueS', 'bg-DesaturatedDarkBlue')
                element.classList.add('border-VeryDarkCyan', 'bg-DarkModerateCyan')
                element.classList.remove('border-VividMagenta', 'bg-DarkViolet')
            }else if(index==17){
                element.classList.remove('border-DarkRed', 'bg-Red')
                element.classList.add('border-DarkOrange', 'bg-Orange')
                element.classList.remove('border-SoftCyan', 'bg-PureCyan','hover:text-black')

            }else{
                element.classList.remove('border-GrayishOrange' ,'bg-LightGrayishOrange' )
                element.classList.add('border-DarkGrayishOrange' ,'bg-LightGrayishYellow','hover:bg-white')
                element.classList.remove('border-DarkMagenta' ,'bg-VeryDarkViolet' ,'hover:brightness-150')
            }
        })

    }
    /* Theme three */
    else if(toggle.value=='3'){
        /*main contianer for theme three*/
        main_contianer.classList.remove('bg-VyDarkDesaturatedBlueM');
        main_contianer.classList.remove('bg-LightGray');
        main_contianer.classList.add('bg-VeryDarkVioletM');
        /* card for theme three*/
        card.classList.remove('text-white');
        card.classList.remove('text-VeryDarkGrayishYellow');
        card.classList.add('text-LightYellow');
        /*toggle for theme  three*/
        toggle.classList.remove('slider-theme-1');
        toggle.classList.remove('slider-theme-2');
        toggle.classList.add('slider-theme-3');
        /*user input for theme three*/
        user_input.classList.remove('bg-VeryDarkDesaturatedBlueS');
        user_input.classList.remove('bg-VeryLightGray');
        user_input.classList.add('bg-VeryDarkViolet');
        /*key pad for theme three*/
        keypad.classList.remove('bg-VeryDarkDesaturatedBlueK','text-VeryDarkGrayishBlue');
        keypad.classList.remove('bg-GrayishRed');
        keypad.classList.add('bg-VeryDarkVioletK');
        /*Source for theme three */
        source.classList.remove('bg-VeryDarkDesaturatedBlueM');
        source.classList.remove('bg-LightGray' ,'text-VeryDarkGrayishYellow');
        source.classList.add('bg-VeryDarkVioletM','text-GrayishOrange');

        /*button for theme three*/
        buttons.forEach(function(element ,index) { 
            if (index==3 || index==16){
                element.classList.remove('border-DesaturatedDarkBlueS', 'bg-DesaturatedDarkBlue')
                element.classList.remove('border-VeryDarkCyan', 'bg-DarkModerateCyan')
                element.classList.add('border-VividMagenta', 'bg-DarkViolet')
            }else if(index==17){
                element.classList.remove('border-DarkRed', 'bg-Red')
                element.classList.remove('border-DarkOrange', 'bg-Orange')
                element.classList.add('border-SoftCyan', 'bg-PureCyan', 'hover:text-black')
            }else{
                
            element.classList.remove('border-GrayishOrange' ,'bg-LightGrayishOrange' ,'hover:bg-white')
            element.classList.remove('border-DarkGrayishOrange' ,'bg-LightGrayishYellow')
            element.classList.add('border-DarkMagenta' ,'bg-VeryDarkViolet' ,'hover:brightness-150')
            }
        })
    }

});
/* End changing themes */

/* opretion section */


buttons.forEach(function(element , index) {  

    if (element.value=='='){
        element.addEventListener('click',function(){
            if (user_input.value==''){
                user_input.value='No input';
            }else{
                user_input.value=eval(user_input.value);
            }
        })
    }

    else if(element.value=='reset'){
        element.addEventListener('click',function(){
            user_input.value='';
        })

    }
    else if(element.value=='delete'){
        element.addEventListener('click',function(){
            let i=String(user_input.value);
            user_input.value=i.substring(0,i.length-1);
        })

    }
    
    else {
    element.addEventListener('click',function(){
        user_input.value=user_input.value+element.value;
    })

    }

});

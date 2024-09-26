let result = document.getElementById('input');
let button = document.querySelectorAll("button");
let buttonArray = Array.from(button);
let string = '';
buttonArray.forEach(function(btn){
    btn.addEventListener('click',(event)=>{
        if(event.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            result.value = string;
        }
        else if(event.target.innerHTML == 'AC'){
            string = '';
            result.value = string;
        }else if (event.target.innerHTML == '='){
            string = eval(string);
            result.value = string;
        }
        else{
        string += event.target.innerHTML;
        result.value = string;
        }
    })
    
})

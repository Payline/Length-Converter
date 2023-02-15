var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;


input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;


    if(inputTypeValue === "m" && resultTypeValue==="m"){
        result.value = input.value; }
        
    else if(inputTypeValue === "m" && resultTypeValue==="cm"){
        result.value = Number(input.value) * 100; }

    else if(inputTypeValue === "m" && resultTypeValue==="in"){
        result.value = Number(input.value) * 39.370; }

    else if(inputTypeValue === "m" && resultTypeValue==="ft"){
        result.value = Number(input.value) * 3.2808; }

    else if(inputTypeValue === "m" && resultTypeValue==="mm"){
        result.value = Number(input.value) * 1000; }

    else if(inputTypeValue === "m" && resultTypeValue==="yd"){
        result.value = Number(input.value) * 1.0936; }
        
    else if(inputTypeValue === "m" && resultTypeValue==="km"){
        result.value = Number(input.value) * 0.001; }


        if(inputTypeValue === "cm" && resultTypeValue==="cm"){
            result.value = input.value; }
            
        else if(inputTypeValue === "cm" && resultTypeValue==="m"){
            result.value = Number(input.value) / 100; }
    
        else if(inputTypeValue === "cm" && resultTypeValue==="in"){
            result.value = Number(input.value) * 0.39370; }
    
        else if(inputTypeValue === "cm" && resultTypeValue==="ft"){
            result.value = Number(input.value) * 0.032808; }
    
        else if(inputTypeValue === "cm" && resultTypeValue==="mm"){
            result.value = Number(input.value) * 10; }
    
        else if(inputTypeValue === "cm" && resultTypeValue==="yd"){
            result.value = Number(input.value) * 0.010936; }
            
        else if(inputTypeValue === "cm" && resultTypeValue==="km"){
            result.value = Number(input.value) / 100000; }


            if(inputTypeValue === "in" && resultTypeValue==="in"){
                result.value = input.value; }
                
            else if(inputTypeValue === "in" && resultTypeValue==="cm"){
                result.value = Number(input.value) / 0.39370; }
        
            else if(inputTypeValue === "in" && resultTypeValue==="m"){
                result.value = Number(input.value) / 39.370; }
        
            else if(inputTypeValue === "in" && resultTypeValue==="ft"){
                result.value = Number(input.value) * 0.083333; }
        
            else if(inputTypeValue === "in" && resultTypeValue==="mm"){
                result.value = Number(input.value) * 914,4; }
        
            else if(inputTypeValue === "in" && resultTypeValue==="yd"){
                result.value = Number(input.value) * 0.027778; }
                
            else if(inputTypeValue === "in" && resultTypeValue==="km"){
                result.value = Number(input.value) / 39370; }


                if(inputTypeValue === "ft" && resultTypeValue==="ft"){
                    result.value = input.value; }
                    
                else if(inputTypeValue === "ft" && resultTypeValue==="cm"){
                    result.value = Number(input.value) / 0.032808; }
            
                else if(inputTypeValue === "ft" && resultTypeValue==="in"){
                    result.value = Number(input.value) * 12; }
            
                else if(inputTypeValue === "ft" && resultTypeValue==="m"){
                    result.value = Number(input.value) / 3.2808; }
            
                else if(inputTypeValue === "ft" && resultTypeValue==="mm"){
                    result.value = Number(input.value) * 304,8; }
            
                else if(inputTypeValue === "ft" && resultTypeValue==="yd"){
                    result.value = Number(input.value) * 0.33333; }
                    
                else if(inputTypeValue === "ft" && resultTypeValue==="km"){
                    result.value = Number(input.value) / 3280.8; }


                    if(inputTypeValue === "mm" && resultTypeValue==="mm"){
                        result.value = input.value; }
                        
                    else if(inputTypeValue === "mm" && resultTypeValue==="cm"){
                        result.value = Number(input.value) * 0.1; }
                
                    else if(inputTypeValue === "mm" && resultTypeValue==="in"){
                        result.value = Number(input.value) * 0.03937007874; }
                
                    else if(inputTypeValue === "mm" && resultTypeValue==="ft"){
                        result.value = Number(input.value) * 0.0032808399; }
                
                    else if(inputTypeValue === "mm" && resultTypeValue==="m"){
                        result.value = Number(input.value) * 0.001; }
                
                    else if(inputTypeValue === "mm" && resultTypeValue==="yd"){
                        result.value = Number(input.value) * 0.0010936133; }
                        
                    else if(inputTypeValue === "mm" && resultTypeValue==="km"){
                        result.value = Number(input.value) * 0.000001; }


                        if(inputTypeValue === "yd" && resultTypeValue==="yd"){
                            result.value = input.value; }
                            
                        else if(inputTypeValue === "yd" && resultTypeValue==="cm"){
                            result.value = Number(input.value) / 0.010936; }
                    
                        else if(inputTypeValue === "yd" && resultTypeValue==="in"){
                            result.value = Number(input.value) * 36; }
                    
                        else if(inputTypeValue === "yd" && resultTypeValue==="ft"){
                            result.value = Number(input.value) * 3; }
                    
                        else if(inputTypeValue === "yd" && resultTypeValue==="mm"){
                            result.value = Number(input.value) * 914.4; }
                    
                        else if(inputTypeValue === "yd" && resultTypeValue==="m"){
                            result.value = Number(input.value) / 1.0936; }
                            
                        else if(inputTypeValue === "yd" && resultTypeValue==="km"){
                            result.value = Number(input.value) / 1093.6; }


                            if(inputTypeValue === "km" && resultTypeValue==="km"){
                                result.value = input.value; }
                                
                            else if(inputTypeValue === "km" && resultTypeValue==="cm"){
                                result.value = Number(input.value) * 100000; }
                        
                            else if(inputTypeValue === "km" && resultTypeValue==="in"){
                                result.value = Number(input.value) * 39370; }
                        
                            else if(inputTypeValue === "km" && resultTypeValue==="ft"){
                                result.value = Number(input.value) * 3280.8; }
                        
                            else if(inputTypeValue === "km" && resultTypeValue==="mm"){
                                result.value = Number(input.value) / 1000000; }
                        
                            else if(inputTypeValue === "km" && resultTypeValue==="yd"){
                                result.value = Number(input.value) * 1093.6; }
                                
                            else if(inputTypeValue === "km" && resultTypeValue==="m"){
                                result.value = Number(input.value) * 1000; }

}

var mydata = JSON.parse(data);
alert(mydata[0].unit);
alert(mydata[0].value);
alert(mydata[1].unit);
alert(mydata[1].value);
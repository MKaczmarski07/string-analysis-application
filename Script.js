
window.onload=function(){


    let textArea = document.getElementById("input");
   
    textArea.addEventListener("input", onChange);
    
    function onChange(){
        const data = textArea.value;
        console.log(data);
        
        let sum=0;
        let multiplication=1;
        let aritmAverage;
        let geomAverage;
        let numberOfEven=0;
        let numberOfOdd=0;

        for(i=0;i<data.length;i++){

            if(!(data[i]=='0'
            ||data[i]=='1'
            ||data[i]=='2'
            ||data[i]=='3'
            ||data[i]=='4'
            ||data[i]=='5'
            ||data[i]=='6'
            ||data[i]=='7'
            ||data[i]=='8'
            ||data[i]=='9')){
                continue;
            }

            if(data[i]%2!=0){
                console.log("Odd number: " + data[i]);
                odd=parseInt(data[i],10);
                sum += odd;
                numberOfOdd += 1;
            }else{
                console.log("Even number: " + data[i]);
                even=parseInt(data[i],10);
                multiplication *= even;
                numberOfEven += 1;
            }
            
        }
        
        if(numberOfOdd!=0){
        aritmAverage = sum/numberOfOdd;
        aritmAverage=aritmAverage.toFixed(2);
        }

        if(numberOfEven!=0){
        geomAverage = Math.pow(multiplication,(1/numberOfEven));
        geomAverage=geomAverage.toFixed(2);
        }

        if(aritmAverage!=undefined){
            document.getElementById("aritmeticOutput").innerHTML = aritmAverage;
        }

        if(geomAverage!=undefined){
        document.getElementById("geometricOutput").innerHTML = geomAverage;
        }

    }



}

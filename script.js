//Abby Steckel, JavaScript Problems 11-20, submitted 10/24/17

function firstLast6(array){
    if (array[0]==6||array[array.length-1]==6){
        return true;
    }else{
        return false;
    }
}

function has23(array){
    for (var i=0; i<2; i++) {
        if (array[i] == 2 || array[i] == 3) {
            return true;
        }
    }
    return false;
}

function fix23(array){
    if(array[0]==2 && array [1]==3){
        array [1]=0;
        return array;
    }
    if (array[1]==2 && array [2]==3){
        array [2]=0;
        return array;
    }else{
        return array;
    }
}

function countYZ(string){
    var sum=0;
    for (var i=0; i<string.length; i++) {
        if (string[i] == " ") {
            if (string[i - 1] == "z" || string[i - 1] == "y" || string[i - 1] == "Z" || string[i - 1] == "Y")
                sum += 1;
            }
    }
    if (string[string.length-1]=="z"||string[string.length-1]=="y"||string[string.length-1]=="Z"||string[string.length-1]=="Y"){
        sum+=1;
    }
    return sum;
}

function endOther(str1,str2){
    var string1=str1.toLowerCase();
    var string2=str2.toLowerCase();
    if(string1.endsWith(string2)||string2.endsWith(string1)){
        return true;
    }else{
        return false;
    }
}

function starOut(str){
    var newStr="";
    for (var i=0; i<str.length; i++){
        if(str[i]!=="*" && str[i-1]!=="*" && str[i+1]!=="*"){
            newStr+=str[i];
        }
    }
    return newStr;
}

function getSandwich(str){
    var firstBread = str.indexOf("bread");
    var secondBread = str.lastIndexOf("bread");
    console.log(firstBread);
    console.log(secondBread);
    var filling = str.slice(firstBread+5,secondBread);
    var isSandwich = str.includes("bread");
    if(isSandwich==true){
        return filling;
    }else{
        return "";
    }
}

function canBalance(arr){
    var sum1=0;
    for (var i=0; i<arr.length-1; i++){
        sum1+=arr[i];
        var sum2=0;
        for (var j=i+1; j<arr.length; j++){
            sum2+=arr[j];
        }
        if(sum1==sum2){
            return true;
        }
    }
    return false;
}

function countClumps(arr){
    var count=0;
    for (var i=0; i<arr.length; i++){
        if(arr[i]==arr[i+1]&& arr[i]!=arr[i-1]){
            count+=1;
        }
    }
    return count;
}

function evenlySpaced(a,b,c){
    var large=Math.max(a,b,c);
    var small=Math.min(a,b,c);

    if(large==a&&small==b){
        var medium=c;
    }

    if(large==b&&small==c){
        var medium=a;
    }
    if(large==a&&small==c){
        var medium=b;
    }

    if(large==c&&small==a){
        var medium=b;
    }

    if(large==b&&small==a){
        var medium=c;
    }

    if(large==c&&small==b){
        var medium=a;
    }
    var diff1=large-medium;
    var diff2=medium-small;
    if(diff1==diff2){
        return true;
    }
    return false;
}


function tester(){

    //document.getElementById("output").innerHTML = starOut('ab**cd');
    document.getElementById("output").innerHTML = canBalance([1, 1, 1, 2, 1]);
    //document.getElementById("output2").innerHTML = nextOne(true, false);
    //test third method, etc
}



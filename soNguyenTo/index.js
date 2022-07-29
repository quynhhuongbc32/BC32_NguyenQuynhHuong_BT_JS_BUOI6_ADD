function SNT() {
    let nhapSo = document.getElementById("nhapSo").value * 1;

    let result = "";
    let i;
    let kt;
    
    for( i = 2; i <= nhapSo; i++){
         kt = kiemTraSoNT(i);
        if(kt){
            result += i + " ";
        }
    }
    document.getElementById("showInfoTotal").innerHTML = result;
}
function kiemTraSoNT(nhapSo){
    let SNT;
        SNT = true;
    for(let i = 2; i <= Math.sqrt(nhapSo); i++){
        if(nhapSo % i === 0){
            SNT = false;
            break;
        }
    }
    return SNT;
}
wanwan(){
let emucha = document.getElementById('memo').value;
console.log(emucha)
if (emucha == ''){
emu = 'ほへっ？';
}else{
emu = null;
};
document.getElementById('emu').innerHTML = emu ;
};

wanwan(){
let emucha = document.getElementById('memo').value;
console.log(emucha);
let emu;
if (emucha == ''){
emu = 'ほへっ？';
}else{
emu = null;
};
document.getElementById('emu').innerHTML = emu ;
};

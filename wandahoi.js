wanwan(){
let emucha = document.getElementById('memo').value;
let emu;
if (emucha == ''){
emu = 'ほへっ？';
}else{
emu = null;
};
document.getElementById('emu').innerHTML = emu ;
}

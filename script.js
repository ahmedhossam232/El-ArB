const btn_dark=document.querySelector('#dark');
btn_dark.addEventListener('click',() =>{
    
document.body.classList.toggle('dark-body');
document.querySelector('header').classList.toggle('dark-header');
document.querySelector('#Not').classList.toggle('dark-Not');
console.log(btn_dark.classList.value)
if(btn_dark.classList.value == 'bx bxs-moon'){
    btn_dark.classList.value =' bx bxs-sun'
}
else{
    btn_dark.classList.value =' bx bxs-moon'

}
})
document.querySelector('#nno').addEventListener('click',() =>{
    if (document.querySelector('#Not').style.display == 'block' ) {
        document.querySelector('#Not').style.display ='none'
    }
    else{
        document.querySelector('#Not').style.display='block'
        document.querySelector('#posts').onclick= () =>         document.querySelector('#Not').style.display='none'
        document.querySelector('#posts section').onclick= () =>         document.querySelector('#Not').style.display='none'
    }
})


// *

const btn_add =document.querySelector('#btn-add');
const inp_add =document.querySelector('#inp-add');
btn_add.addEventListener('click',() =>{
    if(inp_add.value == 'wtf'){
    const nav =document.querySelector('#Not #nav')
return false
    
nav.append(new_span)
}
if(inp_add.value != ''){
    const nav =document.querySelector('#Not #nav')
    const new_span =document.createElement('span')
    new_span.innerText =inp_add.value;
nav.append(new_span)
}

})
const make_msg_inp =document.querySelector('#inp-msg');
const make_msg =document.querySelector('#btn-add-msg');
make_msg.addEventListener('click',e =>{
if(make_msg_inp.value != ''){
    let section =document.createElement('section');
let h1 =document.createElement('h1');
let p =document.createElement('p');
let parent =document.querySelector('#posts');
parent.append(section)
h1.innerText =make_msg_inp.value;
p.innerText =`${new Date().toLocaleDateString()}  ${new Date().getUTCHours() + 2} in Egypt`
make_msg_inp.value ='';
section.append(h1)
section.append(p)
}
})

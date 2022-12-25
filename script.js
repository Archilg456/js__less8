"use strict";



// დავალება 2

function getUsers(){

    let request = new XMLHttpRequest();

    request.addEventListener('load', function(){
        let recivedInfo = this.responseText; 
        let recivedInfoJs = JSON.parse(recivedInfo);
        console.log(recivedInfoJs);

        let ul = document.createElement('ul');
        recivedInfoJs.data.forEach(eLement => {
            let li = document.createElement('li');
            let img = document.createElement('img');
            li.textContent = `${eLement.first_name} ${eLement.last_name}`;
            img.src = `${eLement.avatar}`;
            li.appendChild(img);
            ul.appendChild(li);
        }); 
       
        document.getElementById('user__info').appendChild(ul);
    })
    
    request.addEventListener('error', function(){
        let p = document.createElement('p');
        p.textContent = 'ERROR 404';

        document.getElementById('user__info').appendChild(p);
    })
    
    request.open('GET', 'https://reqres.in/api/users?page=2');
    request.send();

}
getUsers();

let userli = document.querySelectorAll("#pills-dashboard-tab")
for(let i=0;i<userli.length;i++){
    userli[i].onclick=(e)=>{  
        if(!userli[i].classList.contains('active')){
            // e.target.classList.add('active');
            userli[i].classList.add('active')

            for(let j=0;j<userli.length;j++){
                if(userli[j]!==userli[i]){
                    if(userli[j].classList.contains('active')){

                        userli[j].classList.remove('active');
                        }

                }

             


            }
        }

        
    }
}
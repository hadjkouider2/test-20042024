
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let qtt = document.getElementById('qtt');
let discount = document.getElementById('discount');
let total = document.getElementById('total');


// get total
function gettotal()
    {
        if(price.value !=""){
            let result = ( +price.value+ +taxes.value + +qtt.value)- +discount.value ;
            total.innerHTML = result;
            total.style.background = 'yellow'

        }else{
            total.innerHTML = '';
            total.style.background = ' #a00d02';         
        }
       
        
         
    }

    var x= document.getElementById("inputs");
    function CloneEle() {
       var x= document.getElementById("inputs");
       var clone = x.cloneNode(true);
       document.body.appendChild(clone);

       var removeButton = document.createElement('Button');
       removeButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>';
       clone.appendChild(removeButton);
       removeButton.setAttribute("class","remove");
      
  clearData()
  
}

function clearData(){
    
    price.value ='';
    taxes.value ='';
    discount.value ='';
    total.innerHTML ='';
    qtt.value ='';
   
}



    
    








    // $(".remove").click(function(){
    //     document.body.remove();
    //     var x = $("#inputs").length
    //      if (x = 2 ){
    //       $(this).attr({
    //         disabled:'disabled'
    //       })
    //   }else{
       
    //     }      

    // }) 
       
    
      
     
    
// $(document).ready(function(){
//     var clone = x.cloneNode(true);
//     $('.remove').on('click','#delete',function(){
//         document.body.remove();
//     })
// })    


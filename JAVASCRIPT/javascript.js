let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let count = document.getElementById('count');
let discount = document.getElementById('discount');
let total = document.getElementById('total');


// get total
function gettotal()
    {
        if(price.value !=""){
            let result = (+price.value + +taxes.value + +count.value)- +discount.value ;
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

       var removeButton = document.createElement('removeButton');
       removeButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>';
       removeButton.setAttribute('class','remove');
      clone.appendChild(removeButton);
      
  clearData()
  remove()
}

function clearData(){
    
    price.value ='';
    taxes.value ='';
    discount.value ='';
    total.innerHTML ='';
    count.value ='';
   
}


function remove(){
    const element = document.getElementsByClassName('remove');
    element.remove();
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


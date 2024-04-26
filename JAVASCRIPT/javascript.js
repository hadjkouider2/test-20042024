
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
       
    //    var removeButton = document.createElement('Button');
    //    removeButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>';
    //    clone.appendChild(removeButton);
    //    removeButton.setAttribute("class","remove");
       document.body.appendChild(clone);

      
  clearData()
  
}

function clearData(){
    
    price.value ='';
    taxes.value ='';
    discount.value ='';
    total.innerHTML ='';
    qtt.value ='';
   
}


$(document).ready(function(){
    
    var clone = x.cloneNode(true);
    $(document).on('click','#remove',function(){
      

       console.log($(this).parent());
       $(this).parent().remove()

    })
})    
$(document).ready(function(){
    $("#inputs").on('click','#remove',function(event){
        event.preventDefault();
        var rem =$(this).parent()
        console.log(rem);
       
        var cpt = $("#inputs").length
        if(cpt>1){
             rem.remove()
        }else{
            $(this).attr("disabled","disabled");
            $(this).css({background :'grey',
        })
        }
    
    
    
    
    })

})


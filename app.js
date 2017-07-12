window.addEventListener('load', function(){
    let phrase = document.querySelector('#notPigged'); 
    let pigBtn = document.querySelector('#pigBtn'); 
    let result = document.querySelector('#pigged'); 
    pigBtn.addEventListener('click', function (){
        
        return function pigIt(phrase) {
            let array = phrase.value.split(' '); 
            console.log('array'); 

            for (let i = 0; i < array.length; i++) {
                let pig = array[i].split(''); 
                let one = pig.shift(); 
                pig.push(one); 
                pig.push('ay'); 
                let two = pig.join(''); 
                
                array[i] = two; 
             
            }
            console.log(array.join(' ')); 
            result.value = array.join(' '); 
        }
        
        (phrase)
        
    });
}); 

// document.querySelector('#notPigged').
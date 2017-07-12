window.addEventListener('load', function(){
    console.log('hello'); 
    let pigBtn = document.querySelector('#pigged'); 

    pigBtn.addEventListener('click', function (){
        function pigIt(phrase) {
            let array = phrase.split(' '); 
            console.log('array'); 

            for (let i = 0; i < phrase.length; i++) {
                let pig = array[i].split(''); 
                let one = pig.shift(); 
                pig.push(one); 
                pig.push('ay'); 
                let two = pig.join(''); 

                array[i] = two; 
        }
            return array.join(' '); 
            // document.querySelector('#pigged').innerHTML = result
        }
     
    }); 
}); 

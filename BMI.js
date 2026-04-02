const form = document.querySelector('form')
// this will give empty
// const ht = parseInt(document.querySelector('#ht'))
form.addEventListener('submit', function(e){
    e.preventDefault();
    const ht = Number(document.querySelector('#ht').value);
    const wt = Number(document.querySelector('#wt').value);
    const result = document.querySelector('#result');
    if(isNaN(ht) && isNaN(wt)){
        result.innerHTML = 'Please enter valid height and weight.'
    }
  
    else if(ht ===''|| ht<0 || isNaN(ht)){
        result.innerHTML = 'Please enter valid height.'
    }
    else if(wt === ''|| wt<0 || isNaN(wt)){
        result.innerHTML = 'Please enter valid weight.'
    }
    else{
        // display result
        // here bmi due to tofixed is string
        const bmi= (wt/((ht*ht)/10000));
        const bmifix = bmi.toFixed(2);  
      let msg ="";
    
        if(bmi < 18.6){
            msg="Under Weight"
        }
        else if(bmi>=18.6 && bmi<=24.9){
            msg="Normal Weight"
        }
        else if(bmi>24.9){
            msg="Overweight"
        }
          result.innerHTML=`<span>${bmifix}<br> ${msg}</span>`
       
    }
     
    
})
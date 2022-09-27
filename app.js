document.getElementById('loan-form').addEventListener('submit',function(e){

    document.getElementById('results').style.display ='none';// results hiding
    document.getElementById('loading').style.display = 'block';//image displaying
    setTimeout(calculateResults,2000);//delaying calculatingResults function for 2s
    e.preventDefault();
});


function calculateResults(){
    console.log('calculating');
    

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    
    const principle = parseFloat(amount.value);//convert to a floating number
    const calculatedInterest =parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(years.value)*12;

    const x= Math.pow(1+ calculatedInterest,calculatedPayments);//interest^ no: of payments)+1
    const monthly = (principle*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayments)-principle).toFixed(2);
        document.getElementById('results').style.display = 'block';//showing results
        document.getElementById('loading').style.display = 'none';//hiding image

    }
    else{
         showError('Please check your numbers');

    }
    
    
    
    
 


}

function showError(error){

    document.getElementById('results').style.display = 'none';//hiding results
    document.getElementById('loading').style.display = 'none';//hiding image
    const errorDiv = document.createElement('div');//creating a div = errorDiv

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');//get the elements card and heading

    errorDiv.className ='alert alert-danger';//adding classname

    errorDiv.appendChild(document.createTextNode(error));//create textnode and append that to the div

    card.insertBefore(errorDiv , heading );// insert error above heading

    setTimeout(clearError , 3000);//clear the error after 3s=3000ms

    function clearError(){
        document.querySelector('.alert').remove();//clear error
    }

}
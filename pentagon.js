 // pentagon calculation
 document.getElementById('button-for-pentagon').addEventListener('click', function () {
    const pentagonCalculate = document.getElementById('pentagon-area-calculate');
    const previousPentagonCalculate = pentagonCalculate.innerText;
    const newPentagonCalculate = parseFloat(previousPentagonCalculate);



    const pentagonCalculateD1 = document.getElementById('pentagon-base');
    const previousPentagonCalculateD1 = pentagonCalculateD1.value;
    const   newPentagonCalculateD1 = parseFloat(previousPentagonCalculateD1);
    pentagonCalculateD1.value = '';

    const pentagonCalculateD2 = document.getElementById('pentagon-height');
    const previousPentagonCalculateD2 = pentagonCalculateD2.value;
    const   newPentagonCalculateD2 = parseFloat(previousPentagonCalculateD2);
    pentagonCalculateD2.value = '';

    const pentagonArea = document.getElementById('pentagon-area-calculation');
    const previousPentagonString = pentagonArea.innerText;
    const newPentagonElement = parseFloat(previousPentagonString);

    const pentagonElement = newPentagonCalculate * newPentagonCalculateD1 * newPentagonCalculateD2;
    console.log(pentagonElement);
    newPentagonElement.innerText = pentagonElement;


    const pentagonAreaTotalElement= document.getElementById('pentagon-area-calculation');
    // const previousPentagonAreaTotalString = pentagonAreaTotalElement.innerText;
    

    const newPentagonAreaTotal = pentagonElement ; 
    pentagonAreaTotalElement.innerText = newPentagonAreaTotal;


})
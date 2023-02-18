 // ellipse calculation
 document.getElementById('button-for-ellipse').addEventListener('click', function () {
    const ellipseCalculate = document.getElementById('ellipse-area-calculate');
    const previousEllipseCalculate = ellipseCalculate.innerText;
    const newEllipseCalculate = parseFloat(previousEllipseCalculate);



    const ellipseCalculateD1 = document.getElementById('ellipse-base');
    const previousEllipseCalculateD1 = ellipseCalculateD1.value;
    const   newEllipseCalculateD1 = parseFloat(previousEllipseCalculateD1);
    ellipseCalculateD1.value = '';

    const ellipseCalculateD2 = document.getElementById('ellipse-height');
    const previousEllipseCalculateD2 = ellipseCalculateD2.value;
    const   newEllipseCalculateD2 = parseFloat(previousEllipseCalculateD2);
    ellipseCalculateD2.value = '';

    const ellipseArea = document.getElementById('ellipse-area-calculation');
    const previousEllipseString = ellipseArea.innerText;
    const newEllipseElement = parseFloat(previousEllipseString);

    const ellipseElement = newEllipseCalculate * newEllipseCalculateD1 * newEllipseCalculateD2;
    console.log(ellipseElement);
    newEllipseElement.innerText = ellipseElement;


    const ellipseAreaTotalElement= document.getElementById('ellipse-area-calculation');
    // const previousEllipseAreaTotalString = ellipseAreaTotalElement.innerText;
    

    const newEllipseAreaTotal = ellipseElement ; 
    ellipseAreaTotalElement.innerText = newEllipseAreaTotal;


})
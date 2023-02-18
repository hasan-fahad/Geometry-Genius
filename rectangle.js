 // rectangle calculation
 document.getElementById('button-for-rectangle').addEventListener('click', function () {
    const rectangleCalculate = document.getElementById('rectangle-area-calculate');
    const previousRectangleCalculate = rectangleCalculate.innerText;
    const newRectangleCalculate = parseFloat(previousRectangleCalculate);



    const rectangleCalculateD1 = document.getElementById('rectangle-base');
    const previousRectangleCalculateD1 = rectangleCalculateD1.value;
    const   newRectangleCalculateD1 = parseFloat(previousRectangleCalculateD1);
    rectangleCalculateD1.value = '';

    const rectangleCalculateD2 = document.getElementById('rectangle-height');
    const previousRectangleCalculateD2 = rectangleCalculateD2.value;
    const   newRectangleCalculateD2 = parseFloat(previousRectangleCalculateD2);
    rectangleCalculateD2.value = '';

    const rectangleArea = document.getElementById('rectangle-area-calculation');
    const previousRectangleString = rectangleArea.innerText;
    const newRectangleElement = parseFloat(previousRectangleString);

    const rectangleElement = newRectangleCalculate * newRectangleCalculateD1 * newRectangleCalculateD2;
    console.log(rectangleElement);
    newRectangleElement.innerText = rectangleElement;


    const rectangleAreaTotalElement= document.getElementById('rectangle-area-calculation');
    // const previousRectangleAreaTotalString = rectangleAreaTotalElement.innerText;
    

    const newRectangleAreaTotal = rectangleElement ; 
    rectangleAreaTotalElement.innerText = newRectangleAreaTotal;


})

// triangle - Rhombus - Pentagon Calculations

document.getElementById('button-for-triangle').addEventListener('click', function () {
    const triangleCalculate = document.getElementById('triangle-area-calculate');
    const previousTriangleCalculate = triangleCalculate.innerText;
    const newTriangleCalculate = parseFloat(previousTriangleCalculate);



    const triangleCalculateB = document.getElementById('triangle-base');
    const previousTriangleCalculateB = triangleCalculateB.value;
    const   newTriangleCalculateB = parseFloat(previousTriangleCalculateB);
    triangleCalculateB.value = '';

    const triangleCalculateH = document.getElementById('triangle-height');
    const previousTriangleCalculateH = triangleCalculateH.value;
    const   newTriangleCalculateH = parseFloat(previousTriangleCalculateH);
    triangleCalculateH.value = '';

    const triangleArea = document.getElementById('triangle-area-calculation');
    const previousTriangleString = triangleArea.innerText;
    const newTriangleElement = parseFloat(previousTriangleString);

    const newElement = newTriangleCalculate * newTriangleCalculateB * newTriangleCalculateH;
    console.log(newElement)
    newTriangleElement.innerText = newElement;


    const AreaTotalElement= document.getElementById('triangle-area-calculation');
    const previousAreaTotalString = AreaTotalElement.innerText;
    const previousAreaTotalAmount = parseFloat(previousAreaTotalString);

    const newAreaTotal = newElement ; 
    AreaTotalElement.innerText = newAreaTotal;
})
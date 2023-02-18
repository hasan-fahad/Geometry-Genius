
// triangle Calculations

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
    

    const newAreaTotal = newElement ; 
    AreaTotalElement.innerText = newAreaTotal;

})
 // rhombus calculation
 document.getElementById('button-for-rhombus').addEventListener('click', function () {
    const rhombusCalculate = document.getElementById('rhombus-area-calculate');
    const previousRhombusCalculate = rhombusCalculate.innerText;
    const newRhombusCalculate = parseFloat(previousRhombusCalculate);



    const rhombusCalculateD1 = document.getElementById('rhombus-base');
    const previousRhombusCalculateD1 = rhombusCalculateD1.value;
    const   newRhombusCalculateD1 = parseFloat(previousRhombusCalculateD1);
    rhombusCalculateD1.value = '';

    const rhombusCalculateD2 = document.getElementById('rhombus-height');
    const previousRhombusCalculateD2 = rhombusCalculateD2.value;
    const   newRhombusCalculateD2 = parseFloat(previousRhombusCalculateD2);
    rhombusCalculateD2.value = '';

    const rhombusArea = document.getElementById('rhombus-area-calculation');
    const previousRhombusString = rhombusArea.innerText;
    const newRhombusElement = parseFloat(previousRhombusString);

    const rhombusElement = newRhombusCalculate * newRhombusCalculateD1 * newRhombusCalculateD2;
    console.log(rhombusElement);
    newRhombusElement.innerText = rhombusElement;


    const rhombusAreaTotalElement= document.getElementById('rhombus-area-calculation');
    // const previousRhombusAreaTotalString = rhombusAreaTotalElement.innerText;
    

    const newRhombusAreaTotal = rhombusElement ; 
    rhombusAreaTotalElement.innerText = newRhombusAreaTotal;


})

 // rectangle calculation
 

// parallelogram calculation
document.getElementById('button-for-paral').addEventListener('click', function () {
    const paralCalculate = document.getElementById('paral-area-calculate');
    const previousParalCalculate = paralCalculate.innerText;
    const newParalCalculate = parseFloat(previousParalCalculate);



    const paralCalculateB = document.getElementById('paral-base');
    const previousParalCalculateB = paralCalculateB.value;
    const   newParalCalculateB = parseFloat(previousParalCalculateB);
    paralCalculateB.value = '';

    const paralCalculateH = document.getElementById('paral-height');
    const previousParalCalculateH = paralCalculateH.value;
    const   newParalCalculateH = parseFloat(previousParalCalculateH);
    paralCalculateH.value = '';

    const paralArea = document.getElementById('paral-area-calculation');
    const previousParalString = paralArea.innerText;
    const newParalElement = parseFloat(previousParalString);

    const paralElement = newParalCalculate * newParalCalculateB * newParalCalculateH;
    console.log(paralElement);
    newParalElement.innerText = paralElement;


    const paralAreaTotalElement= document.getElementById('paral-area-calculation');
    // const previousRhombusAreaTotalString = rhombusAreaTotalElement.innerText;
    

    const newParalAreaTotal = paralElement ; 
    paralAreaTotalElement.innerText = newParalAreaTotal;


})
 // parallelogram calculation
 document.getElementById('button-for-parallelogram').addEventListener('click', function () {
    const parallelogramCalculate = document.getElementById('parallelogram-area-calculate');
    const previousParallelogramCalculate = parallelogramCalculate.innerText;
    const newParallelogramCalculate = parseFloat(previousParallelogramCalculate);



    const parallelogramCalculateD1 = document.getElementById('parallelogram-base');
    const previousParallelogramCalculateD1 = parallelogramCalculateD1.value;
    const   newParallelogramCalculateD1 = parseFloat(previousParallelogramCalculateD1);
    parallelogramCalculateD1.value = '';

    const parallelogramCalculateD2 = document.getElementById('parallelogram-height');
    const previousParallelogramCalculateD2 = parallelogramCalculateD2.value;
    const   newParallelogramCalculateD2 = parseFloat(previousParallelogramCalculateD2);
    parallelogramCalculateD2.value = '';

    const parallelogramArea = document.getElementById('parallelogram-area-calculation');
    const previousParallelogramString = parallelogramArea.innerText;
    const newParallelogramElement = parseFloat(previousParallelogramString);

    const parallelogramElement = newParallelogramCalculate * newParallelogramCalculateD1 * newParallelogramCalculateD2;
    console.log(parallelogramElement);
    newParallelogramElement.innerText = parallelogramElement;


    const parallelogramAreaTotalElement= document.getElementById('parallelogram-area-calculation');
    // const previousParallelogramAreaTotalString = parallelogramAreaTotalElement.innerText;
    

    const newParallelogramAreaTotal = parallelogramElement ; 
    parallelogramAreaTotalElement.innerText = newParallelogramAreaTotal;


})
function intersection(arr1: number[], arr2:number[]) : number[]
{
    const result: number[] = []
    for (let i=0; i<arr1.length ; i++)
    {
        const arrelement = arr1[i]
        if ((arr2.includes(arrelement)) && !(result.includes(arrelement)))
        result.push(arrelement)
    }
    return result
}

//All common elements in both arrays
console.log(intersection([1,2,3],[1,2,3]))

//No common elements in both arrays
console.log(intersection([1,2,3],[11,12,13]))

//Typical case - with some common
console.log(intersection([1,2,3,4],[11,2,13]))
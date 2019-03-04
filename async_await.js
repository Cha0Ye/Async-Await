const NUMBERS_API_URL = 'http://numbersapi.com/'; 


//Question 1 Number 1
async function singleLuckyNumFact(){ 
    let q1 = await $.get(`${NUMBERS_API_URL}/78`);
    return q1;
}

// let resp = await singleLuckyNumFact();



// Question 1 Number 2
async function manyLuckyNums(){ 
    let p1 = $.get(`${NUMBERS_API_URL}/78`);
    let p2 = $.get(`${NUMBERS_API_URL}/88`);
    let p3 = $.get(`${NUMBERS_API_URL}/98`);
    
    let a1 = await p1;
    let a2 = await p2;
    let a3 = await p3;
    
    return [a1, a2, a3];
}

// let response = await manyLuckyNums();

// Question 1 Number 3
async function manyLuckyNums(){ 

    let p1 = $.get(`${NUMBERS_API_URL}/78`);
    let p2 = $.get(`${NUMBERS_API_URL}/78`);
    let p3 = $.get(`${NUMBERS_API_URL}/78`);
    let p4 = $.get(`${NUMBERS_API_URL}/78`);

    
    let a1 = await p1;
    let a2 = await p2;
    let a3 = await p3;
    let a4 = await p4;

    $('#facts').html(`<p>${a1}</p> <p>${a2} </p><p>${a3}</p><p>${a4}</p>`)
}

// await manyLuckyNums();
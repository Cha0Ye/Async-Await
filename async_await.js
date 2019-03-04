const NUMBERS_API_URL = 'http://numbersapi.com/'; 


async function singleLuckyNumFact(){ 

    let q1 = await $.get(`${NUMBERS_API_URL}/78`)
    return q1;
}

//Number 1
let resp = await singleLuckyNumFact();


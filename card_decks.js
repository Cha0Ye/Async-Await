const CARD_DECK_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

// const ONE_CARD_URL = `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`


// P2 Q1
async function getOneCard(){
    let deck = await $.get(CARD_DECK_URL);
    let card = await $.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);

    console.log(card)

    console.log(`${card.cards[0].value} of ${card.cards[0].suit}`)

}

// await getOneCard();

// P2 Q2
async function getTwoCards(){
    let deck = await $.get(CARD_DECK_URL);
    let card1 = await $.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);
    let card2 = await $.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);


    console.log(`${card1.cards[0].value} of ${card1.cards[0].suit}`)
    console.log(`${card2.cards[0].value} of ${card2.cards[0].suit}`)

}

// await getOneCard();
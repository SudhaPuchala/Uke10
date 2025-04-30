
type Suit = 'Hearts' | 'Diamonds' | 'Clubs' | 'Spades';
type Rank = 'Ace' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'Jack' | 'Queen' | 'King';
export type Card = { suit: Suit; rank: Rank };

export function generateDeck(): Card[] {
    const suits: Suit[] = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks: Rank[] = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    
    const deck: Card[] = [];
    for (const suit of suits) {
        for (const rank of ranks) {
            deck.push({ suit, rank });
        }
    }
    return deck;
}

export function drawCard(deck: Card[]): { newDeck: Card[]; drawnCard: Card | null } {
    if (deck.length === 0) {
        return { newDeck: [], drawnCard: null };
    }
    const [drawnCard, ...newDeck] = deck;
    return { newDeck, drawnCard };
}

export function shuffleDeck(deck: Card[], seed: number): Card[] {
    const shuffled = [...deck];
    const randomSequence = generateRandomSequence(seed, deck.length);
    console.log("Random Sequence:", randomSequence);
    
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(randomSequence[i] * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
}

function generateRandomSequence(seed: number, length: number): number[] {
    const result = [];
    let current = seed;
    for (let i = 0; i < length; i++) {
        current = (current * 9301 + 49297) % 233280;
        result.push(current / 233280);
    }
    return result;
}
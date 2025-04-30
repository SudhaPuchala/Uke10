
<script setup lang="ts">
import { ref } from 'vue';
import { generateDeck, drawCard, shuffleDeck, Card} from './cards';


const deck = ref<Card[]>(generateDeck());
const drawnCard = ref<Card | null>(null);


const draw = () => {
  const { newDeck, drawnCard: card } = drawCard(deck.value);
  deck.value = newDeck;
  drawnCard.value = card;
};

const shuffle = () => {
  const seed = Math.floor(Math.random() * 1000000);
  deck.value = shuffleDeck(deck.value, seed);
};

</script>

<template>
  <div>
    <h1>Card Deck</h1>
    <button @click="draw" :disabled="deck.length === 0">Draw Card</button>
    <button @click="shuffle">Shuffle Deck</button>
    
    
    <div v-if="drawnCard">
      Drawn: {{ drawnCard.rank }} of {{ drawnCard.suit }}
    </div>
    <div>Remaining: {{ deck.length }} cards</div>
    <div v-if="deck.length > 0">
      {{ deck[0].rank }} of {{ deck[0].suit }}
    </div>
  </div>
</template>
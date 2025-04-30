
<script lang="ts">
import { defineComponent } from 'vue';
import { generateOrderedDeck, drawCard, shuffleDeck, Card } from './cards';

export default defineComponent({
  name: 'App',
  data() {
    return {
      deck: generateOrderedDeck(),
      drawnCard: null as Card | null
    };
  },
  methods: {
    draw() {
      const { newDeck, drawnCard } = drawCard(this.deck);
      this.deck = newDeck;
      this.drawnCard = drawnCard;
    },
    shuffle() {
      const seed = Math.floor(Math.random() * 1000000);
      this.deck = shuffleDeck(this.deck, seed);
    },
    reset() {
      this.deck = generateOrderedDeck();
      this.drawnCard = null;
    }
  }
});
</script>
<template>
  <div>
    <h1>Card Deck</h1>
    <button @click="draw" :disabled="deck.length === 0">Draw Card</button>
    <button @click="shuffle">Shuffle Deck</button>
    <button @click="reset">Reset Deck</button>
    
    <div v-if="drawnCard">
      Drawn: {{ drawnCard.rank }} of {{ drawnCard.suit }}
    </div>
    <div>Remaining: {{ deck.length }} cards</div>
    
    <div v-if="deck.length > 0">
      {{ deck[0].rank }} of {{ deck[0].suit }}
    </div>
  </div> 
</template>
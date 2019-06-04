import { local } from 'store2';
import { writable } from 'svelte/store';

import { DiceRoll } from '../Models/DiceRoll';

export default function diceRollStorage() {
  const storageName = 'diceRolls';

  const diceRolls: DiceRoll[] = [];

  const loadData = (): DiceRoll[] => local.get(storageName);

  const saveData = (data: DiceRoll[]) => local.set(storageName, data);

  const clear = () => local.remove(storageName);

  const addDiceRoll = (diceRoll: DiceRoll) => {};

  const { subscribe, set, update } = writable(loadData());
}

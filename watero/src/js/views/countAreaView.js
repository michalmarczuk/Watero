import { elements } from './elements';

export const setCount = (count) => {
    elements.countSpan.innerText = count;
}

export const setDrinkedWater = (drinkedWater) => {
    elements.drinkedWaterSpan.innerHTML = drinkedWater;
}
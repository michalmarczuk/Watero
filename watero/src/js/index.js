import { elements } from './views/elements';
import * as countAreaView from './views/countAreaView';
import * as settingsAreaView from './views/settingsAreaView';
import WaterCountModel from './models/WaterCountModel';
import WaterCapacityModel from './models/WaterCapacityModel';

const countDrinkedWater = () => {
    const countedWater = (WaterCapacityModel.get() * WaterCountModel.get()) / 1000;
    countAreaView.setDrinkedWater(countedWater.toFixed(1));
}

elements.addButton.addEventListener('click', () => {
    WaterCountModel.set(WaterCountModel.get() + 1);
    countAreaView.setCount(WaterCountModel.get());
    countDrinkedWater();
});

elements.settingsButton.addEventListener('click', () => {
    elements.settingsPanel.classList.toggle('hide');
});

elements.resetButton.addEventListener('click', () => {
    WaterCountModel.set(0);
    countAreaView.setCount(WaterCountModel.get());
    countDrinkedWater();
});

document.querySelector('.slider').oninput = function() {
    settingsAreaView.setCapacity(this.value);
    WaterCapacityModel.set(this.value);
    countDrinkedWater();
}

window.onload = () => {
    countAreaView.setCount(WaterCountModel.get());
    settingsAreaView.setCapacity(WaterCapacityModel.get());
    countDrinkedWater();
}

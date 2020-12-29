export default class WaterCapacityModel {
    static get() {
        if (!window.localStorage.getItem('capacity')) {
            WaterCapacityModel.set(250);
            return WaterCapacityModel.get();
        }

        return parseInt(window.localStorage.getItem('capacity'));
    }

    static set(capacity) {
        window.localStorage.setItem('capacity', capacity);
    }
}
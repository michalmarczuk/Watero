export default class WaterCountModel {
    static get() {
        if (!window.localStorage.getItem('count')) {
            WaterCountModel.set(0);
            return WaterCountModel.get();
        }

        return parseInt(window.localStorage.getItem('count'));
    }

    static set(count) {
        window.localStorage.setItem('count', count);
    }
}
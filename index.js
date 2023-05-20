import { Bulb } from "./Bulb/index.js";

const bulb1 = {
    isOn: true,
}

const bulb2 = {
    isOn: false,
}

const bulb3 = {
    isOn: false,
}


const appElm = document.querySelector('#app')
appElm.append(Bulb(bulb1), Bulb(bulb2), Bulb(bulb3))
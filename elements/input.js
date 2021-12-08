import BaseElement from "../base/baseElement.js";

export default class Input extends BaseElement { 
    constructor(wdioElement, name) {
        super (wdioElement, name)
    }
    
    async setValue(value) {
        await this. wdioElement.setValue(value)
    }

}
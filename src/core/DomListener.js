export class DomListener {
    constructor($root, listeners = []) {
        if(!$root){
            throw new Error('PROBLEM, SOS in DomListener');
        }
        this.$root = $root;
        this.listeners = listeners;
    }

    initDomListener(){

    }

    removeDomListener(){

    }
}
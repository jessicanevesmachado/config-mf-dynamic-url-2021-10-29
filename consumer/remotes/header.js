module.exports = { //comoonjs
    name: "header",
    urlGlobalVariable: "headerModuleUrl",
    get url(){
        return `${process.env.REACT_APP_MF_HEADER}/remoteEntry.js${this.randomString}`
    },
    get federationConfig(){
        return `${this.name}@[window.${this.urlGlobalVariable}]`
    },
    get randomString(){
        const date = new Date();

        const stringDate = String(new Date().setHours(date.getHours(),date.getMinutes(),0,0))

        return `?time=${stringDate}`
    }

}
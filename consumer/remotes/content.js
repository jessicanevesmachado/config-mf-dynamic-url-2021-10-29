module.exports = { //comoonjs
    name: "content",
    urlGlobalVariable: "contentModuleUrl",
    get url(){
        return `${process.env.REACT_APP_MF_CONTENT}/remoteEntry.js`
    },
    get federationConfig(){
        return `${this.name}@[window.${this.urlGlobalVariable}]`
    }
}
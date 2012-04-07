var iconComponent;
function create_icon(xPos,yPos){
    if (iconComponent == null)
        iconComponent = Qt.createComponent("../mirror/icon.qml");

    if (iconComponent.status == Component.Ready) {
        var dynamicObject = iconComponent.createObject(total);
        if (dynamicObject == null) {
            console.log("error creating icon");
            console.log(component.errorString());
            return false;
        }
        dynamicObject.x = xPos;
        dynamicObject.y = yPos;
    } else {
        console.log("error loading icon component");
        console.log(component.errorString());
        return false;
    }
}

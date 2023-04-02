var dpi = 127
var width = new UnitValue(30, "cm")
// width.baseUnit = new UnitValue(1/dpi, "in");

var height = new UnitValue(30, "cm")
//height.baseUnit = new UnitValue(1/dpi, "in");



var newDocument = app.documents.add( width, height,  dpi, "test", NewDocumentMode.GRAYSCALE);

var layers = newDocument.artLayers;
var lastnameLayer = layers.add();
var firstnameLayer = layers.add();
var surnameLayer = layers.add();
var dateLayer = layers.add();

function fullTextLayer(layer, text) {
        layer.kind = LayerKind.TEXT
        layer.name = text
        
        var textRef = layer.textItem;
        textRef.size = 110;
        textRef.font = "BoyarskyC";
        textRef.justification = Justification.CENTER
        
        textRef.position = [newDocument.width/2, new UnitValue(10, "cm")]
        textRef.contents = text;
}



fullTextLayer(lastnameLayer, "Семенович")










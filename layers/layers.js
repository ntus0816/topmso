var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});

    var projection__0 = ol.proj.get('EPSG:3857');
    var projectionExtent__0 = projection__0.getExtent();
    var size__0 = ol.extent.getWidth(projectionExtent__0) / 256;
    var resolutions__0 = new Array(14);
    var matrixIds__0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions__0[z] = size__0 / Math.pow(2, z);
        matrixIds__0[z] = z;
    }
    var lyr__0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "http://maps.nlsc.gov.tw/S_Maps/wmts",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                "layer": "EMAP01",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection__0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent__0),
                resolutions: resolutions__0,
                matrixIds: matrixIds__0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "臺灣通用電子地圖(灰階)",
                            opacity: 1.0,
                            
                            
                          });var lyr_03272_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://58.99.97.27:8080/geoserver/topmso/wms",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "L0327-2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "0327-2",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_03272_1, 0]);

lyr__0.setVisible(true);lyr_03272_1.setVisible(true);
var layersList = [baseLayer,lyr__0,lyr_03272_1];

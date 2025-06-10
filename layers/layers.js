var wms_layers = [];

var lyr_peta361_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'peta 361<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/peta361_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12232408.664464, -847896.163192, 13324588.710189, 55720.105614]
        })
    });
var format_rambukuning_1 = new ol.format.GeoJSON();
var features_rambukuning_1 = format_rambukuning_1.readFeatures(json_rambukuning_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rambukuning_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rambukuning_1.addFeatures(features_rambukuning_1);
var lyr_rambukuning_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rambukuning_1, 
                style: style_rambukuning_1,
                popuplayertitle: 'rambu kuning',
                interactive: true,
                title: '<img src="styles/legend/rambukuning_1.png" /> rambu kuning'
            });
var format_jarakkepusakatanahpersadaPTP_2 = new ol.format.GeoJSON();
var features_jarakkepusakatanahpersadaPTP_2 = format_jarakkepusakatanahpersadaPTP_2.readFeatures(json_jarakkepusakatanahpersadaPTP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jarakkepusakatanahpersadaPTP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jarakkepusakatanahpersadaPTP_2.addFeatures(features_jarakkepusakatanahpersadaPTP_2);
var lyr_jarakkepusakatanahpersadaPTP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jarakkepusakatanahpersadaPTP_2, 
                style: style_jarakkepusakatanahpersadaPTP_2,
                popuplayertitle: 'jarak ke pusaka tanah persada (PTP)',
                interactive: true,
                title: 'jarak ke pusaka tanah persada (PTP)'
            });
var format_KEPELTRISAKTI_3 = new ol.format.GeoJSON();
var features_KEPELTRISAKTI_3 = format_KEPELTRISAKTI_3.readFeatures(json_KEPELTRISAKTI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEPELTRISAKTI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEPELTRISAKTI_3.addFeatures(features_KEPELTRISAKTI_3);
var lyr_KEPELTRISAKTI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KEPELTRISAKTI_3, 
                style: style_KEPELTRISAKTI_3,
                popuplayertitle: 'KE PEL TRISAKTI',
                interactive: true,
                title: 'KE PEL TRISAKTI'
            });

lyr_peta361_0.setVisible(true);lyr_rambukuning_1.setVisible(true);lyr_jarakkepusakatanahpersadaPTP_2.setVisible(true);lyr_KEPELTRISAKTI_3.setVisible(true);
var layersList = [lyr_peta361_0,lyr_rambukuning_1,lyr_jarakkepusakatanahpersadaPTP_2,lyr_KEPELTRISAKTI_3];
lyr_rambukuning_1.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'MAP_NAME': 'MAP_NAME', });
lyr_jarakkepusakatanahpersadaPTP_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KEPELTRISAKTI_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_rambukuning_1.set('fieldImages', {'NAME': '', 'LAYER': '', 'MAP_NAME': '', });
lyr_jarakkepusakatanahpersadaPTP_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_KEPELTRISAKTI_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_rambukuning_1.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'MAP_NAME': 'no label', });
lyr_jarakkepusakatanahpersadaPTP_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_KEPELTRISAKTI_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_KEPELTRISAKTI_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
// Sketchfab.js//

var iframe1 = document.getElementById( 'api-frame1' );
var uid1 = 'b8033401498a41bb9409ee508f0f6817';

 // By default, the latest version of the viewer API will be used.
    
var client1 = new Sketchfab( iframe1 );


      // Alternatively, you can request a specific version.
    // var client = new Sketchfab( '1.7.1', iframe );
var error1 = function onError() {
            console.log( 'Viewer error' );
        };


var tags = ['#Design', '#Build', '#Enforce'];
var tagsA = [];

function tagChar (tag){
 return tag[t].charAt(1);
}


var success1 = function(api) {


api.start(function() {



api.getAnnotationList(function(err, annotations) {
    
    if(!err) {
        console.log(annotations);
    
        for (let i = 0; i < annotations.length; i ++) {   
        console.log(annotations[i].name);
        console.log(annotations[i].content.raw);
        
        
        document.getElementById("d-btns").innerHTML += '<button class="btn btn-light btn-block btn-task" id="d' + [i].toString() + '">' + annotations[i].name + '</button>';
        

        for (let j = 0; j < annotations.length; j ++) { 
        if (annotations[i].content.raw.includes(tags[j]) == true) {

            console.log('the' + tags[j] + ' element is: ' + annotations[i].name);
            }
        }

        }
        
        for (let k = 0; k < annotations.length; k ++) {   
                   
        document.getElementById('d' + [k].toString()).addEventListener('click', function() {
        api.gotoAnnotation(k, { preventCameraAnimation: false, preventCameraMove: false
        
        });
        });
        
    
             }
    
    }

});

      
     

});

}


//Client1//
    client1.init( uid1, {
        success: success1,
        error: error1,
        ui_general_controls: 0,
        ui_settings: 0,
        ui_inspector: 0,
        ui_infos: 0,
        ui_stop: 0,
        ui_watermark_link: 0

    } );
    
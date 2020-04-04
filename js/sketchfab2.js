// Sketchfab.js//

var iframe1 = document.getElementById( 'api-frame1' );
    var uid1 = 'b8033401498a41bb9409ee508f0f6817';

  var iframe2 = document.getElementById( 'api-frame2' );
    var uid2 = '784aaac7e98942ca86f7a593604c3d83';      
 
   var iframe3 = document.getElementById( 'api-frame3' );
    var uid3 = '051185e209934da9b82529a70a1e7d52';  
    // By default, the latest version of the viewer API will be used.
    
      var client1 = new Sketchfab( iframe1 );
      var client2 = new Sketchfab( iframe2 );
      var client3 = new Sketchfab( iframe3 );

var noann = 11;

      // Alternatively, you can request a specific version.
    // var client = new Sketchfab( '1.7.1', iframe );
var error1 = function onError() {
            console.log( 'Viewer error' );
        };

var success1 = function(api1) {

api1.start(function() {

        api1.getAnnotationList(function(err, annotations) {
            if(!err) {
                console.log(annotations);
            }

        });

        var annotations = ["this", "that", "this", "that", "this", "that","that", "this", "that", "this", "that"];

            var x;

            for (x in annotations) {

            document.getElementById("b" + [x].toString()).addEventListener('click', function() {
            api1.gotoAnnotation([x], { preventCameraAnimation: false, preventCameraMove: false });
            
            });

            };        

        });

 
};




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

//Client2//
    client2.init( uid2, {
        success: success2,
        error: error1


    } );


//Client3//
    client1.init( uid3, {
        success: success3,
        error: error1

    } );


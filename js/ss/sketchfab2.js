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

        annotations.forEach(getAnno);

       function getAnno(item, index) {
            document.getElementById("demo").innerHTML += index + ":" + item + "<br>"; 
        }

          var x = document.getElementsByClassName("b-anno");
          var i;
          for (i = 0; i < x.length; i++) {

          document.getElementById('b1').addEventListener('click', function() {
            api1.gotoAnnotation(i, { preventCameraAnimation: false, preventCameraMove:             false });
        });

          }

        







        });

 

          document.getElementById('b1').addEventListener('click', function() {
            api1.gotoAnnotation(0, { preventCameraAnimation: false, preventCameraMove:             false });
        });

        }

        document.getElementById('b2').addEventListener('click', function() {
            api1.gotoAnnotation(1, { preventCameraAnimation: false, preventCameraMove:           false });
        });

        document.getElementById('b3').addEventListener('click', function() {
            api1.gotoAnnotation(2, { preventCameraAnimation: false, preventCameraMove:           false });
        });

        document.getElementById('b4').addEventListener('click', function() {
            api1.gotoAnnotation(3, { preventCameraAnimation: false, preventCameraMove:           false });
        });

        document.getElementById('b5').addEventListener('click', function() {
            api1.gotoAnnotation(4, { preventCameraAnimation: false, preventCameraMove:           false });
        });

        document.getElementById('b6').addEventListener('click', function() {
            api1.gotoAnnotation(5, { preventCameraAnimation: false, preventCameraMove:           false });
        });

        document.getElementById('b7').addEventListener('click', function() {
            api1.gotoAnnotation(6, { preventCameraAnimation: false, preventCameraMove:           false });
        });

                document.getElementById('b8').addEventListener('click', function() {
            api1.gotoAnnotation(7, { preventCameraAnimation: false, preventCameraMove:           false });
        });

                document.getElementById('b9').addEventListener('click', function() {
            api1.gotoAnnotation(8, { preventCameraAnimation: false, preventCameraMove:           false });
        });

                document.getElementById('b10').addEventListener('click', function() {
            api1.gotoAnnotation(9, { preventCameraAnimation: false, preventCameraMove:           false });
        });

                document.getElementById('b11').addEventListener('click', function() {
            api1.gotoAnnotation(10, { preventCameraAnimation: false, preventCameraMove:           false });
        });


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


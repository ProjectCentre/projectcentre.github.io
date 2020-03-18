// Sketchfab.js//

var iframe1 = document.getElementById( 'api-frame1' );
    var uid1 = '7w7pAfrCfjovwykkEeRFLGw5SXS';

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

//Client1//
    client1.init( uid1, {
        success: function onSuccess( api ){
            api.start();
            api.addEventListener( 'viewerready', function() {
                // API is ready to use
                // Insert your code here
                console.log( 'Viewer is ready' );

            } );
        },
        error: function onError() {
            console.log( 'Viewer error' );
        }
    } );

      //Client2//
    client2.init( uid2, {
        success: function onSuccess( api ){
            api.start();
            api.addEventListener( 'viewerready', function() {
                // API is ready to use
                // Insert your code here
                console.log( 'Viewer is ready' );

            } );
        },
        error: function onError() {
            console.log( 'Viewer error' );
        }
    } );

            //Client3//
    client3.init( uid3, {
        success: function onSuccess( api ){
            api.start();
            api.addEventListener( 'viewerready', function() {
                // API is ready to use
                // Insert your code here
                console.log( 'Viewer is ready' );

            } );
        },
        error: function onError() {
            console.log( 'Viewer error' );
        }
    } );
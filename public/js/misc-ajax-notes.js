 $.get('data/inventory.json').done(function(data, status, jqXhr) {
                console.log(data.results[0].title);
                }), fail.function (jqXhr, status, error) {
                    console.log(jqXhr);
                    console.log("Response status: " + status);
                    console.log("Error object: " + error);
                });
            });
            //$('#insertProducts').append('<tr><td>') + 
            // }


    $.get('/data/inventory.json') {
                $('#insertProducts').append('<tr><td>')
                    });
                }).done(function(data) {

                  // function sendRequest() {
            //     var getRequest = $.get('/data/inventory.json');
            
            //     getRequest.done(function(data, status) {
            //         console.log(data);
            //     });

            //     getRequest.fail(function(jqXhr, status, error) {
            //         console.log(status);
            //         console.log(error);
            //     });
            // });
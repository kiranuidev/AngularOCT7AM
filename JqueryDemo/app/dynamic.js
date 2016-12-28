(
    function () {
        vehicles = [{
                Year: "2016",
                Make: "BMW",
                Model: "B5"
            },
            {
                Year: "2015",
                Make: "BMW",
                Model: "b4"
            }];
        $(document).ready(function () {
            bindVehicles();
            getVehiclesFromJson();
            //makeJsonPCalls();
        });

        var makeJsonPCalls = function () {
            function jsonCallback(json) {
                console.log(json);
            }
            $.getJSON("https://api.github.com/users/jeresig?callback=?", function (json) {
                console.log(json);
            });


            /*$.ajax({
    url: "https://api.github.com/users/jeresig",
    dataType: "jsonp",
    jsonpCallback: "jsonCallback"
});*/
        };
        var getVehiclesFromJson = function () {

            $.ajax({
                url: "app/vehicles.json",
                method: "GET",
                contentType: "application/json",
                success: function (response) {
                    console.log(response);
                },
                error: function (response) {
                    console.log(response);
                }
            });
        };


        var bindVehicles = function () {
            $.each(vehicles, function (index, item) {
                //console.log(item);
                var row = createTableRow(item);
                $("#tblVehicles").append(row);
            })
        };
        var createColumn = function (data) {
            var column = $("<td>");
            $(column).text(data);
            return column;
        }
        var createTableRow = function (vehicle) {
            //Creating an element dynamically.
            var row = $("<tr>");
            //console.log($(row));
            var makeColumn = createColumn(vehicle.Make);
            var modelColumn = createColumn(vehicle.Model);
            var yearColumn = createColumn(vehicle.Year);
            $(row).append(yearColumn);
            $(row).append(makeColumn);
            $(row).append(modelColumn);
            return row;

        };
    }
)();

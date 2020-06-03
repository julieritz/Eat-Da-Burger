$(function () {
    $(".eat-btn").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newDevoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevoured);
                location.reload();
            }
        );
    });

    $("#addBurger").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});
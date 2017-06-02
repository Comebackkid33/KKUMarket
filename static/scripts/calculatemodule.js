

//считамем для дорог и ям и парковочного места
function calcRoad(){
    var totalAmount = $('#length').val()*$('#width').val()*$('#height').val()*1.3;
    $('#result').val(totalAmount);
};

//считаем для монолит фундамента
        function calcFun() {
            var totalAmount = $('#length').val() * $('#width').val() * $('#height').val() * 0.35 * 0.0001 * 1.3;

            $('#result').val(Number((totalAmount).toFixed(2)));
        };


//меняем текст в зависимости от выбранного радиобатан
$(document).ready(function() {
    $("input[name$='optradio']").change(function() {
        var chosen = $(this).val();
        $("p.desc").hide();
        $("#"+chosen+"Text").show();


    });
});



function setShipPrice() {
    var sum = getSum(IP);
    $("#sum").val("");

    if ($('#shipKku').prop('checked')) {
        $("#sum").val(sum + " Доставка: " + $("#city option:selected").val());
    }
    else {
        $("#sum").val(sum);
    }

}




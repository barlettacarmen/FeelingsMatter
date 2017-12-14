var $range = $("#range"),
    instance,
    min = 0,
    max = 100;

$range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 10,
    to: 60,
    postfix:"%",
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
});

function updateInputs (data) {
    sessionStorage.setItem("min", data.from);
    sessionStorage.setItem("max", data.to);
}

instance = $range.data("ionRangeSlider");

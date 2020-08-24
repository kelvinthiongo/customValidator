function validateForm(formName) {
    $(`${formName} .error`).remove();
    var validation_checker = true;
    var hash_href = "#";
    var n = 0;
    $(`${formName} .required`).each(function(i, obj) {
        if ($(obj).val() == "") {
            var error_element = `<span class="error" style="color: red">${$(
                obj
            ).attr("name")} is required</span>`;
            $(error_element).insertAfter(obj);
            validation_checker = false;
            if (n == 0) {
                hash_href = `#${$(obj).attr("id")}`;
            }
            n = n + 1;
            $(obj).addClass("red-border");
        }
        else{
            $(obj).removeClass("red-border");
        }
    });
    if (validation_checker == false) {
        $("body,html").animate(
            {
                scrollTop: $(hash_href).offset().top - 100
            },
            300
        );
    }
    return validation_checker;
}

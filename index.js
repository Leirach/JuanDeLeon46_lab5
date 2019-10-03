function createItem(val) {
	let item = $("<li class=\"item\">" + val + "</li>")
	item.append($("</br>"))

	let checkBtn = $("<button/>",
    {
        text: "check",
        class: "checkButton",
        click: function (event) { 
        	$(this).addClass("checkButtonClicked")
			$(this).parent().wrap("<strike>")
        }
    });

    let delBtn = $("<button/>",
    {
        text: "delete",
        class: "deleteButton",
        click: function (event) { 
        	$(this).parent().remove()
        }
    });
	item.append(checkBtn)
	item.append(delBtn)
	return item
}

$("#submitButton").click(function(event) {
	event.preventDefault()
	let val = $("form>input").val()
	$("form>input").val("")
	let item = createItem(val)
	$("ul").append(item)
})

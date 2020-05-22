drawShowMoreButton('web');
drawShowMoreButton('graphic');

// Function that draws a Show More button and hides items beyond a limit (4)
function drawShowMoreButton(selector_id) {
    let selectorHTML = document.getElementById(selector_id);
    let lines = document.querySelectorAll('#' + selector_id + " article");
    let limit = 2;
    try {
        if (lines.length > limit) {
            lines.forEach(isHidden);

            let showMore = '<div class="col-6 col-12 align-center"><button onClick="toggleItems(toggle_' + selector_id + ');" class="button" id="toggle_' + selector_id + '">Show More</button></div>';
            selectorHTML.innerHTML += showMore;

            function isHidden(item, index) {
                // if the nb of items exceeds 4, hide the remainder
                if (index > (limit - 1)) {
                    item.classList.add('hidden', 'limit');
                }
            }
        }
    } catch (error) {
        console.error(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
    }


}

function toggleItems(id) {
    switch (id.innerText) {
        case "Show More":
            id.innerText = "Show Less";
            $(".limit").removeClass("hidden");
            break;
        case "Show Less":
            id.innerText = "Show More";
            $(".limit").addClass("hidden");
            break;
        default:
            console.error(error);
            console.log("button non-eistant");
    }
}
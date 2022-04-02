
console.log("Test1");

function loadVersion(elementId, groupId, artifactId) {
    console.log("Test");

    let request = new XMLHttpRequest();

    let url = "https://search.maven.org/solrsearch/select?q=g:" + groupId + "%20AND%20a:lapi&wt=json";
    request.open("GET", url, false);
    request.setRequestHeader("Access-Control-Allow-Origin", "*")
    request.send();

    console.log(request.responseText);

    let element = document.getElementById(elementId);
    element.textContent = "replacement";
}

window.addEventListener("load", function () {
    loadVersion("lapi-version", "io.github.lni-dev", "lapi");
})


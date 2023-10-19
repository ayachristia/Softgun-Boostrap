// search.js
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var searchInput = document.querySelector("#search-form input[type=search]");
    var searchTerm = searchInput.value.trim().toLowerCase();

    // Tjekker om søgeordet indeholder "umarex hk p30" eller "umarex p30" uanset store og små bogstaver
    if (/umarex\s+h&k\s*p30/.test(searchTerm) || /umarex\s+p30/.test(searchTerm)) {
        window.location.href = "umarexhkp30.html"; // Omdirigerer til den ønskede side
    } else if (searchTerm === "umarex") {
        window.location.href = "searchumarex.html"; // Omdirigerer til den anden ønskede side
    } else {
        alert("Søgeordet blev ikke fundet!");
    }
});

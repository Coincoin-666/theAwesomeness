let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

// languages.forEach(element => console.log(element));

// The example above works, but let's try with a function:

let txt = "";

function langList(value, index, array) {
    txt = txt + value + "<br>";
}

languages.forEach(langList);
document.getElementById("language_list").innerHTML = txt;
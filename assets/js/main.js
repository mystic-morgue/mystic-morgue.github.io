
window.onload = function ()
{
    let fetchables = document.getElementsByClassName("fetch");

    for (let fetchable of fetchables)
    {
        fetch(fetchable.dataset.href)
        .then( response => response.text() )
        .then( data =>
        {
            fetchable.innerHTML = data;
            fetchable.style.visibility = "visible";
        })
        .catch(error => console.error("Error al cargar fetchable", error));
    }


    // Head extras
    fetch("template-parts/head_extra.html")
        .then(response => response.text())
        .then(data => {
            const head = document.head || document.getElementsByTagName('head')[0];
            const div = document.createElement('div');
            div.innerHTML = data;
            while (div.firstChild)
            {
                head.appendChild(div.firstChild);
            }
        })
        .catch(error => console.error('Error loading additional head content:', error));
}
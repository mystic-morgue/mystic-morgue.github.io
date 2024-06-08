
window.onload = onWindowLoaded;

async function onWindowLoaded()
{
	await loadHtml("pages/tve.html");

	let tve_link = document.getElementById('tve_link');
	tve_link.onclick = () => loadHtml("pages/tve.html");

	let about_link = document.getElementById('about_link');
	about_link.onclick = () => loadHtml("pages/about.html");

	let indie_summit_link = document.getElementById('indie_summit_link');
	indie_summit_link.onclick = () => loadHtml("pages/indie_summit.html");
}


async function loadHtml(path)
{

	let element = document.getElementById('main_content');
	element.innerHTML = await fetchHtmlAsText(path);
}


async function fetchHtmlAsText(url)
{
    return await (await fetch(url)).text();
}
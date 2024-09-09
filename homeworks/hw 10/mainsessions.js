let sessions = JSON.parse(localStorage.getItem('sessionList'));
for (const item of sessions) {
    let div = document.createElement(`div`);
    div.textContent = item.toString();
    document.body.appendChild(div);
}
export default function lastModification() {
    const lastModificationText = document.querySelector('.last_modification')

    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDay()
    let hours = date.getHours()
    let min = date.getMinutes()
    const dateFull = `Last Add Note: ${day+10}/${month+1}/${year} at ${hours}:${min}`;
    localStorage.setItem("date", JSON.stringify(dateFull));
    lastModificationText.innerHTML = JSON.parse(localStorage.getItem("date"));
}
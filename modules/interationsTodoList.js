import lastModification from "./lastModification.js"

export default function interationsTodoList() {


const addNote = document.querySelector('.add_note'), 
input = document.querySelector('.description_note'),
notesBox = document.querySelector('.notes_box'),
divError = document.querySelector('.error');


let oldInputValue;
// MODAL ----------------------------------
const editNote = document.querySelector('.edit_note'),
buttonEditNote = document.querySelector('.button_edit_note'),
closeModalEditNote = document.querySelector('.close_editNote');
const editInput = document.querySelector('.input_edit_note')
// MODAL ----------------------------------


let notesArray = new Array();
let notesArrayFromLocalStorage = new Array();
let notesObj;

let isChecked;
const addNewNote = (text, isChecked) => {

    notesObj = {title: text, checked: isChecked};
    notesArray.push(notesObj);
    
    localStorage.setItem("notes", JSON.stringify(notesArray));

    const newNote = document.createElement("div");
    newNote.classList.add("note");
    notesBox.appendChild(newNote);
    //console.log(newNote.previousSibling)

    newNote.classList.add('createdNewNote')

    if(notesObj.checked == true) {
        newNote.classList.add('active')
        console.log(notesObj)
     }

    const newTitle = document.createElement("p");
    newTitle.classList.add('new_title')
    newTitle.innerText = text;
    newNote.appendChild(newTitle);

    const boxButtons = document.createElement("div");
    boxButtons.classList.add("box_buttons_notes");
    newNote.appendChild(boxButtons);

    const btnDone = document.createElement("button");
    btnDone.classList.add("done-todo");
    btnDone.innerHTML = 'D'
    btnDone.innerHTML = '<i class="uil uil-check"></i>';
    boxButtons.appendChild(btnDone);

    const btnEdit = document.createElement("button");
    btnEdit.classList.add("edit-todo");
    btnEdit.innerHTML = 'E'
    btnEdit.innerHTML = '<i class="uil uil-pen"></i>';
    boxButtons.appendChild(btnEdit);
    
    const btnRemove = document.createElement("button");
    btnRemove.classList.add("remove-todo");
    btnRemove.innerHTML = 'R'
    btnRemove.innerHTML = '<i class="uil uil-trash"></i>';
    boxButtons.appendChild(btnRemove);

    input.value = '';
    input.focus();


}



addNote.addEventListener('click', (e) => {
    const inputValue = input.value;

    if(inputValue) {
        addNewNote(inputValue);
        lastModification()
    }
})



document.addEventListener('click', (e) => {

    const currentBtn = e.target;
    const parentCurrentBtn = currentBtn.closest('.note');
    let noteTitle;

    if(parentCurrentBtn && parentCurrentBtn.querySelector('p')) {
        noteTitle = parentCurrentBtn.querySelector('p').innerText
        
    }


        if(currentBtn.classList.contains('done-todo') || currentBtn.classList.contains('uil-check')) {
            noteTitle = parentCurrentBtn.querySelector('p');
            parentCurrentBtn.classList.toggle('active');
            let index = notesArray.findIndex(obj => obj.title == noteTitle.innerHTML);
        
        if(notesArray[index].checked == undefined || notesArray[index].checked == false) {  
            notesArray[index].checked = true;  
            isChecked = true;
            localStorage.setItem("notes", JSON.stringify(notesArray)); 
        } 
        
        else if(notesArray[index].checked == true) {
            notesArray[index].checked = false;
            isChecked = false;
            localStorage.setItem("notes", JSON.stringify(notesArray));
        }


    }


    if(currentBtn.classList.contains('remove-todo') || currentBtn.classList.contains('uil-trash')) {
        noteTitle = parentCurrentBtn.querySelector('p');
        let indice = notesArray.findIndex(obj => obj.title == noteTitle.innerHTML);
        notesArray.splice(indice, 1);
        parentCurrentBtn.classList.add('noteRemove')
        setTimeout(() => {
             parentCurrentBtn.remove();
        }, 600)
       
        localStorage.setItem("notes", JSON.stringify(notesArray));
    }
    
    if(currentBtn.classList.contains('edit-todo') || currentBtn.classList.contains('uil-pen')) {
        editNote.classList.add('active');

        editInput.value = noteTitle;
        oldInputValue = noteTitle;

    }

})


const updateNote = (text) => {

    const allNotes = document.querySelectorAll('.note');
    
     allNotes.forEach((note, index) => {
        let noteTitle = note.querySelector('p');

        if(noteTitle.innerText === oldInputValue) {
            noteTitle.innerText = text;

        if(notesArray[index].title === oldInputValue) {
            notesArray[index].title = text;
            localStorage.setItem("notes", JSON.stringify(notesArray));
        }
        }

     })
}


buttonEditNote.addEventListener('click', () => {
    const editInputValue = editInput.value;
    editNote.classList.remove('active')
    if(editInputValue) {
        updateNote(editInputValue)
    }
});

closeModalEditNote.addEventListener('click', () => editNote.classList.remove('active'))


if(window.load = true ) {
    input.focus()
    notesArrayFromLocalStorage = JSON.parse(localStorage.getItem("notes"))


    if(!notesArrayFromLocalStorage) {
        notesArrayFromLocalStorage = 0;

    }else {
        notesArrayFromLocalStorage.forEach(item => addNewNote(item.title, item.checked))
    }
   
}
}



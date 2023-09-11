const addNote = document.querySelector('.add_note'), 
input = document.querySelector('.description_note'),
notesBox = document.querySelector('.notes_box'),
divError = document.querySelector('.error');
const editNote = document.querySelector('.edit_note');
const buttonEditNote = document.querySelector('.button_edit_note')

const addNewNote = (text) => { 
    const newNote = document.createElement("div");
    newNote.classList.add("note");
    notesBox.appendChild(newNote);

    const newTitle = document.createElement("p");
    newTitle.innerText = text;
    newNote.appendChild(newTitle);

    const boxButtons = document.createElement("div");
    boxButtons.classList.add("box_buttons_notes");
    newNote.appendChild(boxButtons);

    const btnDone = document.createElement("button");
    btnDone.classList.add("done-todo");
    //btnDone.innerHTML = '<i class="uil uil-check"></i>';
    boxButtons.appendChild(btnDone);

    const btnEdit = document.createElement("button");
    btnEdit.classList.add("edit-todo");
    //btnEdit.innerHTML = '<i class="uil uil-edit"></i>';
    boxButtons.appendChild(btnEdit);

    const btnRemove = document.createElement("button");
    btnRemove.classList.add("remove-todo");
    //btnRemove.innerHTML = '<i class="uil uil-trash"></i>';
    boxButtons.appendChild(btnRemove);

    input.value = '';
    input.focus();

}

addNote.addEventListener('click', (e) => {
    e.preventDefault()
    const inputValue = input.value;

    if(inputValue) {
        addNewNote(inputValue);
    }
})



document.addEventListener('click', (e) => {

    const currentBtn = e.target;
    const parentCurrentBtn = currentBtn.closest('.note');
    let noteTitle;


    if(currentBtn.classList.contains('done-todo')) {
        noteTitle = parentCurrentBtn.querySelector('p');
        noteTitle.style = "text-decoration: line-through";
        parentCurrentBtn.classList.toggle('active');
    }

    const newEditNote = () => {
        buttonEditNote.addEventListener('click', () =>{
            noteTitle = parentCurrentBtn.querySelector('p');
            const newText = editNote.querySelector('input')
            noteTitle.innerText = newText.value;
            editNote.classList.remove('active');
        })
    }

    if(currentBtn.classList.contains('edit-todo')) {
        editNote.classList.add('active');
        noteTitle = parentCurrentBtn.querySelector('p');
        const newText = editNote.querySelector('input').value = noteTitle.textContent;
        newEditNote()
        
    }

    if(currentBtn.classList.contains('remove-todo')) {
        parentCurrentBtn.remove()
    }
   
    
})


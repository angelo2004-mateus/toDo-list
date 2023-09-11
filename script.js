// const btnAddNote = document.querySelector('.add_note'), 
// input = document.querySelector('.description_note'),
// notesBox = document.querySelector('.notes_box'),
// divError = document.querySelector('.error')

// const notesArray = new Array()





// const addNote = (inputValue) => {


//     if(!inputValue) {
    
//         console.log(notesArray)
//     } else {

//     // database Notes
//     let databaseNotes = {title: inputValue, index: 0 + notesArray.length}
//     notesArray.push(databaseNotes);
//     localStorage.setItem("notesArray", JSON.stringify(notesArray));
//     //---------------------------------------------

//     const newNote = document.createElement('div');
//     newNote.classList.add('note');
//     notesBox.appendChild(newNote);

//     const newTitle = document.createElement('p');
//     newTitle.classList.add('newTitle')
//     newNote.appendChild(newTitle);
//     newTitle.innerText = databaseNotes.title;

//     const newDivContainerBtnNotes = document.createElement('div');
//     newDivContainerBtnNotes.classList.add('box_buttons_notes')
//     newNote.appendChild(newDivContainerBtnNotes);

//     const btnCheck = document.createElement('button');
//     btnCheck.classList.add('buttons_edit');
//     btnCheck.innerHTML = '<i class="uil uil-check"></i>';
//     newDivContainerBtnNotes.appendChild(btnCheck);

//     const btnEdit = document.createElement('button');
//     btnEdit.classList.add('buttons_edit');
//     btnEdit.innerHTML = '<i class="uil uil-edit"></i>';
//     newDivContainerBtnNotes.appendChild(btnEdit);

//     const btnDelete = document.createElement('button');
//     btnDelete.classList.add('buttons_edit');
//     btnDelete.innerHTML = '<i class="uil uil-trash"></i>';
//     newDivContainerBtnNotes.appendChild(btnDelete);


//     // ---------------------------------------------------

//     const initCheked = () => {
//         newTitle.classList.toggle('active')
//     }

//     const initEdit = () => {
//         input.focus();
//         newTitle.innerText = input.value;   
//     }
    
//     const initDelete = () => {
//        newNote.classList.add('animation_remove') 
       
//        setInterval(() => {
//         newNote.remove()
//    }, 500)

//        const index = notesArray.indexOf(databaseNotes)
//        notesArray.splice(index, 1)
//     }

//     //added events to buttons

//     btnCheck.addEventListener('click', initCheked);
//     btnEdit.addEventListener('click', initEdit);
//     btnDelete.addEventListener('click', initDelete);

//     // ---------------------------------------------------
// }
// }

// const catchInptValue = () => {
//     addNote(input.value)
// }



// btnAddNote.addEventListener('click', catchInptValue)

// if(window.load = true) {
//     const sla = JSON.parse(localStorage.getItem("notesArray"))

//    for(let i = 0; i < 1; i++) {
//         console.log(sla[i].title)
//         console.log(sla.length)
//     }
// }


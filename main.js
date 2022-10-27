let form = document.querySelector('#form');
let input = document.querySelector('#input');
let msg = document.querySelector('#msg');
let posts = document.querySelector('#posts');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Button is clicked');
    formValidation();
});

let formValidation = ()=> {
   if(input.value === ''){
     msg.innerHTML = 'Post cannot be blank'
   }
   else{
    console.log('success')
     msg.innerHTML = '';
     acceptData();

   }
}

let data = {};

let acceptData = () => {
    data['text'] = input.value;
    console.log(data);
    createPost()
}

let createPost = () => {
    posts.innerHTML+= `
     <div>
            <p>${data.text}</p>
            <span class="options">
              <i onclick = 'editPost(this)' class="fas fa-edit"></i>
              <i onclick = 'deletePost(this)' class="fas fa-trash-alt"></i>
            </span>
          </div>
    ` 

    input.value = '';
}


let deletePost = (e) => {
  e.parentElement.parentElement.remove();
}


let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
}




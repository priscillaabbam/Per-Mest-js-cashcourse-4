fetch("http://localhost:3000/users")
 .then((data) => {
   return res .json();
})
.then((data)=> {
  console.log(data);
})
.catch((error) => {
  console.log(error);
});

const url = "http://localhost:3000/users";
async function getAllUser() {
 const response = await fetch("http//localhost:3000/users");
 const data = await response.json(url);
console.log(data);
}

async function getUser(userId) {
   const response = await fetch(`${url}/${userId}`);
   const data = await response.json();
   console.log(data);
}
// getAllUser();

let user ={
  firstName: "John",
  lastName:"Doe",
  username: "JohnDoe",
  email: "john.doe@gmail.com",
  gender: "Male",
};
// getUser(2);
async function creatUser(user) {
  const response = await fetch(url,{
        method: "POST",
        body:JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      const data = await response.json();
    console.log(data);
}
//createUser(user);
const data = {
  email: "john.doe@gmail.com",
};
async function updateUser(userId, data) {
  const response = await fetch(`${url}/${userId}`, {
    method:"PATCH",
    body:JSON.stringify(userData),
    headers:{
      "content-Type": "application/json"
    },
  });
  const data = await response.json();
  console.log(data);
}
updateUser(51, data);

async function deleteUser(userId) {
  const response = await fetch(`${url}/${userId}`,{
    method:"DELETE",
  });
  const data = await response.json();
  console.log(data);
}









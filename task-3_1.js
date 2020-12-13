let message = "";
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user["full time"] = true;
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);

for (const key of Object.keys(user)) {
  message += `${key}: ${user[key]}\n`;
  console.log(message);
}

console.log(message);

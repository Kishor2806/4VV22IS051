  fetch("http://20.244.56.144/evaluation-service/auth", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: "prajwalmkmys@gmail.com",
    name: "Prajwal M K",
    rollNo: "4VV22IS069",
    accessCode: "tqTSpD",
    clientID: '4de67f6b-9cdf-4174-b5a9-963e6b32fe30',
    clientSecret: 'XehvmGyXjDpSdqch'
  })
})
  .then(res => res.json())
  .then(data => {
    console.log("Auth Token Received:", data.token || data);
  })
  .catch(err => console.error("Authentication Failed:", err));
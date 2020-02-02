var executa = function(){
fetch("https://stark-citadel-09874.herokuapp.com/rentabilidade", {
  headers: new Headers({
    "Authorization": `Basic ${base64.encode(`${login}:${password}`)}`
  }),
}).then(response => {
  if (!response.ok) throw new Error(response.status);
  return response.json();
})
}


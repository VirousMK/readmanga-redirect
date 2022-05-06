let url = new URL(location.href);
let get = {};
url.search.substring(1).split('&').forEach(a => {
  a = a.split('=');
  get[a[0]] = a[1];
});

let form = document.createElement('form');
form.action = `https://${get.d}/search`;
form.method = 'post';

let input = document.createElement('input');
input.type = 'text';
input.name = 'q';
input.value = decodeURIComponent(get.q);

form.appendChild(input);
document.body.appendChild(form);
form.submit();
form.remove();

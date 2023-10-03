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

let input2 = document.createElement('input');
input2.type = 'text';
input2.name = 'fast-filter';
input2.value = 'FEDERATION_MANGA_SUBJECT'

form.appendChild(input);
form.appendChild(input2);
document.body.appendChild(form);
form.submit();
form.remove();

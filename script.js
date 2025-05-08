// 获取 DOM 元素
const linkList = document.getElementById('link-list');
const linkForm = document.getElementById('link-form');
const urlInput = document.getElementById('url');
const weightInput = document.getElementById('weight');

// 加载链接池（从本地存储）
function loadLinks() {
  const links = JSON.parse(localStorage.getItem('links')) || [];
  linkList.innerHTML = '';
  links.forEach((link, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${link.url} - 权重: ${link.weight} <button onclick="deleteLink(${index})">删除</button>`;
    linkList.appendChild(li);
  });
}

// 删除链接
function deleteLink(index) {
  const links = JSON.parse(localStorage.getItem('links')) || [];
  links.splice(index, 1);
  localStorage.setItem('links', JSON.stringify(links));
  loadLinks();
}

// 提交新链接
linkForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const url = urlInput.value.trim();
  const weight = parseInt(weightInput.value.trim(), 10);

  if (url && weight) {
    const links = JSON.parse(localStorage.getItem('links')) || [];
    links.push({ url, weight });
    localStorage.setItem('links', JSON.stringify(links));
    urlInput.value = '';
    weightInput.value = '';
    loadLinks();
  }
});

// 初始化
loadLinks();


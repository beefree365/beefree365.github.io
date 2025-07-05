// 本地预览用真实 Supabase 配置

const SUPABASE_URL = "SUPABASE_URL_PLACEHOLDER";
const SUPABASE_KEY = "SUPABASE_KEY_PLACEHOLDER";

async function fetchPosts() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/posts?select=*`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`
    }
  });
  return res.json();
}

async function renderPosts() {
  const posts = await fetchPosts();
  const list = document.getElementById('blog-list');
  list.innerHTML = posts.map(post => `
    <article>
      <h2>${post.title}</h2>
      <div>${post.content}</div>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderPosts);

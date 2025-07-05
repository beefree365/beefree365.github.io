// 本地预览用真实 Supabase 配置

const SUPABASE_URL = "https://qdjhgxyiymyqoimpdhda.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkamhneHlpeW15cW9pbXBkaGRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5MzEzOTksImV4cCI6MjA2NjUwNzM5OX0.SgHR42DTWamTqSE8NIzRXQPmmZCtse4z4fvI-8Ur6-4";

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

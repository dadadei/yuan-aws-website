const API_BASE = "https://zznttzp4tc.execute-api.us-east-1.amazonaws.com/test";


const listEl = document.getElementById("noteList");
const statusEl = document.getElementById("noteStatus");

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"
  }[c]));
}

async function loadNotes() {
  listEl.innerHTML = "Loading...";
  const r = await fetch(`${API_BASE}/notes?limit=20`);
  const data = await r.json();
  const notes = data.notes || [];

  if (!notes.length) {
    listEl.innerHTML = "<p>No notes yet.</p>";
    return;
  }

  listEl.innerHTML = notes.map(n => `
    <div style="border:1px solid #ddd;border-radius:12px;padding:12px 14px;margin:12px 0;">
      <strong>${escapeHtml(n.name || "Anonymous")}</strong>
      <div style="margin-top:6px;">${escapeHtml(n.body || "")}</div>
      <small style="color:#666;">${escapeHtml(n.created_at || "")}</small>
    </div>
  `).join("");
}

document.getElementById("noteSubmit").addEventListener("click", async () => {
  statusEl.textContent = "Posting...";
  const name = (document.getElementById("noteName").value || "").trim() || "Anonymous";
  const body = (document.getElementById("noteBody").value || "").trim();

  if (!body) {
    statusEl.textContent = "Message cannot be empty.";
    return;
  }

  const r = await fetch(`${API_BASE}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, body })
  });

  const data = await r.json().catch(() => ({}));
  if (!r.ok) {
    statusEl.textContent = `Error: ${data.error || r.status}`;
    return;
  }

  statusEl.textContent = "Posted ✅";
  document.getElementById("noteBody").value = "";
  await loadNotes();
});

loadNotes();

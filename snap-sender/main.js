const canvas = document.getElementById('snapCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const sendBtn = document.getElementById('sendBtn');
const downloadLink = document.getElementById('downloadLink');
const statusNote = document.getElementById('statusNote');

canvas.toBlob((blob) => {
  const file = new File([blob], 'black-snap.png', { type: 'image/png' });
  downloadLink.href = URL.createObjectURL(blob);

  const canShareFiles =
    navigator.canShare && navigator.canShare({ files: [file] });

  if (!canShareFiles) {
    sendBtn.textContent = 'Share sheet unavailable — download image';
    sendBtn.addEventListener('click', () => downloadLink.click());
    statusNote.innerHTML =
      'Your browser can\'t share files directly. <b>Download the image</b> ' +
      'and share it to Snapchat from your camera roll — open Snapchat, send it ' +
      'to your friend, done.';
    return;
  }

  sendBtn.addEventListener('click', async () => {
    try {
      await navigator.share({ files: [file], title: 'Black snap' });
    } catch (err) {
      if (err.name !== 'AbortError') {
        statusNote.textContent = 'Share failed: ' + err.message;
      }
    }
  });
}, 'image/png');

<script>
  const cursor = document.getElementById('customCursor');

  document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });

  document.addEventListener('mousedown', () => {
    cursor.style.width = '40px';
    cursor.style.height = '40px';
  });

  document.addEventListener('mouseup', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
  });
</script>

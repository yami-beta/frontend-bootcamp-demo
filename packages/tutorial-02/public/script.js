(function () {
  const content = document.getElementById("content");
  const addImage = (num) => {
    const img = document.createElement("img");
    img.src = `/assets/image.svg?id=${num}`;
    content.appendChild(img);
  };

  const searchParams = new URLSearchParams(location.search);
  const count = parseInt(searchParams.get("count"), 10);
  if (!count) {
    return;
  }

  for (let i = 0; i < count; i++) {
    addImage(i);
  }
})();

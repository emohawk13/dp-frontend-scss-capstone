function resetLayerPositions() {
  const move_pictures = document.querySelectorAll(".layer2");

  move_pictures.forEach((picture) => {
    picture.style.left = "0px";
    picture.style.top = "0px";
  });
}

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const move_pictures = document.querySelectorAll(".layer2");

  move_pictures.forEach((picture) => {
    const rectPicture = picture.getBoundingClientRect();
    const pictureX = rectPicture.left + rectPicture.width / 2;
    const pictureY = rectPicture.top + rectPicture.height / 2;
    const dx = mouseX - pictureX;
    const dy = mouseY - pictureY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const ratio = 2 / distance;

    const maxDistance = 10;

    const originalX = rectPicture.left;
    const originalY = rectPicture.top;

    let newX = originalX + dx * ratio;
    let newY = originalY + dy * ratio;

    const movedDistance = Math.sqrt(
      (newX - originalX) * (newX - originalX) +
        (newY - originalY) * (newY - originalY)
    );
    if (movedDistance > maxDistance) {
      const constrainedRatio = maxDistance / movedDistance;
      newX = originalX + dx * constrainedRatio;
      newY = originalY + dy * constrainedRatio;
    }

    picture.style.left = `${Math.round(newX)}px`;
    picture.style.top = `${Math.round(newY)}px`;
  });
});

function move() {
  document.addEventListener("scroll", () => {
    const triggerDiv = document.getElementById("moreDiv");
    if (!triggerDiv) return;

    const triggerRect = triggerDiv.getBoundingClientRect();
    const scrollTriggerOffset = 50;
    if (triggerRect.top <= window.innerHeight - scrollTriggerOffset) {
      resetLayerPositions();
    }
  });
}

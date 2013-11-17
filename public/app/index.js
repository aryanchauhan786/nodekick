(function() {
  function init() {
    app.game.init();
    app.gamePad.init({
      up: app.game.jump,
      left: app.game.attackLeft,
      right: app.game.attackRight
    });

    app.assets.init();
    app.drawer.init();
    drawLoop();
  }

  function drawLoop() {
    window.requestAnimationFrame(drawLoop);
    app.drawer.draw();
  }

  $(init);
})();

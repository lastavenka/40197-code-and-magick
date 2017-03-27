'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.strokeRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  var max = -1;

  for (var k = 0; k < times.length; k++) {
    var time = times[k];

    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = barWidth + 50;
  var initialX = 140;
  var initialY = 260;

  ctx.textBaseline = 'botttom';

  for (var i = 0; i < times.length; i++) {
    ctx.fillText(names[i], initialX + indent * i, initialY);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
    }

    ctx.fillRect(initialX + indent * i, initialY - 20 - times[i] * step, barWidth, times[i] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), initialX + indent * i, initialY - 30 - times[i] * step);
  }
};

const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      canvas.height = window.innerHeight - 120;
      canvas.width = window.innerWidth - 40;

      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";

      let brushsize = 3;
      let brushcolor = "black";
      let brushType = "round";

      document.getElementById("thickness").addEventListener("change", function () {
        brushsize = this.value;
      });
      document.getElementById("color").addEventListener("change", function () {
        brushcolor = this.value;
      });
      document.getElementById("brushType").addEventListener("change", function () {
        brushType = this.value;
      });

      let painting = false;
      function draw(e) {
        if (painting == false) return;

        let x = e.clientX - canvas.offsetLeft-1;
        let y = e.clientY - canvas.offsetTop;

        ctx.lineWidth = brushsize;
        ctx.lineCap = brushType;
        ctx.lineTo(x, y);
        ctx.strokeStyle = brushcolor;
        ctx.stroke();
      }
      function paintingstart(e) {
        painting = true;
        draw(e);
      }
      function paintingEnd(e) {
        painting = false;
        ctx.beginPath();
      }
      canvas.addEventListener("mousedown", paintingstart);
      canvas.addEventListener("mouseup", paintingEnd);
      canvas.addEventListener("mousemove", draw);

      document.getElementById("erase").addEventListener("click", function () {
        brushcolor = "white";
      });
      document.getElementById("brush").addEventListener("click", function () {
        brushcolor = document.getElementById("color").value;
      });
      document.getElementById("clear").addEventListener("click", function () {
        ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
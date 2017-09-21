const lineChart = {
    create: function(data) {
        $('#chart-area').html("");
        this.data = data;
        this.data.fontSize = 30;
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.data.width;
        this.canvas.height = this.data.height;
        this.c = this.canvas.getContext('2d');
        $('#chart-area').append(this.canvas);
        this.drawAxis();
        this.drawLine();
    },
    drawAxis: function () {
        const x = this.data.width;
        const y = this.data.height
        // Draw title
        this.c.font = this.data.fontSize+'px Roboto';
        this.c.textAlign = 'center';
        this.c.fillText(this.data.title, (this.data.width/2), this.data.fontSize);
        // Draw y axis
        this.c.beginPath();
        this.c.moveTo(0, this.data.fontSize + 10);
        this.c.lineTo(0, y);
        this.c.strokeStyle = '#070600';
        this.c.lineWidth = 5;
        this.c.stroke();
        //draw X axis 
        this.c.beginPath();
        this.c.moveTo(0, y);
        this.c.lineTo(x, y);
        this.c.stroke();
    },
    drawLine: function() {
        const x = this.data.width;
        const y = this.data.height - this.data.fontSize + 10;
        const values = this.data.values;
        const max = values.reduce((prev, current) => (prev > current) ? prev : current);
        const scaleY = y / (max + max * 0.1);
        const scaleX = x / (values.length - 1);
        this.c.beginPath();
        this.c.strokeStyle = this.data.color;
        this.c.lineWidth = 4;
        for(let i=0; i< values.length; i++) {
            if(i == 0){
                this.c.moveTo(i, (y - values[i] * scaleY));
            } else {
                this.c.lineTo((i * scaleX), (y - values[i] * scaleY));
            }
        }
        this.c.stroke();
    },
    test: function() {
        console.log('LineChart can hear you!');
    }
};





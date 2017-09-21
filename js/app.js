$(function() {
    $('#add-input-btn').click((e) => {
        e.preventDefault();
        const li = `<li class="form-list-item">
                        <label class="font-nicer">Value:</label>
                        <input name="value" class="form-input" type="number">
                    </li>`;
        $('#last-item').before(li);
    });
    $("#remove-input-btn").click((e) => {
        e.preventDefault();
        if($('#chart-list').find('li').length > 7) {
            $('#chart-list').find(' > li:nth-last-child(2)').remove();
        }
    });
    $("#chart-form").submit((e) => {
        e.preventDefault();
        const data = $("#chart-form").serializeArray();
        const d = formatData(data);
        lineChart.create(d);
        $('#chart-area-header').text('Copy or save your chart with right click to use it');
    });
});

function formatData(data) {
    const newData = {
        title: '',
        color: '',
        values: []
    };
    for(let i=0; i<data.length; i++) {
        if(data[i].name === 'title') {
            newData.title = data[i].value;
        } else if (data[i].name === 'color') {
            newData.color = data[i].value;
        } else if (data[i].name === 'width') {
            newData.width = Number(data[i].value);
        } else if (data[i].name === 'height') {
            newData.height = Number(data[i].value);
        }else {
            newData.values.push(Number(data[i].value));
        }
    }
    return newData;
}

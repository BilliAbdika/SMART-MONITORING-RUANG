/* DATE TIME */

function updateDateTime(){

    const now = new Date();

    let jam = now.getHours().toString().padStart(2,'0');
    let menit = now.getMinutes().toString().padStart(2,'0');
    let detik = now.getSeconds().toString().padStart(2,'0');

    document.getElementById("clock").innerHTML =
    `${jam}:${menit}:${detik}`;

    const bulan = [
        "Januari","Februari","Maret","April",
        "Mei","Juni","Juli","Agustus",
        "September","Oktober","November","Desember"
    ];

    let tanggal = now.getDate();
    let namaBulan = bulan[now.getMonth()];
    let tahun = now.getFullYear();

    document.getElementById("date").innerHTML =
    `${tanggal} ${namaBulan} ${tahun}`;

}

setInterval(updateDateTime,1000);

updateDateTime();

/* LABEL */

function getCurrentTime(){

    const now = new Date();

    return now.toLocaleTimeString();

}

const labels = [
    getCurrentTime(),
    getCurrentTime(),
    getCurrentTime(),
    getCurrentTime(),
    getCurrentTime(),
    getCurrentTime(),
    getCurrentTime(),
    getCurrentTime(),
    getCurrentTime(),
    getCurrentTime()
];

/* RANDOM DATA */

function randomData(min,max){

    return Math.floor(
        Math.random()*(max-min+1)
    )+min;

}

/* GRAFIK SUHU */

const suhuChart = new Chart(
document.getElementById('suhuChart'),{

    type:'line',

    data:{
        labels:labels,

        datasets:[{

            label:'Suhu',

            data:[22,24,25,26,27,28,29,30,31,30],

            borderColor:'#2f80ff',

            tension:0.4

        }]
    }

});

/* KELEMBABAN */

const kelembabanChart = new Chart(
document.getElementById('kelembabanChart'),{

    type:'line',

    data:{
        labels:labels,

        datasets:[{

            label:'Kelembaban',

            data:[40,42,45,50,55,60,58,54,50,48],

            borderColor:'#27ae60',

            tension:0.4

        }]
    }

});

/* ASAP */

const asapChart = new Chart(
document.getElementById('asapChart'),{

    type:'line',

    data:{
        labels:labels,

        datasets:[{

            label:'Asap',

            data:[60,65,70,68,75,80,78,74,70,68],

            borderColor:'#ff3b30',

            tension:0.4

        }]
    }

});

/* CAHAYA */

const cahayaChart = new Chart(
document.getElementById('cahayaChart'),{

    type:'line',

    data:{
        labels:labels,

        datasets:[{

            label:'Cahaya',

            data:[400,450,500,550,600,650,620,580,540,500],

            borderColor:'#f39c12',

            tension:0.4

        }]
    }

});

/* REALTIME */

setInterval(()=>{

    labels.shift();

    labels.push(getCurrentTime());

    /* SUHU */

    suhuChart.data.labels = labels;

    suhuChart.data.datasets[0].data.shift();

    suhuChart.data.datasets[0].data.push(
        randomData(20,35)
    );

    suhuChart.update();

    /* KELEMBABAN */

    kelembabanChart.data.labels = labels;

    kelembabanChart.data.datasets[0].data.shift();

    kelembabanChart.data.datasets[0].data.push(
        randomData(40,70)
    );

    kelembabanChart.update();

    /* ASAP */

    asapChart.data.labels = labels;

    asapChart.data.datasets[0].data.shift();

    asapChart.data.datasets[0].data.push(
        randomData(60,120)
    );

    asapChart.update();

    /* CAHAYA */

    cahayaChart.data.labels = labels;

    cahayaChart.data.datasets[0].data.shift();

    cahayaChart.data.datasets[0].data.push(
        randomData(350,850)
    );

    cahayaChart.update();

},2000);
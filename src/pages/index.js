import React from 'react'
import Link from 'gatsby-link'
import Doughnut from 'react-chartjs-2'
const chartOptions = {
          responsive: true,
          legend: {
            display: true
          },
          animation: {
            duration: 1200,
            easing: 'easeOutBack'
          },
          labels: {
            display: true
          },
          layout: {
            padding: {
                top: 20,
                bottom: 30
            },
          },
          tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                    var total = (data.datasets[0].data).reduce((a, b) => a + b, 0)
                    var label = data.labels[tooltipItem.index] || '';
                    label += ' : ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + " Guests"
                    label += ' : ' + Math.abs(Math.round(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] / total * 100))
                    label += '%'
                    
                    return label;
                },
             }
          },
          pieceLabel: {
             render: function (args) {
              // args will be something like:
              // { label: 'Label', value: 123, percentage: 50, index: 0, dataset: {...} }
              return args.label + '\n';

              // return object if it is image
              // return { src: 'image.png', width: 16, height: 16 };
            },
            fontFamily: 'Helvetica Neue',
            fontSize: 14,
            position: 'outside',
            textMargin: 10
          },
      }
const chartData = {labels: ["Guests RSVPed Yes", "Guests who have not", "Guest who said no"],
    datasets: [

    {data: [4, 22, 1],
    backgroundColor: ["#4caf50", "#f5f5f5", "#d32f2f"],
    labels: ["% RSVPed", "% who haven't replied", "% no"]}
    ]}

    const chartData2 = {labels: ["Guests who have showed up", "% who didn't show up", "% who did show up and said no", "% didn't show up and said yes"],
    datasets: [

    {data: [0, 22, 0, 0],
    backgroundColor: ["#558b2f", "#f5f5f5", "#00838f", "#ef5350"],
    labels: ["% showed up", "% didn't show up", "people who showed up and said they wouldn't", "bailers"]}
    ]}

const IndexPage = () => (
  <div>
    <p>Welcome to the BBQ guest counter.</p>
    <div>

    </div>
    <div id="container">
    <div id="left">
    <p># of Guests who have submitted an RSVP</p>
    <Doughnut data={chartData} options={chartOptions} height={250} />
    </div>
    <div id="right">
    <p># of People who showed up</p>
    <Doughnut data={chartData2} options={chartOptions} height={275} />
    </div>
    </div>
  </div>
)

export default IndexPage

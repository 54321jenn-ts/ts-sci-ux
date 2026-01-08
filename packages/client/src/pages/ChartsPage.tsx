import { Card } from '@tetrascience-npm/tetrascience-react-ui';
import '@tetrascience-npm/tetrascience-react-ui/index.css';
import Plot from 'react-plotly.js';

function ChartsPage() {
  // Chromatography Data - HPLC Analysis
  const chromatogramData: any = [
    {
      x: Array.from({ length: 200 }, (_, i) => i * 0.1),
      y: Array.from({ length: 200 }, (_, i) => {
        const t = i * 0.1;
        return (
          Math.exp(-((t - 5) ** 2) / 2) * 80 +
          Math.exp(-((t - 8.5) ** 2) / 1.5) * 120 +
          Math.exp(-((t - 12) ** 2) / 2.5) * 95 +
          Math.exp(-((t - 15.5) ** 2) / 1.8) * 110 +
          Math.random() * 3
        );
      }),
      type: 'scatter',
      mode: 'lines',
      name: 'UV Absorbance',
      line: { color: '#4E79A7', width: 2 },
    },
  ];

  // Temperature Profile - Bioreactor Monitoring
  const temperatureData: any = [
    {
      x: Array.from({ length: 100 }, (_, i) => i * 0.5),
      y: Array.from({ length: 100 }, (_, i) => {
        const baseline = 37;
        const variation = Math.sin(i * 0.2) * 0.3;
        const noise = (Math.random() - 0.5) * 0.1;
        return baseline + variation + noise;
      }),
      type: 'scatter',
      mode: 'lines',
      name: 'Temperature (°C)',
      line: { color: '#E15759', width: 2 },
    },
    {
      x: Array.from({ length: 100 }, (_, i) => i * 0.5),
      y: Array.from({ length: 100 }, () => 37),
      type: 'scatter',
      mode: 'lines',
      name: 'Target',
      line: { color: '#59A14F', width: 1, dash: 'dash' },
    },
  ];

  // Protein Concentration Assay - Standard Curve
  const standardCurveData: any = [
    {
      x: [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0],
      y: [0.05, 0.18, 0.35, 0.52, 0.68, 0.85, 1.02],
      mode: 'markers',
      type: 'scatter',
      name: 'Standards',
      marker: { size: 10, color: '#4E79A7' },
    },
    {
      x: [0, 3.0],
      y: [0.02, 1.0],
      mode: 'lines',
      type: 'scatter',
      name: 'Linear Fit (R² = 0.998)',
      line: { color: '#F28E2B', width: 2, dash: 'dash' },
    },
    {
      x: [1.2, 1.8, 2.3],
      y: [0.40, 0.59, 0.77],
      mode: 'markers',
      type: 'scatter',
      name: 'Samples',
      marker: { size: 12, color: '#E15759', symbol: 'diamond' },
    },
  ];

  // Particle Size Distribution
  const particleSizeData: any = [
    {
      x: ['0-10 nm', '10-50 nm', '50-100 nm', '100-200 nm', '200-500 nm', '500+ nm'],
      y: [5, 23, 45, 38, 15, 4],
      type: 'bar',
      name: 'Batch A',
      marker: { color: '#4E79A7' },
    },
    {
      x: ['0-10 nm', '10-50 nm', '50-100 nm', '100-200 nm', '200-500 nm', '500+ nm'],
      y: [3, 18, 52, 35, 12, 3],
      type: 'bar',
      name: 'Batch B',
      marker: { color: '#F28E2B' },
    },
  ];

  // Heatmap - Gene Expression Data
  const heatmapData: any = [
    {
      z: [
        [8.2, 7.5, 9.1, 6.8, 7.2, 8.9, 7.8, 8.5],
        [6.5, 7.8, 6.2, 8.1, 7.5, 6.9, 8.3, 7.1],
        [9.1, 8.5, 7.9, 9.3, 8.7, 9.0, 8.2, 8.8],
        [5.8, 6.2, 5.5, 6.9, 6.1, 5.9, 6.5, 6.3],
        [7.9, 8.2, 7.5, 8.6, 8.1, 7.8, 8.4, 8.0],
        [4.5, 5.1, 4.8, 5.5, 4.9, 5.2, 5.0, 4.7],
      ],
      x: ['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5', 'Sample 6', 'Sample 7', 'Sample 8'],
      y: ['Gene A', 'Gene B', 'Gene C', 'Gene D', 'Gene E', 'Gene F'],
      type: 'heatmap',
      colorscale: 'Viridis',
      colorbar: {
        title: 'Expression Level',
      },
    },
  ];

  // Box Plot - Statistical Distribution
  const boxPlotData: any = [
    {
      y: [2.3, 2.5, 2.4, 2.6, 2.7, 2.5, 2.4, 2.8, 2.6, 2.5, 2.9, 2.4, 2.7, 2.5, 2.6],
      type: 'box',
      name: 'Control',
      marker: { color: '#4E79A7' },
    },
    {
      y: [3.1, 3.3, 3.2, 3.5, 3.4, 3.2, 3.6, 3.3, 3.4, 3.2, 3.5, 3.3, 3.4, 3.2, 3.7],
      type: 'box',
      name: 'Treatment A',
      marker: { color: '#F28E2B' },
    },
    {
      y: [4.2, 4.5, 4.3, 4.6, 4.4, 4.5, 4.7, 4.4, 4.5, 4.3, 4.6, 4.4, 4.5, 4.3, 4.8],
      type: 'box',
      name: 'Treatment B',
      marker: { color: '#59A14F' },
    },
  ];

  const commonLayout: any = {
    autosize: true,
    margin: { l: 60, r: 30, t: 40, b: 60 },
    font: { family: 'Inter, system-ui, sans-serif' },
  };

  return (
    <div className="app-container">
      <div className="demo-grid">
        {/* Box Plot - Statistical Analysis */}
        <Card>
          <h3>Treatment Efficacy Analysis</h3>
          <p style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            Statistical comparison of cell viability across control and treatment groups showing median, quartiles, and outliers.
          </p>
          <Plot
            data={boxPlotData}
            layout={{
              ...commonLayout,
              xaxis: { title: 'Treatment Group' },
              yaxis: { title: 'Cell Viability (OD600)' },
              showlegend: false,
            }}
            config={{ responsive: true }}
            style={{ width: '100%', height: '400px' }}
          />
        </Card>

        {/* HPLC Chromatogram */}
        <Card>
          <h3>HPLC Chromatogram</h3>
          <p style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            High-Performance Liquid Chromatography analysis showing compound separation over time with distinct peaks for different analytes.
          </p>
          <Plot
            data={chromatogramData}
            layout={{
              ...commonLayout,
              xaxis: { title: 'Retention Time (min)' },
              yaxis: { title: 'UV Absorbance (mAU)' },
              showlegend: true,
            }}
            config={{ responsive: true }}
            style={{ width: '100%', height: '400px' }}
          />
        </Card>

        {/* Standard Curve */}
        <Card>
          <h3>Protein Assay Standard Curve</h3>
          <p style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            Bradford protein assay calibration curve with linear regression fit. Unknown samples plotted for concentration determination.
          </p>
          <Plot
            data={standardCurveData}
            layout={{
              ...commonLayout,
              xaxis: { title: 'Protein Concentration (mg/mL)' },
              yaxis: { title: 'Absorbance (595 nm)' },
              showlegend: true,
            }}
            config={{ responsive: true }}
            style={{ width: '100%', height: '400px' }}
          />
        </Card>

        {/* Particle Size Distribution */}
        <Card>
          <h3>Particle Size Distribution</h3>
          <p style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            Nanoparticle size distribution comparison between two manufacturing batches showing consistency in the 50-100 nm range.
          </p>
          <Plot
            data={particleSizeData}
            layout={{
              ...commonLayout,
              xaxis: { title: 'Size Range' },
              yaxis: { title: 'Frequency (%)' },
              barmode: 'group',
              showlegend: true,
            }}
            config={{ responsive: true }}
            style={{ width: '100%', height: '400px' }}
          />
        </Card>

        {/* Gene Expression Heatmap */}
        <Card>
          <h3>Gene Expression Heatmap</h3>
          <p style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            Differential gene expression analysis across multiple samples showing upregulated and downregulated genes.
          </p>
          <Plot
            data={heatmapData}
            layout={{
              ...commonLayout,
              xaxis: { title: 'Samples' },
              yaxis: { title: 'Genes' },
            }}
            config={{ responsive: true }}
            style={{ width: '100%', height: '400px' }}
          />
        </Card>

        {/* Bioreactor Temperature */}
        <Card>
          <h3>Bioreactor Temperature Monitoring</h3>
          <p style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            Real-time temperature monitoring of a bioreactor showing actual vs. target temperature with tight process control.
          </p>
          <Plot
            data={temperatureData}
            layout={{
              ...commonLayout,
              xaxis: { title: 'Time (hours)' },
              yaxis: { title: 'Temperature (°C)', range: [36.5, 37.5] },
              showlegend: true,
            }}
            config={{ responsive: true }}
            style={{ width: '100%', height: '400px' }}
          />
        </Card>
      </div>
    </div>
  );
}

export default ChartsPage;


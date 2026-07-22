// Client-side simulation of PDF Quotation Generation.
// Renders a high-fidelity, premium specification request layout matching the CONFIGURATION RENDERER screenshot.

export const generateQuotationPDF = (order) => {
  const printWindow = window.open('', '_blank');
  
  const cameraImageSrc = order.summary.cameraImage 
    ? (order.summary.cameraImage.startsWith('http') ? order.summary.cameraImage : window.location.origin + order.summary.cameraImage)
    : '';

  // Parse details safely
  const cameraTitle = order.summary.camera ? (order.summary.camera.includes(' (₹') ? order.summary.camera.split(' (₹')[0] : order.summary.camera) : '';
  const batteryTitle = order.summary.battery ? order.summary.battery.split(' (₹')[0] : '';
  const panelTitle = order.summary.panel ? order.summary.panel.split(' (₹')[0] : '';
  const storageTitle = order.summary.storage ? order.summary.storage.split(' (₹')[0] : '';

  const addOnsHTML = order.summary.accessories && order.summary.accessories.length > 0
    ? order.summary.accessories.map(acc => `
        <div class="spec-row">
          <span class="bullet-label">• ${acc}</span>
          <span class="spec-val">Selected</span>
        </div>
      `).join('')
    : '<div class="spec-row text-muted"><span class="bullet-label">• None</span><span class="spec-val">-</span></div>';

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Surya Drishti CCTV Specification - ${order.id}</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          background: #09090b;
          color: #fafafa;
          margin: 0;
          padding: 30px;
          display: flex;
          justify-content: center;
        }
        
        .main-container {
          max-width: 600px;
          width: 100%;
          background: #09090b;
          border: 1px solid #1c1c1f;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.8);
        }

        .header-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
          font-size: 10px;
          font-family: 'Space Grotesk', sans-serif;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #71717a;
          border-bottom: 1px solid #1c1c1f;
          padding-bottom: 12px;
        }

        .card-renderer {
          background: #111113;
          border: 1px solid #1c1c1f;
          border-radius: 20px;
          padding: 20px;
          margin-bottom: 24px;
        }

        .renderer-header {
          display: flex;
          justify-content: space-between;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #fafafa;
          margin-bottom: 16px;
        }

        .renderer-subtitle {
          color: #52525b;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 300px;
          background: #050505;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.03);
        }

        .image-container img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          padding: 20px;
        }

        .loop-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-family: 'Space Grotesk', sans-serif;
          color: #a1a1aa;
        }

        .loop-dot {
          width: 7px;
          height: 7px;
          background: #00F5FF;
          border-radius: 50%;
        }

        .type-badge {
          position: absolute;
          bottom: 16px;
          right: 16px;
          font-size: 10px;
          font-family: 'Space Grotesk', sans-serif;
          color: #a1a1aa;
        }

        .spec-container {
          margin-top: 24px;
        }

        .spec-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #52525b;
          border-bottom: 1px solid #1c1c1f;
          padding-bottom: 8px;
          margin-bottom: 12px;
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          font-size: 13px;
        }

        .spec-label {
          color: #71717a;
        }

        .spec-val {
          color: #fafafa;
          font-weight: 500;
        }

        .addons-section {
          margin-top: 16px;
        }

        .addons-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #52525b;
          margin-bottom: 8px;
        }

        .bullet-label {
          color: #a1a1aa;
        }

        .custom-pricing-note {
          background: rgba(0, 245, 255, 0.03);
          border: 1px solid rgba(0, 245, 255, 0.1);
          border-radius: 16px;
          padding: 16px;
          text-align: center;
          font-size: 11px;
          line-height: 1.6;
          color: #a1a1aa;
          margin-top: 24px;
        }

        .custom-pricing-header {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          color: #00F5FF;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 6px;
        }

        @media print {
          body {
            background: #fff;
            color: #000;
            padding: 0;
          }
          .main-container {
            border: none;
            box-shadow: none;
            background: #fff;
            color: #000;
            max-width: 100%;
          }
          .card-renderer {
            background: #f4f4f5;
            border-color: #e4e4e7;
          }
          .renderer-header {
            color: #000;
          }
          .renderer-subtitle {
            color: #71717a;
          }
          .image-container {
            background: #fff;
            border-color: #e4e4e7;
          }
          .loop-badge, .type-badge, .spec-label {
            color: #4b5563;
          }
          .spec-val, .bullet-label {
            color: #000;
          }
          .custom-pricing-note {
            background: #f0fdfa;
            border-color: #5eead4;
            color: #374151;
          }
          .custom-pricing-header {
            color: #0d9488;
          }
        }
      </style>
    </head>
    <body>
      <div class="main-container">
        <div class="header-meta">
          <span>Enquiry ID: ${order.id}</span>
          <span>Date: ${order.date}</span>
        </div>

        <div class="card-renderer">
          <div class="renderer-header">
            <span>Configuration Renderer</span>
            <span class="renderer-subtitle">Instant View</span>
          </div>

          <div class="image-container">
            ${cameraImageSrc ? `<img src="${cameraImageSrc}" alt="CCTV Node Model" />` : ''}
            <div class="loop-badge">
              <div class="loop-dot"></div>
              <span>${order.configType === 'solar' ? 'Solar Loop' : 'Grid Loop'}</span>
            </div>
            <div class="type-badge">
              <span>${order.configType === 'solar' ? 'Solar CCTV' : 'Electric CCTV'}</span>
            </div>
          </div>
        </div>

        <div class="spec-container">
          <div class="spec-title">Configuration Specifications</div>
          
          <div class="spec-row">
            <span class="spec-label">Camera Node:</span>
            <span class="spec-val">${cameraTitle || 'Selected'}</span>
          </div>
          
          ${batteryTitle ? `
          <div class="spec-row">
            <span class="spec-label">LFP Battery Storage:</span>
            <span class="spec-val">${batteryTitle}</span>
          </div>
          ` : ''}

          ${panelTitle ? `
          <div class="spec-row">
            <span class="spec-label">Albedo Solar input:</span>
            <span class="spec-val">${panelTitle}</span>
          </div>
          ` : ''}

          ${storageTitle ? `
          <div class="spec-row">
            <span class="spec-label">TF Memory Storage:</span>
            <span class="spec-val">${storageTitle}</span>
          </div>
          ` : ''}

          ${order.summary.dvr ? `
          <div class="spec-row">
            <span class="spec-label">${order.summary.dvr.includes('DVR') ? 'DVR Rec System:' : 'NVR Rec System:'}</span>
            <span class="spec-val">${order.summary.dvr}</span>
          </div>
          ` : ''}

          <div class="addons-section">
            <div class="addons-title">Add-ons</div>
            ${addOnsHTML}
          </div>
        </div>

        <div class="custom-pricing-note">
          <div class="custom-pricing-header">Custom Quote Review Pending</div>
          Our admin team will review these technical specifications and reach out via WhatsApp or call to <strong>${order.customer.phone}</strong> with a custom quote.
        </div>
      </div>
      <script>
        window.onload = function() {
          window.print();
        }
      </script>
    </body>
    </html>
  `;
  
  printWindow.document.write(htmlContent);
  printWindow.document.close();
};

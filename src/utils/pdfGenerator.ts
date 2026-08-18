import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export interface PdfExportOptions {
  title: string;
  subtitle?: string;
  marathiTitle?: string;
  filename?: string;
  elementId?: string;
  customHeader?: boolean;
}

/**
 * Downloads a colourful PDF of the target HTML element using html2canvas and jsPDF.
 */
export async function downloadElementAsPdf(
  elementOrId: HTMLElement | string,
  options: PdfExportOptions,
  onProgress?: (status: string) => void
): Promise<void> {
  const targetElement: HTMLElement | null =
    typeof elementOrId === 'string'
      ? document.getElementById(elementOrId)
      : elementOrId;

  if (!targetElement) {
    console.error(`Target element not found for PDF export`);
    throw new Error('Target element not found');
  }

  try {
    if (onProgress) onProgress('Preparing document...');

    // Save scroll position
    const originalScrollPos = window.scrollY;

    if (onProgress) onProgress('Rendering colourful pages (Devanagari & High-Res)...');

    // Render element using html2canvas
    const canvas = await html2canvas(targetElement, {
      scale: 2, // High resolution (retina crispness)
      useCORS: true,
      logging: false,
      allowTaint: true,
      backgroundColor: '#ffffff',
      windowWidth: targetElement.scrollWidth,
      onclone: (clonedDoc) => {
        // Find cloned element and ensure light-theme colors & full opacity
        const clonedTarget = clonedDoc.getElementById(
          typeof elementOrId === 'string' ? elementOrId : targetElement.id
        );
        if (clonedTarget) {
          clonedTarget.style.fontFamily =
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans Devanagari", "Mukta", sans-serif';
          
          // Remove dark mode classes from clone if needed for clean white-paper PDF
          const allElements = clonedTarget.querySelectorAll('*');
          allElements.forEach((el) => {
            const htmlEl = el as HTMLElement;
            // Ensure borders and text are solid
            if (window.getComputedStyle(htmlEl).color === 'rgba(0, 0, 0, 0)') {
              htmlEl.style.color = '#1e293b';
            }
          });
        }
      },
    });

    if (onProgress) onProgress('Generating PDF file...');

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Calculate dimensions
    const imgWidth = pdfWidth - 16; // 8mm margin on left and right
    const imgHeight = (canvasHeight * imgWidth) / canvasWidth;
    const pageHeight = pdfHeight - 20; // 10mm top & bottom margin

    let heightLeft = imgHeight;
    let position = 10; // 10mm top margin
    let pageNumber = 1;

    // First page
    pdf.addImage(imgData, 'JPEG', 8, position, imgWidth, imgHeight, undefined, 'FAST');
    
    // Add page footer
    addPdfBrandingFooter(pdf, pageNumber, options.title);

    heightLeft -= pageHeight;

    // Subsequent pages if content overflows A4
    while (heightLeft > 0) {
      position = -(pageHeight * pageNumber) + 10;
      pdf.addPage();
      pageNumber++;
      pdf.addImage(imgData, 'JPEG', 8, position, imgWidth, imgHeight, undefined, 'FAST');
      addPdfBrandingFooter(pdf, pageNumber, options.title);
      heightLeft -= pageHeight;
    }

    if (onProgress) onProgress('Downloading PDF...');

    // Sanitize filename
    const safeTitle = (options.filename || options.title || 'Minglish_Lesson')
      .replace(/[^a-zA-Z0-9_-]/g, '_')
      .toLowerCase();

    pdf.save(`${safeTitle}_minglish.pdf`);

    // Restore scroll
    window.scrollTo(0, originalScrollPos);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}

/**
 * Adds a small stylish branding footer to each PDF page.
 */
function addPdfBrandingFooter(pdf: jsPDF, pageNum: number, title: string) {
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  pdf.setFontSize(8);
  pdf.setTextColor(140, 150, 160);
  pdf.text(
    `Minglish • इंग्रजी व्याकरण सोप्या भाषेत | ${title}`,
    8,
    pdfHeight - 5
  );
  pdf.text(
    `Page ${pageNum}`,
    pdfWidth - 18,
    pdfHeight - 5
  );
}

/**
 * Triggers native high-resolution vector print dialog formatted specifically for A4 PDF saving.
 */
export function printElementAsPdf(elementOrId: HTMLElement | string, title: string): void {
  const target =
    typeof elementOrId === 'string'
      ? document.getElementById(elementOrId)
      : elementOrId;

  if (!target) {
    window.print();
    return;
  }

  // Create an isolated printable iframe for clean vector printing
  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = '0';
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow?.document;
  if (!doc) {
    window.print();
    return;
  }

  // Copy stylesheets from parent document
  const headContent = Array.from(document.head.querySelectorAll('link, style'))
    .map((el) => el.outerHTML)
    .join('\n');

  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title} - Minglish Grammar PDF</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${headContent}
        <style>
          @page {
            size: A4;
            margin: 12mm 10mm 15mm 10mm;
          }
          @media print {
            body {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
              background-color: #ffffff !important;
              color: #0f172a !important;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans Devanagari", "Mukta", sans-serif;
            }
            .no-print {
              display: none !important;
            }
            .print-page-break {
              page-break-after: always;
              break-after: page;
            }
            .print-avoid-break {
              break-inside: avoid;
              page-break-inside: avoid;
            }
          }
          body {
            background-color: #ffffff;
            color: #0f172a;
            padding: 10px;
          }
          .pdf-watermark-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 2px solid #4f46e5;
            padding-bottom: 8px;
            margin-bottom: 16px;
          }
        </style>
      </head>
      <body>
        <div class="pdf-watermark-header">
          <div style="font-weight: 800; font-size: 16px; color: #4f46e5;">
            Minglish • इंग्रजी व्याकरण
          </div>
          <div style="font-size: 11px; color: #64748b; font-weight: 600;">
            ${title} • अभ्यास संदर्भ साहित्य (PDF)
          </div>
        </div>
        <div>
          ${target.innerHTML}
        </div>
      </body>
    </html>
  `);
  doc.close();

  // Wait for styles and fonts to load inside iframe
  setTimeout(() => {
    try {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    } catch (e) {
      console.error('Print iframe error:', e);
      window.print();
    } finally {
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
    }
  }, 400);
}

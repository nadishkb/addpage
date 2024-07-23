
              function createPage() {
                  const pageName = document.getElementById('pageName').value;
                  if (!pageName) {
                      alert('Please enter a page name');
                      return;
                  }
                  const pageContent = `
                      <!DOCTYPE html>
                      <html lang="en">
                      <head>
                          <meta charset="UTF-8">
                          <meta name="viewport" content="width=device-width, initial-scale=1.0">
                          <title>${pageName}</title>
                      </head>
                      <body>
                          <h1>${pageName}</h1>
                          <p>This is a dynamically created page named ${pageName}.</p>
                      </body>
                      </html>
                  `;
                  const iframe = document.getElementById('newPage');
                  iframe.srcdoc = pageContent;
              }

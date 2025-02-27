const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Kontrola, že se jedná o POST request z formuláře
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    // Parsování dat z formuláře
    const payload = JSON.parse(event.body);
    const formData = payload.payload.data;

    // Přidání kontaktu do Ecomail
    const ecomailResponse = await fetch('https://api.ecomailapp.cz/lists/40/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Key': process.env.ECOMAIL_API_KEY
      },
      body: JSON.stringify({
        subscriber_data: {
          email: formData.email,
          name: formData.jmeno,
          surname: formData.prijmeni,
          phone: formData.telefon,
          custom_fields: {
            message: formData.zprava
          }
        },
        resubscribe: true,
        trigger_autoresponders: true,
        update_existing: true
      })
    });

    const ecomailData = await ecomailResponse.json();

    if (!ecomailResponse.ok) {
      throw new Error(`Ecomail API responded with status: ${ecomailResponse.status}, message: ${JSON.stringify(ecomailData)}`);
    }

    // Odeslání transakčního emailu přes Ecomail
    const transactionalResponse = await fetch('https://api.ecomailapp.cz/transactional/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Key': process.env.ECOMAIL_API_KEY
      },
      body: JSON.stringify({
        to: [{
          email: formData.email,
          name: `${formData.jmeno} ${formData.prijmeni}`
        }],
        subject: 'Děkujeme za váš zájem o InvestCzech',
        from: {
          email: 'info@investczech.cz',
          name: 'InvestCzech'
        },
        message: {
          text: `Dobrý den ${formData.jmeno},\n\nděkujeme za váš zájem. Brzy se vám ozveme s dalšími informacemi.\n\nS pozdravem,\nTým InvestCzech`,
          html: `<p>Dobrý den ${formData.jmeno},</p><p>děkujeme za váš zájem. Brzy se vám ozveme s dalšími informacemi.</p><p>S pozdravem,<br>Tým InvestCzech</p>`
        }
      })
    });

    if (!transactionalResponse.ok) {
      console.error('Error sending transactional email:', await transactionalResponse.text());
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Data byla úspěšně zpracována',
        ecomailResponse: ecomailData
      })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Chyba při zpracování dat',
        error: error.message
      })
    };
  }
};

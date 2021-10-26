import clevertap from 'clevertap-web-sdk'
clevertap.privacy.push({optOut: true}) // Set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({useIP: true})  // Set the flag to true, if the user agrees to share their IP data
clevertap.init(process.env.CLEVERTAP_ACCOUNT_ID) // Replace with values applicable to you. Refer below
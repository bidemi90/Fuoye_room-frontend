
    function setDemoData() { // Optional. This function is passed when the integration is at the demo stage and can be removed immediately for live.
        var obj = {
            firstName: "Jefferson",
            lastName: "Ighalo",
            email: "jefferson@ighalo.com",
            narration: "test payment",
            amount: "19999"
        };
        for (var propName in obj) {
            document.querySelector('#js-' + propName).setAttribute('value', obj[propName]);
        }
    }
 
    function makePayment() {
        var form = document.querySelector("#payment-form");
        var handler = RmPaymentEngine.init({
            key: "87y87qrknfgkjnsfgiuh57778", // Replace with public key
            customerId: "jefferson@ighalo.com", // Replace with customer id
            transactionId: "67897006679100998378", // Replace with transaction id
            firstName: form.querySelector('input[name="firstName"]').value,
            lastName: form.querySelector('input[name="lastName"]').value,
            email: form.querySelector('input[name="email"]').value,
            amount: form.querySelector('input[name="amount"]').value,
            narration: form.querySelector('input[name="narration"]').value,
            extendedData: { // Optional field. Details are available in the table
              customFields: [{
                name: "rrr",
                value: "340007777362"
              }],
              recurring: [{
                  "endDate": 1561935600000,
                  "frequency": "MON",
                  "maxUploadLimit": 0,
                  "numberOfTimes": 0,
                  "startDate": 1561478053677
              }]
            },
            onSuccess: function (response) { // Function call for use after the transaction has processed successfully
                console.log('callback Successful Response', response);
            },
            onError: function (response) { // Function call for use if the transaction fails
                console.log('callback Error Response', response);
            },
            onClose: function () { // Function call for use if the customer closes the transaction without completion
                console.log("closed");
            }
        });
        handler.openIframe();
    }
 
    window.onload = function () { // Optional. This function is passed when the integration is at the demo stage and can be removed immediately for live.
        setDemoData();
    };
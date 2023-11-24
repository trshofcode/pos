import { useEffect } from "react";

export default function CheckoutPage(props) {
    useEffect(() => {
        const snapSrcUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
        const myMidtransClientKey = "SB-Mid-client-0z27VHEHQsQXM8VX";

        const script = document.createElement("script");
        script.src = snapSrcUrl;
        script.setAttribute("data-client-key", myMidtransClientKey);
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    var payButton = document.getElementById("pay-button");
    payButton.addEventListener("click", function () {
        window.snap.pay(props.order.token, {
            onSuccess: function (result) {
                alert("payment success!");
                console.log(result);
            },
            onPending: function (result) {
                alert("payment pending!");
                console.log(result);
            },
            onError: function (result) {
                alert("payment failed!");
                console.log(result);
            },
            onClose: function () {
                alert("you closed the popup without finishing the payment");
            },
        });
    });

    return (
        <div className="min-h-screen p-4 items-center">
            <button id="pay-button">Bayar</button>

            <div>ahaha</div>
        </div>
    );
}
